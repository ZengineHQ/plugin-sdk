import Client from '@zenginehq/post-rpc-client'
import Sizer from 'content-sizer'
import { PostRPCClient, ContentSizer, Dimensions } from './external.types'
import { ZengineContextData, ZengineFilter, ZengineFiltersPanelOptions, ZengineHTTPResponse, ZenginePluginDataCallOptions, ZengineAPIRequestOptions, ZengineDropdownOptions } from './zengine.types'

const parentOrigin = (document.location.ancestorOrigins && document.location.ancestorOrigins[0]) || getReferrerOrigin() || 'https://platform.zenginehq.com'

/**
 * gets the origin from the document's referrer attribute, or returns undefined
 */
function getReferrerOrigin (): string | void {
  if (document.referrer) {
    const link = document.createElement('a')
    link.href = document.referrer

    return link.origin || (link.protocol + '//' + link.hostname)
  }
}

export const rpcClient: PostRPCClient = new Client(parentOrigin)

rpcClient.logging(false)
rpcClient.start()

window.addEventListener('beforeunload', () => {
  rpcClient.call({ method: 'reloadFrames' })
})

/**
 * Get Context Data from Zengine Admin state
 */
export function znContext (): Promise<ZengineContextData>
export function znContext (callback: (err: Error, context: ZengineContextData) => void): null

export function znContext (callback?: (err: Error, context: ZengineContextData) => void): Promise<ZengineContextData> | null {
  return rpcClient.call({ method: 'context', callback })
}

/**
 * Displays a confirmation dialog with your message and two buttons: Yes and Close
 * Sends a boolean to your promise or callback representing the user's selection
 */
export function znConfirm (message: string): Promise<boolean>
export function znConfirm (message: string, callback: (err: Error, confirmed: boolean) => void): null

export function znConfirm (message: string, callback?: (err: Error, confirmed: boolean) => void): Promise<boolean> | null {
  return rpcClient.call({ method: 'confirm', args: { message }, callback })
}

/**
 * Displays a temporary alert message at the top of the page
 */
export function znMessage (message: string, type: 'info' | 'saved' | 'warning' | 'error' = 'info', duration: number = 4000): Promise<undefined> {
  return rpcClient.call({
    method: 'message',
    args: { params: { message, type, duration } }
  })
}

/**
 * Displays a modal that allows the user to view and build a data filter.
 */
export function znFiltersPanel (options: ZengineFiltersPanelOptions): Promise<ZengineFilter>
export function znFiltersPanel (options: ZengineFiltersPanelOptions, callback: (err: Error, filter: ZengineFilter) => void): null

export function znFiltersPanel (options: ZengineFiltersPanelOptions, callback?: (err: Error, filter: ZengineFilter) => void): Promise<ZengineFilter> | null {
  return callback
    ? rpcClient.call({ method: 'filtersPanel', args: { options }, callback })
    : rpcClient.call({ method: 'filtersPanel', args: { options } })
}

/**
 * Inform the Zengine App of the plugin's current dimensions, to trigger an iframe resize if necessary and if space is available
 */
export function znResize (dimensions: Dimensions): Promise<Dimensions> {
  return rpcClient.call({ method: 'resize', args: { dimensions } })
}

async function updateHandler (dimensions: Dimensions) {
  const resized = await znResize(dimensions)
    .catch(err => err instanceof Error ? err : new Error(JSON.stringify(err)))

  if (resized instanceof Error) {
    return null
  }

  return resized
}

export const znSizer: ContentSizer = new Sizer(updateHandler)

/**
 * Automatically resizes plugin based on contents and dimensions of the plugin's page
 *
 * NB: Resizing may be naturally limited by the Zengine App
 */
export function autoSize () {
  znSizer.autoSize()
}

/**
 * Prevent further auto-resizing of the plugin
 */
export function stopAutoSizing () {
  znSizer.stopAutoSize()
}

/**
 * Make a call to the Zengine API
 */
export function znHttp (request: ZengineAPIRequestOptions): Promise<ZengineHTTPResponse>
export function znHttp (request: ZengineAPIRequestOptions, callback: (err: Error, resp: ZengineHTTPResponse) => void): null

export function znHttp (request: ZengineAPIRequestOptions, callback?: (err: Error, resp: ZengineHTTPResponse) => void): Promise<ZengineHTTPResponse> | null {
  return rpcClient.call({
    method: 'znHttp',
    args: {
      options: {
        apiVersion: '1'
      },
      request
    },
    callback
  })
}

/**
 * Make a call to a backend service directly
 */
export function znPluginData (options: ZenginePluginDataCallOptions, callback: (err: Error, resp: ZengineHTTPResponse) => void): null
export function znPluginData (options: ZenginePluginDataCallOptions): Promise<ZengineHTTPResponse>

export function znPluginData (options: ZenginePluginDataCallOptions, callback?: (err: Error, resp: ZengineHTTPResponse) => void): Promise<ZengineHTTPResponse> | null {
  return rpcClient.call({ method: 'znPluginData', args: options, callback })
}

// export znHttp', [['options', 'Object'], ['request', 'Object']], 'Object', RPC.znHttpHandler, 'Perform Zengine API HTTP Request');

// export modal', [['options', 'Object']], 'Object', RPC.modalOpenHandler(server), 'Open a Modal');

export function znOpenDropdown (options: ZengineDropdownOptions) {
  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    width = 400,
    height = 300,
    events = {},
    side = 'bottom',
    context,
    src
  } = options

  Object.keys(events).forEach(key => {
    rpcClient.subscribe(key, events[key])
  })

  const promise = rpcClient.call({
    method: 'dropdown',
    args: {
      options: {
        ...options,
        events: Object.keys(events)
      }
    }
  })

  promise.then(() => {
    Object.keys(events).forEach(key => {
      rpcClient.unsubscribe(key)
    })
  })

  return promise
}

// export openTooltip', [['options', 'Object']], 'undefined', RPC.openTooltipHandler(iframeElement), 'Open a Tooltip');

// export closeTooltip', [], 'undefined', RPC.closeTooltipHandler, 'Open a Tooltip');

export const znLocation = {
  searchParams: (query: string, value: string | number) => rpcClient.call({
    method: 'location',
    args: {
      method: 'searchParams',
      args: [query, value]
    }
  })
}
