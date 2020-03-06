import React, { createContext, useEffect, useState, useCallback, useMemo, FunctionComponent, Context } from 'react'
import { znContext } from '@zenginehq/zengine-sdk'
import { ZengineContextData, ZengineField, ZengineForm, ZengineFieldType } from '@zenginehq/zengine-sdk/lib/zengine.types'

type ZengineContext = {
  context?: ZengineContextData
  helpers?: {
    getFieldLabel: (id: number) => string
    getFieldType: (id: number) => ZengineFieldType
    getFormName: (id: number) => string
    isFieldType: (id: number, type: ZengineFieldType) => boolean
    isDatePicker: (id: number) => boolean
    isLinkedField: (id: number) => boolean
    isRadio: (id: number) => boolean
    isCheckbox: (id: number) => boolean
    formHasField: (formId: number, fieldId: number) => boolean
    getFormFields: (id: number, dataFieldsOnly?: boolean) => ZengineField[] | undefined
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
      ...form.fields.reduce((fMap, field) => ({ ...fMap, [field.id]: { ...field, form } }))
    }), {})
  }, [context])

  /**
   * @type {{ [key: string]: import('@zenginehq/zengine-sdk/lib/zengine.types').ZengineForm }}
   */
  const formMap: { [key: string]: ZengineForm } = useMemo(() => {
    if (!context || !context.workspace || !Array.isArray(context.workspace.forms)) return {}

    return context.workspace.forms.reduce((map, form) => ({ ...map, [form.id]: form }), {})
  }, [context])

  const getFormName = useCallback(id => formMap[id]?.name, [context])
  const getFieldLabel = useCallback(id => fieldMap[id]?.label, [context])
  const getFieldType = useCallback(id => fieldMap[id]?.type, [context])
  const getFieldById = useCallback(id => fieldMap[id], [context])
  const isFieldType = useCallback((id, type: ZengineFieldType) => getFieldType(id) === type, [context])
  const isDatePicker = useCallback(id => isFieldType(id, 'date-picker'), [context])
  const isLinkedField = useCallback(id => isFieldType(id, 'linked'), [context])
  const isRadio = useCallback(id => isFieldType(id, 'radio'), [context])
  const isCheckbox = useCallback(id => isFieldType(id, 'checkbox'), [context])
  const formHasField = useCallback((formId, fieldId) => fieldMap[fieldId]?.form?.id === formId, [context])
  const getFormFields = useCallback((id, dataFieldsOnly) => {
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

  const helpers = {
    getFieldLabel,
    getFieldType,
    isFieldType,
    getFormName,
    isDatePicker,
    isLinkedField,
    isRadio,
    isCheckbox,
    formHasField,
    getFormFields,
    getFieldById
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
