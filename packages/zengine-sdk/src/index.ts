import Client from '@zenginehq/post-rpc-client'
import Sizer from 'content-sizer'
import { PostRPCClient, ContentSizer, Dimensions } from './external.types'
import { ZengineContextData, ZengineFilter, ZengineFiltersPanelOptions, ZengineHTTPResponse, ZenginePluginDataCallOptions, ZengineAPIRequestOptions, ZengineDropdownOptions } from './zengine.types'

const parentOrigin = (document.location.ancestorOrigins && document.location.ancestorOrigins[0]) || getReferrerOrigin() || 'https://platform.zenginehq.com'

const currencies = [{"id":"ALL","currency":"Lek","symbol":"ALL","decimals":2},{"id":"DZD","currency":"Algerian Dinar","symbol":"DZD","decimals":2},{"id":"ARS","currency":"Argentine Peso","symbol":"$","decimals":2},{"id":"AUD","currency":"Australian Dollar","symbol":"$","decimals":2},{"id":"BSD","currency":"Bahamian Dollar","symbol":"$","decimals":2},{"id":"BHD","currency":"Bahraini Dinar","symbol":"BHD","decimals":3},{"id":"BDT","currency":"Taka","symbol":"BDT","decimals":2},{"id":"AMD","currency":"Armenian Dram","symbol":"AMD","decimals":2},{"id":"BBD","currency":"Barbados Dollar","symbol":"$","decimals":2},{"id":"BMD","currency":"Bermudian Dollar","symbol":"$","decimals":2},{"id":"BTN","currency":"Ngultrum","symbol":"BTN","decimals":2},{"id":"BOB","currency":"Boliviano","symbol":"BOB","decimals":2},{"id":"BWP","currency":"Pula","symbol":"BWP","decimals":2},{"id":"BZD","currency":"Belize Dollar","symbol":"$","decimals":2},{"id":"SBD","currency":"Solomon Islands Dollar","symbol":"$","decimals":2},{"id":"BND","currency":"Brunei Dollar","symbol":"$","decimals":2},{"id":"MMK","currency":"Kyat","symbol":"MMK","decimals":2},{"id":"BIF","currency":"Burundi Franc","symbol":"BIF","decimals":0},{"id":"KHR","currency":"Riel","symbol":"KHR","decimals":2},{"id":"CAD","currency":"Canadian Dollar","symbol":"$","decimals":2},{"id":"CVE","currency":"Cabo Verde Escudo","symbol":"CVE","decimals":2},{"id":"KYD","currency":"Cayman Islands Dollar","symbol":"$","decimals":2},{"id":"LKR","currency":"Sri Lanka Rupee","symbol":"LKR","decimals":2},{"id":"CLP","currency":"Chilean Peso","symbol":"$","decimals":0},{"id":"CNY","currency":"Yuan Renminbi","symbol":"¥","decimals":2},{"id":"COP","currency":"Colombian Peso","symbol":"$","decimals":2},{"id":"KMF","currency":"Comoro Franc","symbol":"KMF","decimals":0},{"id":"CRC","currency":"Costa Rican Colon","symbol":"CRC","decimals":2},{"id":"HRK","currency":"Kuna","symbol":"HRK","decimals":2},{"id":"CUP","currency":"Cuban Peso","symbol":"₱","decimals":2},{"id":"CZK","currency":"Czech Koruna","symbol":"CZK","decimals":2},{"id":"DKK","currency":"Danish Krone","symbol":"DKK","decimals":2},{"id":"DOP","currency":"Dominican Peso","symbol":"$","decimals":2},{"id":"SVC","currency":"El Salvador Colon","symbol":"SVC","decimals":2},{"id":"ETB","currency":"Ethiopian Birr","symbol":"ETB","decimals":2},{"id":"ERN","currency":"Nakfa","symbol":"ERN","decimals":2},{"id":"FKP","currency":"Falkland Islands Pound","symbol":"£","decimals":2},{"id":"FJD","currency":"Fiji Dollar","symbol":"$","decimals":2},{"id":"DJF","currency":"Djibouti Franc","symbol":"DJF","decimals":0},{"id":"GMD","currency":"Dalasi","symbol":"GMD","decimals":2},{"id":"GIP","currency":"Gibraltar Pound","symbol":"£","decimals":2},{"id":"GTQ","currency":"Quetzal","symbol":"GTQ","decimals":2},{"id":"GNF","currency":"Guinea Franc","symbol":"GNF","decimals":0},{"id":"GYD","currency":"Guyana Dollar","symbol":"$","decimals":2},{"id":"HTG","currency":"Gourde","symbol":"HTG","decimals":2},{"id":"HNL","currency":"Lempira","symbol":"HNL","decimals":2},{"id":"HKD","currency":"Hong Kong Dollar","symbol":"$","decimals":2},{"id":"HUF","currency":"Forint","symbol":"HUF","decimals":2},{"id":"ISK","currency":"Iceland Krona","symbol":"ISK","decimals":0},{"id":"INR","currency":"Indian Rupee","symbol":"INR","decimals":2},{"id":"IDR","currency":"Rupiah","symbol":"IDR","decimals":2},{"id":"IRR","currency":"Iranian Rial","symbol":"IRR","decimals":2},{"id":"IQD","currency":"Iraqi Dinar","symbol":"IQD","decimals":3},{"id":"ILS","currency":"New Israeli Sheqel","symbol":"ILS","decimals":2},{"id":"JMD","currency":"Jamaican Dollar","symbol":"$","decimals":2},{"id":"JPY","currency":"Yen","symbol":"¥","decimals":0},{"id":"KZT","currency":"Tenge","symbol":"KZT","decimals":2},{"id":"JOD","currency":"Jordanian Dinar","symbol":"JOD","decimals":3},{"id":"KES","currency":"Kenyan Shilling","symbol":"KES","decimals":2},{"id":"KPW","currency":"North Korean Won","symbol":"₩","decimals":2},{"id":"KRW","currency":"Won","symbol":"₩","decimals":0},{"id":"KWD","currency":"Kuwaiti Dinar","symbol":"KWD","decimals":3},{"id":"KGS","currency":"Som","symbol":"KGS","decimals":2},{"id":"LAK","currency":"Kip","symbol":"LAK","decimals":2},{"id":"LBP","currency":"Lebanese Pound","symbol":"£","decimals":2},{"id":"LSL","currency":"Loti","symbol":"LSL","decimals":2},{"id":"LRD","currency":"Liberian Dollar","symbol":"$","decimals":2},{"id":"LYD","currency":"Libyan Dinar","symbol":"LYD","decimals":3},{"id":"MOP","currency":"Pataca","symbol":"MOP","decimals":2},{"id":"MWK","currency":"Malawi Kwacha","symbol":"MWK","decimals":2},{"id":"MYR","currency":"Malaysian Ringgit","symbol":"MYR","decimals":2},{"id":"MVR","currency":"Rufiyaa","symbol":"MVR","decimals":2},{"id":"MRO","currency":"Ouguiya","symbol":"MRO","decimals":2},{"id":"MUR","currency":"Mauritius Rupee","symbol":"MUR","decimals":2},{"id":"MXN","currency":"Mexican Peso","symbol":"$","decimals":2},{"id":"MNT","currency":"Tugrik","symbol":"MNT","decimals":2},{"id":"MDL","currency":"Moldovan Leu","symbol":"MDL","decimals":2},{"id":"MAD","currency":"Moroccan Dirham","symbol":"MAD","decimals":2},{"id":"OMR","currency":"Rial Omani","symbol":"OMR","decimals":3},{"id":"NAD","currency":"Namibia Dollar","symbol":"$","decimals":2},{"id":"NPR","currency":"Nepalese Rupee","symbol":"NPR","decimals":2},{"id":"ANG","currency":"Netherlands Antillean Guilder","symbol":"ANG","decimals":2},{"id":"AWG","currency":"Aruban Florin","symbol":"AWG","decimals":2},{"id":"VUV","currency":"Vatu","symbol":"VUV","decimals":0},{"id":"NZD","currency":"New Zealand Dollar","symbol":"$","decimals":2},{"id":"NIO","currency":"Cordoba Oro","symbol":"NIO","decimals":2},{"id":"NGN","currency":"Naira","symbol":"NGN","decimals":2},{"id":"NOK","currency":"Norwegian Krone","symbol":"NOK","decimals":2},{"id":"PKR","currency":"Pakistan Rupee","symbol":"PKR","decimals":2},{"id":"PAB","currency":"Balboa","symbol":"PAB","decimals":2},{"id":"PGK","currency":"Kina","symbol":"PGK","decimals":2},{"id":"PYG","currency":"Guarani","symbol":"PYG","decimals":0},{"id":"PEN","currency":"Sol","symbol":"PEN","decimals":2},{"id":"PHP","currency":"Philippine Peso","symbol":"₱","decimals":2},{"id":"QAR","currency":"Qatari Rial","symbol":"QAR","decimals":2},{"id":"RUB","currency":"Russian Ruble","symbol":"RUB","decimals":2},{"id":"RWF","currency":"Rwanda Franc","symbol":"RWF","decimals":0},{"id":"SHP","currency":"Saint Helena Pound","symbol":"£","decimals":2},{"id":"STD","currency":"Dobra","symbol":"STD","decimals":2},{"id":"SAR","currency":"Saudi Riyal","symbol":"SAR","decimals":2},{"id":"SCR","currency":"Seychelles Rupee","symbol":"SCR","decimals":2},{"id":"SLL","currency":"Leone","symbol":"SLL","decimals":2},{"id":"SGD","currency":"Singapore Dollar","symbol":"$","decimals":2},{"id":"VND","currency":"Dong","symbol":"VND","decimals":0},{"id":"SOS","currency":"Somali Shilling","symbol":"SOS","decimals":2},{"id":"ZAR","currency":"Rand","symbol":"ZAR","decimals":2},{"id":"SSP","currency":"South Sudanese Pound","symbol":"£","decimals":2},{"id":"SZL","currency":"Lilangeni","symbol":"SZL","decimals":2},{"id":"SEK","currency":"Swedish Krona","symbol":"SEK","decimals":2},{"id":"CHF","currency":"Swiss Franc","symbol":"CHF","decimals":2},{"id":"SYP","currency":"Syrian Pound","symbol":"£","decimals":2},{"id":"THB","currency":"Baht","symbol":"THB","decimals":2},{"id":"TOP","currency":"Pa’anga","symbol":"TOP","decimals":2},{"id":"TTD","currency":"Trinidad and Tobago Dollar","symbol":"$","decimals":2},{"id":"AED","currency":"UAE Dirham","symbol":"AED","decimals":2},{"id":"TND","currency":"Tunisian Dinar","symbol":"TND","decimals":3},{"id":"UGX","currency":"Uganda Shilling","symbol":"UGX","decimals":0},{"id":"MKD","currency":"Denar","symbol":"MKD","decimals":2},{"id":"EGP","currency":"Egyptian Pound","symbol":"£","decimals":2},{"id":"GBP","currency":"Pound Sterling","symbol":"£","decimals":2},{"id":"TZS","currency":"Tanzanian Shilling","symbol":"TZS","decimals":2},{"id":"USD","currency":"US Dollar","symbol":"$","decimals":2},{"id":"UYU","currency":"Peso Uruguayo","symbol":"$","decimals":2},{"id":"UZS","currency":"Uzbekistan Sum","symbol":"UZS","decimals":2},{"id":"WST","currency":"Tala","symbol":"WST","decimals":2},{"id":"YER","currency":"Yemeni Rial","symbol":"YER","decimals":2},{"id":"TWD","currency":"New Taiwan Dollar","symbol":"$","decimals":2},{"id":"CUC","currency":"Peso Convertible","symbol":"$","decimals":2},{"id":"ZWL","currency":"Zimbabwe Dollar","symbol":"$","decimals":2},{"id":"BYN","currency":"Belarusian Ruble","symbol":"BYN","decimals":2},{"id":"TMT","currency":"Turkmenistan New Manat","symbol":"TMT","decimals":2},{"id":"GHS","currency":"Ghana Cedi","symbol":"GHS","decimals":2},{"id":"VEF","currency":"Bolívar","symbol":"VEF","decimals":2},{"id":"SDG","currency":"Sudanese Pound","symbol":"£","decimals":2},{"id":"UYI","currency":"Uruguay Peso en Unidades Indexadas (URUIURUI)","symbol":"$","decimals":0},{"id":"RSD","currency":"Serbian Dinar","symbol":"RSD","decimals":2},{"id":"MZN","currency":"Mozambique Metical","symbol":"MZN","decimals":2},{"id":"AZN","currency":"Azerbaijanian Manat","symbol":"AZN","decimals":2},{"id":"RON","currency":"Romanian Leu","symbol":"RON","decimals":2},{"id":"CHE","currency":"WIR Euro","symbol":"CHE","decimals":2},{"id":"CHW","currency":"WIR Franc","symbol":"CHW","decimals":2},{"id":"TRY","currency":"Turkish Lira","symbol":"TRY","decimals":2},{"id":"XAF","currency":"CFA Franc BEAC","symbol":"XAF","decimals":0},{"id":"XCD","currency":"East Caribbean Dollar","symbol":"$","decimals":2},{"id":"XOF","currency":"CFA Franc BCEAO","symbol":"XOF","decimals":0},{"id":"XPF","currency":"CFP Franc","symbol":"XPF","decimals":0},{"id":"XAU","currency":"Gold","symbol":"XAU","decimals":null},{"id":"XDR","currency":"SDR (Special Drawing Right)","symbol":"XDR","decimals":null},{"id":"XAG","currency":"Silver","symbol":"XAG","decimals":null},{"id":"XPT","currency":"Platinum","symbol":"XPT","decimals":null},{"id":"XPD","currency":"Palladium","symbol":"XPD","decimals":null},{"id":"XUA","currency":"ADB Unit of Account","symbol":"XUA","decimals":null},{"id":"ZMW","currency":"Zambian Kwacha","symbol":"ZMW","decimals":2},{"id":"SRD","currency":"Surinam Dollar","symbol":"$","decimals":2},{"id":"MGA","currency":"Malagasy Ariary","symbol":"MGA","decimals":2},{"id":"COU","currency":"Unidad de Valor Real","symbol":"COU","decimals":2},{"id":"TJS","currency":"Somoni","symbol":"TJS","decimals":2},{"id":"AOA","currency":"Kwanza","symbol":"AOA","decimals":2},{"id":"BYR","currency":"Belarusian Ruble","symbol":"BYR","decimals":0},{"id":"BGN","currency":"Bulgarian Lev","symbol":"BGN","decimals":2},{"id":"CDF","currency":"Congolese Franc","symbol":"CDF","decimals":2},{"id":"BAM","currency":"Convertible Mark","symbol":"BAM","decimals":2},{"id":"EUR","currency":"Euro","symbol":"€","decimals":2},{"id":"MXV","currency":"Mexican Unidad de Inversion (UDI)","symbol":"MXV","decimals":2},{"id":"UAH","currency":"Hryvnia","symbol":"UAH","decimals":2},{"id":"GEL","currency":"Lari","symbol":"GEL","decimals":2},{"id":"BOV","currency":"Mvdol","symbol":"BOV","decimals":2},{"id":"PLN","currency":"Zloty","symbol":"PLN","decimals":2},{"id":"BRL","currency":"Brazilian Real","symbol":"R$","decimals":2},{"id":"CLF","currency":"Unidad de Fomento","symbol":"CLF","decimals":4},{"id":"XSU","currency":"Sucre","symbol":"XSU","decimals":null}];

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
 * Make a Fetch request to ZenQL graphql servers
 * This is useful as a fetch implementation that can be passed
 * to a graphql library (like Apollo or Relay)
 */
export async function znFetch (url: string, init?: Request): Promise<Response>
export async function znFetch (init: Request): Promise<Response>

export async function znFetch (param1: string | Request, param2?: Request | { headers: { [key: string]: string }, signal: AbortSignal }): Promise<Response> {
  const fetchOptions = typeof param1 === 'string' ? param2 : param1
  const url = typeof param1 === 'string' ? param1 : param1.url

  // pull out non-postMessage-friendly properties
  const { signal, headers: givenHeaders, ...sendingMeta } = fetchOptions || {}

  // ensure headers are a postMessage-friendly key/value object
  const sendingHeaders = givenHeaders instanceof Headers
    ? {}
    : givenHeaders || {}

  if (givenHeaders instanceof Headers) {
    givenHeaders.forEach((value: string, key: string) => {
      if (sendingHeaders[key]) {
        sendingHeaders[key] = `${sendingHeaders[key]}, ${value}`
      } else {
        sendingHeaders[key] = value
      }
    })
  }

  const fetchStatus = { complete: false }

  // send over postMessage to the actual fetcher
  // use Promise.race to prevent AbortSignal Listener from impacting performance of request
  const result: {
    body: string,
    headers: { [key: string]: string },
    fetchSignalAborted?: boolean
  } = await Promise.race([
    rpcClient.call({
      method: 'znFetch',
      args: {
        options: {
          apiVersion: '1'
        },
        url,
        fetchOptions: { headers: sendingHeaders, ...sendingMeta }
      }
    }),
    listenForAbortSignalOrCompletion(signal, fetchStatus)
  ])

  // update fetchStatus to cause Abort Signal listener to exit
  fetchStatus.complete = true

  if (result.fetchSignalAborted) {
    // if aborted, throw error according to AbortController specification
    // https://developers.google.com/web/updates/2017/09/abortable-fetch#reacting_to_an_aborted_fetch
    throw new DOMException(`Aborted Request: ${url}`, 'AbortError')
  }

  const {
    body,
    headers,
    ...receivingMeta
  } = result

  // create a new Response object to get all of the methods and types
  // needed for the rest of the fetch implementation (e.g. res.json(), res.ok, etc...)
  const response = new Response(body, { ...receivingMeta, headers: new Headers(headers) })

  return response
}

function sleep (ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function listenForAbortSignalOrCompletion (signal: AbortSignal | undefined, fetchStatus: { complete: boolean }): Promise<{ fetchSignalAborted: boolean }> {
  if (fetchStatus.complete) {
    await sleep(10) // go out of our way to lose the race, knowing the fetch succeeded

    return { fetchSignalAborted: false }
  }

  if (signal?.aborted) {
    return { fetchSignalAborted: true }
  }

  await sleep(50)

  return listenForAbortSignalOrCompletion(signal, fetchStatus)
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

const znNumberWithCommas = (amount:number, decimalCount: number) => {
  try {
    let decimal = ".", thousands = ",";
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;
    return (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
    return "NaN"
  }
};

const znCurrencySymbol = (code: string) => {
    let symbol = ''
    let result = currencies.filter(currency => currency.id === code)
    if (result.length > 0 ) {
        symbol = result[0].symbol;
    }
    return symbol
}

export const znNumericValue = (amount: string | number, field: ZengineField) =>{
    let isNegative = amount < 0;
    let result = Math.abs(amount)
    const properties =field?.settings?.properties
    const decimal = properties?.decimal
    // add decimal places
    result = result.toFixed(decimal)
    // add commas as thousands separator
    result = znNumberWithCommas(result,decimal)
    let symbol = (properties?.currency) ? znCurrencySymbol(properties.currency):false;
    // Prepend Currency Symbol
    if (symbol) {
        result = symbol + result;
    }
    // Prepend Sign if Negative
    if (isNegative) {
        result = '-' + result;
    }
    return result;
}
