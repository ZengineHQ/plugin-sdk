import React, { createContext, useEffect, useState, useCallback, useMemo, FunctionComponent, Context } from 'react'
import { znContext } from '@zenginehq/zengine-sdk'
import { ZengineContextData, ZengineField, ZengineForm, ZengineFieldType, ZengineFolder } from '@zenginehq/zengine-sdk/lib/zengine.types'

type ZengineContext = {
  context?: ZengineContextData
  helpers?: {
    getFieldLabel: (id: number) => string
    getFieldType: (id: number) => ZengineFieldType
    getFormName: (id: number) => string
    getForm: (id: number) => ZengineForm
    isFieldType: (id: number, type: ZengineFieldType) => boolean
    isDatePicker: (id: number) => boolean
    isLinkedField: (id: number) => boolean
    isRadio: (id: number) => boolean
    isNumeric: (id: number) => boolean
    isCheckbox: (id: number) => boolean
    isDropdown: (id: number) => boolean
    isMultiSelect: (id: number) => boolean
    formHasField: (formId: number, fieldId: number) => boolean
    getFormFields: (id: number, dataFieldsOnly?: boolean) => ZengineField[] | undefined
    getFormFolders: (id: number) => ZengineFolder[] | undefined
    getFieldById: (id: number) => ZengineField | undefined
  }
  /**
   * Triggers a refetching of context, which, when fulfilled,
   * will cause the ZnContextProvider and children to re-render
   * with the updated context data and helpers
   */
  triggerContextRefresh?: () => Promise<void>
}

export const ZengineContext: Context<ZengineContext> = createContext({})

type ZnContextProviderProps = {
  noloader: boolean,
  LoadingStateComponent: React.Component | string
}

export const ZnContextProvider: FunctionComponent<ZnContextProviderProps> = ({ children, noloader, LoadingStateComponent }) => {
  const [context, setContext] = useState<ZengineContextData>()

  const fieldMap: { [key: string]: ZengineField & { form: ZengineForm } } = useMemo(() => {
    if (!context || !context.workspace || !Array.isArray(context.workspace.forms)) return {}

    return context.workspace.forms.reduce((map, form) => ({
      ...map,
      ...form.fields.reduce((fMap, field) => ({ ...fMap, [field.id]: { ...field, form } }), {})
    }), {})
  }, [context])

  /**
   * @type {{ [key: string]: import('@zenginehq/zengine-sdk/lib/zengine.types').ZengineForm }}
   */
  const formMap: { [key: string]: ZengineForm } = useMemo(() => {
    if (!context || !context.workspace || !Array.isArray(context.workspace.forms)) return {}

    return context.workspace.forms.reduce((map, form) => ({ ...map, [form.id]: form }), {})
  }, [context])

  const getForm = useCallback((id: number) => formMap[id], [context])
  const getFormName = useCallback((id: number) => formMap[id]?.name, [context])
  const getFieldLabel = useCallback((id: number) => fieldMap[id]?.label, [context])
  const getFieldType = useCallback((id: number) => fieldMap[id]?.type, [context])
  const getFieldById = useCallback((id: number) => fieldMap[id], [context])
  const isFieldType = useCallback((id: number, type: ZengineFieldType) => getFieldType(id) === type, [context])
  const isDatePicker = useCallback((id: number) => isFieldType(id, 'date-picker'), [context])
  const isLinkedField = useCallback((id: number) => isFieldType(id, 'linked'), [context])
  const isRadio = useCallback((id: number) => isFieldType(id, 'radio'), [context])
  const isNumeric = useCallback((id: number) => isFieldType(id, 'numeric'), [context])
  const isCheckbox = useCallback((id: number) => isFieldType(id, 'checkbox'), [context])
  const isDropdown = useCallback((id: number) => isFieldType(id, 'dropdown'), [context])
  const formHasField = useCallback((formId: number, fieldId: number) => fieldMap[fieldId]?.form?.id === formId, [context])
  const getFormFields = useCallback((id: number, dataFieldsOnly?: boolean) => {
    const form = formMap[id]

    if (!form) return form

    if (dataFieldsOnly) {
      return form.fields.filter(field => [
        'calculated-field',
        'checkbox',
        'country-select',
        'date-picker',
        'dropdown',
        'file-upload',
        'link-counter',
        'linked',
        'member',
        'numeric',
        'radio',
        'state-select',
        'summary',
        'text-area',
        'text-input',
        'year'
      ].includes(field.type))
    }

    return form.fields
  }, [context])
  const getFormFolders = useCallback((id: number) => formMap[id]?.folders, [context])
  const isMultiSelect = useCallback((id: number) => {
    if (isCheckbox(id)) {
      return true
    }

    return !!getFieldById(id)?.settings?.properties?.multiple
  }, [context])

  const helpers = {
    getFieldLabel,
    getFieldType,
    isFieldType,
    getFormName,
    isDatePicker,
    isLinkedField,
    isRadio,
    isCheckbox,
    isDropdown,
    formHasField,
    getForm,
    isNumeric,
    getFormFields,
    getFormFolders,
    getFieldById,
    isMultiSelect
  }

  const triggerContextRefresh = async () => {
    const freshContext = await znContext()
      .catch(err => {
        console.error('Unable to load context: ', err)

        return undefined // thanks TypeScript...
      })

    setContext(freshContext)
  }

  useEffect(() => {
    triggerContextRefresh()
  }, [])

  return <ZengineContext.Provider value={{ context, helpers, triggerContextRefresh }}>
    {noloader || context
      ? children
      : LoadingStateComponent || <h3 className='text-blue-500 text-center'>Loading Zengine Context...</h3>}
  </ZengineContext.Provider>
}
