export interface PostRPCClient {
  running: boolean
  timer?: undefined
  listener?: () => void
  name: 'PostRPC.Client'
  origin: string
  id: number
  queue: {
    method: string,
    args: any,
    timeout: number,
    callback: () => void | null,
    id: number,
    sent: number,
    resolve: () => void | null,
    reject: () => void | null
  }[]
  subscribed: { [key: string]: { callback: () => void } }
  _logging: boolean

  parent (): Window

  subscribe (event: string, callback: (item: any) => void): boolean

  unsubscribe (event: string): boolean

  nextID (): number

  start (): void

  stop (): void

  request (method: string, args: any, id: number): PostRPCRequest

  timeoutResponse (id: number): { jsonrpc: string, id: number, error: { code: number, message: string, data: string } }

  internalErrorResponse (id: number): { jsonrpc: string, id: number, error: { code: number, message: string, data: string } }

  call <CallOptions extends CallOptionsWithoutCallback> (details: CallOptions | HasCallback): CallOptions extends HasCallback ? null : Promise<any>

  timeoutHandler (): void

  post (targetWindow: Window, message: PostRPCRequest, origin: string): void

  response (response: any): void

  messageHandler (event: MessageEvent): void

  logging (enabled: boolean): void

  log (messages: any[], collapse?: boolean, color?: 'green'): void

  logGroup (group: string, messages: any[], color?: 'green'): void
}

type PostRPCRequest = {
  jsonrpc: string
  method: string
  args: any
  id: number
}

interface CallOptionsWithoutCallback {
  method: string
  args?: any | any[]
  timeout?: number
}

interface HasCallback {
  callback: (err: Error, ...args: any[]) => void
}

export interface Dimensions {
  height: number
  width: number
}

export interface ContentSizer {
  updateHandler (dimensions: Dimensions): Dimensions
  heightMethod: string
  widthMethod: string
  observer: MutationObserver
  auto: boolean
  currentWidth: number
  currentHeight: number
  events: ('animationstart' | 'webkitAnimationStart' | 'animationiteration' | 'webkitAnimationIteration' | 'animationend' | 'webkitAnimationEnd' | 'orientationchange' | 'transitionstart' | 'webkitTransitionStart' | 'MSTransitionStart' | 'oTransitionStart' | 'otransitionstart' | 'transitioniteration' | 'webkitTransitionIteration' | 'MSTransitionIteration' | 'oTransitionIteration' | 'otransitioniteration' | 'transitionend' | 'webkitTransitionEnd' | 'MSTransitionEnd' | 'oTransitionEnd' | 'otransitionend')[]

  measureAndUpdate (): void

  autoSize (): void

  addEventHandlers (): void

  removeEventHandlers (): void

  stopAutoSize (): void

  handleEvent (e: Event): void

  getWidth (method: string): number

  getHeight (method: string): number

  setupMutation (): MutationObserver

  isSizeChanged (originalValue: number, newValue: number, tolerance: number): boolean
}
