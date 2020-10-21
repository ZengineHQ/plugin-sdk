export interface ZengineHTTPResponse<T> {
  data: {
    code: number
    data: T
    limit: number
    offset: number
    status: number
    totalCount: number
  }
  status: number
  headers: {
    [key: string]: string
  }
}

/**
 * These operator-prefixed property names can also be used as params to fine-tune your queries:
 *
 * `attribute: value` (attribute equals `value`) type: string | number | boolean
 *
 * `'not-attribute': value` (attribute does not equal `value`) type: string | number | boolean
 *
 * `'contains-attribute': value` (attribute contains `value`) type: string
 *
 * `'not-contains-attribute': value` (attribute does not contain `value`) type: string
 *
 * `'starts-with-attribute': value` (attribute starts with `value`) type: string
 *
 * `'ends-with-attribute': value` (attribute ends with `value`) type: string
 *
 * `'min-attribute': value` (attribute is at least `value`) type: number
 *
 * `'max-attribute': value` (attribute is no more than `value`) type: number
 *
 *
 * @example
 * // exclude resources where resource.field123 contains the string 'test'
 * 'not-contains-field123': 'test'
 *
 * // include resources where resource.field123 begins with the string 'test'
 * 'starts-with-field123': 'test'
 *
 * // only get resources where resource.folder.id is 45
 * 'folder.id': 45
 *
 * // query resources where resource.field456 is equal to or greater than 10
 * 'min-field456': 10
 */
export interface ZengineAPIRequestParams {
  filter?: ZengineFilter
  isComplete?: boolean
  /**
   * resource properties to sort by
   *
   * @example ['field123', 'field456']
   * @example 'folder.id'
   */
  sort?: string | string[]
  limit?: number
  /**
   * for pagination of records based on the `limit` param (which defaults to 20)
   * the first page is either 1 or 0, the second page is 2, and so on...
   */
  page?: number
  direction?: 'asc' | 'desc' | ('asc' | 'desc')[]
  /**
   * comma-separated string of resource attributes to be returned with this request
   * If this param is specified, no other attributes will be included
   */
  attributes?: string
  /**
   * Any numerical offset or string from the [Olson Database](https://en.wikipedia.org/wiki/Tz_database) or the string 'user' to use the current authenticated user's timezone
   */
  timezone?: string
  /**
   * comma-separated string listing related resources to be fetched along with this request
   */
  related?: string
  [key: string]: any
}

export interface ZengineAPIRequestOptions {
  method: 'post' | 'get' | 'put' | 'delete'
  url: string
  /**
   * post and put body
   */
  data?: any | any[]
  /**
   * query params
   */
  params?: ZengineAPIRequestParams
  /**
   * additional headers
   */
  headers?: {
    [key: string]: string
  }
}

export interface ZenginePluginDataCallOptions {
  namespace: string
  method: 'post' | 'get' | 'put' | 'delete'
  route: string
  options: {
    /**
     * post/put body
     */
    data?: any | any[]
    /**
     * query params
     */
    params?: ZengineAPIRequestParams
    /**
     * additional headers
     */
    headers?: {
      [key: string]: string
    }
  }
}

export interface ZengineDropdownOptions {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
  /**
   * list of events to listen on
   */
  events: { [key: string]: (item: any) => void }
  /**
   * Where the dropdown will appear
   */
  side: 'top' | 'bottom' | 'left' | 'right'
  /**
   * Any seedData to be received by the dropdown when it loads
   */
  context?: { [key: string]: any }
  /**
   * url pathname to open in the dropdown
   *
   * Example: '/dropdown.html'
   */
  src: string
}

export interface ZenginePluginView {
  type: string,
  location?: string,
  src: string,
  defaultDimensions?: {
    width: number | string
    height: number | string
  }
}

export interface ZenginePermissions {
  create: boolean | null
  read: boolean | null
  update: boolean | null
  delete: boolean | null
}

export interface ZengineUser {
  id: number
  resource?: any | null
  resourceId?: any | null
  role?: { id: number } | null
  permissions?: ZenginePermissions
  username?: string
  email: string
  displayName?: string
  created?: string
  modified?: string
  isConfirmed?: boolean
  authProvider?: {
    id: number
  }
  profile?: {
    firstName: string | null
    lastName: string | null
    publicName: string | null
    publicUrl: string | null
    address1: string | null
    address2: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    phone: {
      work: string | null
      mobile: string | null
      home: string | null
    }
    fax: string | null
    notes: string | null
  }
  billing?: {
    plan: any
    expirationDate: string
    status: any
  }
  settings?: {
    avatarUrl: string
    timezone: string
    dateFormat: string
    threading: boolean
    isTourOff: boolean
    isNewRecordNoticeDisabled: boolean
  }
  metadata?: {
    lastLogin: string
    isTourViewed: boolean
    recentlyVisitedWorkspaceIds: string
  }
  /**
   * Available when `?related=workspaceRoles` is queried on a `/users` request
   */
  workspaceRoles?: ZengineUserWorkspaceRole[]
}

export interface ZengineFormGroup {
  created?: string
  createdByUser?: ZengineUser
  description?: string | null
  /**
   * List of Form IDs
   * access property `fullForms` for complete form data
   */
  forms: { id: number }[]
  fullForms: ZengineForm[]
  id: number
  isDefault?: boolean
  modified?: string
  name?: string
  workspace?: {
    id: number
  }
}

export interface ZengineClient {
  id: number
  appName: string
}

export interface ZengineRole {
  created?: string
  id: number
  modified?: string
  name: string
}

export interface ZengineMember {
  created?: string
  id: number
  modified?: string
  role: {
    id: number
  }
  user: {
    displayName: string
    email: string
    id: number
    username: string
  }
}

export interface ZengineWorkspaceRole {
  id: number
  name: string
}

export interface ZengineUserWorkspaceRole {
  id: number
  email: string
  workspace: {
    id: number
  },
  workspaceRole: ZengineWorkspaceRole,
  created?: string
  modified?: string
}

export interface ZengineProgram {
  id: number
  name: string
  slug: string
  description?: string
  created?: string
  modified?: string
  workspace?: {
    id: number
  }
}

export interface ZengineWorkspace {
  created?: string
  description?: string | null
  formGroups?: ZengineFormGroup[] | null
  forms?: ZengineForm[]
  id: number
  members?: ZengineMember[]
  metadata?: {
    lastActivity: string
  },
  programs?: ZengineProgram[]
  name: string
  roles?: ZengineRole[]
  settings?: {
    logoUrl: string | null
  }
  taskLists?: {
    created: string
    createdByUser: {
      id: number
    }
    id: number
    modified: string
    name: string
    order: number
  }[]
}

export interface ZengineState {
  id: string
  abbreviation: string
  state: string
  country: ZengineCountry
}

export interface ZengineCountry {
  id: string
  country?: string
}

export interface ZengineDataView {
  columnWidths?: {
    [key: string]: number
  }
  created?: string
  createdByUser?: {
    id: number
  }
  fields: string[]
  filter: ZengineFilter
  groupByFields?: any
  id: number
  isDefault?: boolean
  modified?: string
  name: string
  order?: number
  sortByFields?: string[]
}

export type ZengineFilterPrefix = '' | 'not' | 'min' | 'max' | 'not-contains' | 'contains' | 'starts-with' | 'ends-with' | 'not-validates'

export interface ZengineFilter {
  and?: ZengineFilter[]
  or?: ZengineFilter[]
  prefix?: ZengineFilterPrefix
  attribute?: string
  value?: any
  filter?: ZengineFilter
}

export interface ZengineFiltersPanelOptions {
  formId: number
  filter: ZengineFilter
  /**
   * Whether to allow subfiltering on related fields. Defaults to `true`
   */
  subfilters?: boolean
  /**
   * defaults to `['and', 'or']` but can be `['and']` or `['or']`, as well
   */
  operators?: ('and' | 'or')[]
  /**
   * Whether to allow dynamic values such as `logged-in-user`. Defaults to `true`
   */
  dynamicValues?: boolean
  /**
   * Whether to allow nested conditions. Defaults to `true`
   */
  groups?: boolean
  /**
   * A list of specific fields to prevent the user from filtering on.
   * The list can contain an attribute like `'field123'`, where `123` is the ID of a field belonging to the form.
   * The list can also contain the following attributes: `'folder.id'`, `'createdByUser.id'`, `'created'`, and `'modified'`.
   */
  attributeBlacklist?: string[]
  /**
   * A list of prefixes to prevent the user from filtering on.
   */
  prefixBlacklist?: ZengineFilterPrefix[]
  /**
   * A list of field types to prevent the user from filtering on.
   */
  fieldTypeBlacklist?: ZengineFieldType[]
}

export type ZengineFieldType = 'calculated-field' | 'checkbox' | 'country-select' | 'date-picker' | 'dropdown' | 'file-upload' | 'heading' | 'hidden-field' | 'html' | 'link-counter' | 'linked' | 'member' | 'numeric' | 'page-break' | 'radio' | 'spacer' | 'state-select' | 'summary' | 'text' | 'text-area' | 'text-input' | 'year'

export interface ZengineForm {
  created?: string
  createdByUser?: ZengineUser
  dataViews?: ZengineDataView[]
  fields?: ZengineField[]
  folders?: ZengineFolder[]
  id: number
  isPublic?: boolean
  linkedForms?: {
    form: {
      id: number
    }
    keyField: {
      id: number
    }
    type: 'hasMany' | 'hasOne' | 'belongsTo'
  }[]
  modified?: string
  name?: string
  objectVersion?: string
  order?: number
  permissions?: ZenginePermissions
  purpose?: string | null
  settings?: {
    captcha: boolean
    confirmation: {
      emailAddress: string | null
      emailName: string | null
    }
    fieldIdMaps: {
      email: string | null
      recordName: string
    }
    layout: {
      css: any | null
      footer: any | null
      header: any | null
    }
    newRecordFolderId: number
    pendingRecordFolderId: number | null
    returnUrl: string | null
    style: {
      error: {
        backgroundColor: string
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
      font: {
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
      formWidth: string
      heading: {
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
      label: {
        columnWidth: string
      }
      row: {
        verticalSpacing: string
      }
      success: {
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
    }
    terminology?: {
      closedError: string
      confirmReplaceFile: string
      continue: string
      email: string
      invalidAlphaError: string
      invalidAlphaNumError: string
      invalidChoiceError: string
      invalidCurrencyDollarError: string
      invalidDateError: string
      invalidEmailError: string
      invalidExtensionsError: string
      invalidMultipleValuesError: string
      invalidNumberError: string
      invalidPostalError: string
      invalidSelectionError: string
      invalidUploadValue: string
      maxLengthError: string
      maxNumberError: string
      maxUploadSize: number | null
      maxWordsError: string
      minNumberError: string
      minWords: string
      minWordsError: string
      next: string
      oneRequiredError: string
      previous: string
      recordValidationError: string
      requiredFieldError: string
      submissionComplete: string
      submissionCompleteEmailBody: string | null
      submissionCompleteEmailSubject: string | null
      submissionExistsError: string
      submit: string
      uniqueFieldError: string
      upload: string
      uploadComplete: string
      uploadError: string
    }
  }
  singularName?: string
  workspace?: {
    id: number
  }
}

export interface ZengineFolder {
  created?: string
  id: number
  modified?: string
  name: string
  order?: number
  form?: {
    id: number
  }
}

export interface ZengineChoice {
  value: string
  label: string
}

export interface ZengineField {
  control?: boolean
  description?: string | null
  id: number
  label: string
  locked?: boolean
  name?: string | null
  order?: number
  purpose?: string | null
  rules?: ZengineFieldRule[] | null
  settings?: {
    properties: {
      aggregation: null
      calculation: null
      choices: null
      advancedChoices: ZengineChoice[] | null
      class: null
      cols: null
      currency: null
      decimal: number | null
      displayFields: null
      extensions: null
      filter: null
      height: null
      hidden: null
      linkedForm: null
      markdown: boolean
      maxNumber: null
      maxlength: null
      maxwordcount: null
      minNumber: null
      minwordcount: null
      multiple: boolean
      onBlur: null
      onChange: null
      onFocus: null
      placeholder: null
      provinces: boolean
      rows: null
      showAllChoices: boolean
      size: null
      summarizedForm: null
      uploadsize: null
      width: null
    }
    validation: {
      alpha: boolean
      alphaNumeric: boolean
      currencyDollar: boolean
      emailAddress: boolean
      numeric: boolean
      required: boolean
      unique: boolean
      zipCode: boolean
    }
  }
  type?: ZengineFieldType
}

export interface ZengineFieldRule {
  show: {
    filter: ZengineFilter
  }
}

export interface ZengineActivity {
  action?: 'create' | 'read' | 'update' | 'delete'
  changes?: {
    from: {
      /**
       * A field ID and it's value
       * ex: field123: 'hello world'
       */
      [key: string]: any
    }
    to: {
      /**
       * A field ID and it's value
       * ex: field123: 'hello world'
       */
      [key: string]: any
    }
  } | null
  created?: string
  createdByClient?: ZengineClient
  createdByUser?: ZengineUser
  id: number
  modified?: string
  record?: {
    id: number
  }
  resource?: 'files' | 'tasks' | 'events' | 'records' | 'notes' | 'replies' | 'invitees' | 'members' | 'jobs' | 'binary_export_jobs' | 'record_import_jobs' | 'record_export_jobs'
  resourceId?: number
}

export type ZengineLinkedFieldValue = {
  id: number | null
  name: string | null
}

export type ZengineUserFieldValue = {
  id: number | null
  name: string | null
  email: string | null
}

export type ZengineFieldValue = string | number | boolean | null | ZengineLinkedFieldValue | ZengineUserFieldValue

export interface ZengineRecordMetadata {
  activities?: ZengineActivity[]
  created?: string
  createdByClient?: ZengineClient
  createdByUser?: ZengineUser
  events?: any | null
  folder?: ZengineFolder
  form?: ZengineForm
  id: number
  isComplete?: boolean
  metadata?: {
    ipAddress: string | null
  }
  modified?: string
  name?: string
  notes?: any | null
  objectVersion?: string
  tasks?: any | null
  workspace?: {
    id: number
  }
}

export interface ZengineRecordFields {
  [key: string]: ZengineFieldValue
}

export type ZengineRecord = ZengineRecordMetadata & ZengineRecordFields

export interface ZengineContextData {
  constants: {
    apiUrl: string
    serviceUrl: string
    supportUrl: string
    zenQLUrl: string
  },
  plugin: {
    id: number
    name: string
    namespace: string
    /**
     * defined in plugin.json, not API
     */
    icon: string
    /**
     * defined in plugin.json, not API
     */
    views: ZenginePluginView[]
    firebaseAuthToken: string
    firebaseUrl: string
  }
  pluginView: ZenginePluginView
  seedData?: any
  user: ZengineUser
  workspace: ZengineWorkspace
  record: ZengineRecord | null
  form: ZengineForm | null
  dataView: ZengineDataView | null
  filter: ZengineFilter | null
  states: ZengineState[]
  countries: ZengineCountry[]
  location: {
    protocol: string
    host: string
    port: number
    hash: string
    href: string
    pathname: string
    searchParams: { [key: string]: string | number }
    pathParams: { [key: string]: string }
  }
}
