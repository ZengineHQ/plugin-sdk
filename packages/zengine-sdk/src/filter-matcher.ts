import { ZengineFilter, ZengineRecord } from './zengine.types'
import './polyfills.js'

interface RuleFunctionMapInterface {
  [key: string]: string
}

export interface RuleOptions {
  subfiltering?: boolean
}

export const ruleFunctionMap: RuleFunctionMapInterface = {
  '': 'ruleEquals',
  'not': 'ruleDoesNotEqual',
  'min': 'ruleMinimum',
  'max': 'ruleMaximum',
  'contains': 'ruleContains',
  'not-contains': 'ruleDoesNotContain',
  'starts-with': 'ruleStartsWith',
  'ends-with': 'ruleEndsWith',
  'in': 'ruleIn',
  'not-in': 'ruleNotIn'
}

export const parseNumber = (input: string): string => {
  return String(input)
    .replace('$', '')
    .replace(',', '')
}

interface RuleMatcherInterface {
  [key: string]: Function
}

export const matchers: RuleMatcherInterface = {
  ruleEquals: function (recordValue: any, ruleValue: any): boolean {
    if (Array.isArray(recordValue)) {
      return recordValue.length === 0
    }
    return String(ruleValue).toLowerCase() === String(recordValue).toLowerCase()
  },
  ruleDoesNotEqual: function (recordValue: any, ruleValue: any): boolean {
    if (Array.isArray(recordValue)) {
      return recordValue.length > 0
    }
    return String(ruleValue).toLowerCase() !== String(recordValue).toLowerCase()
  },
  ruleMinimum: function (recordValue: any, ruleValue: any) {
    if (Array.isArray(recordValue)) {
      return false
    }
    if (recordValue === '') {
      return false
    }
    // Do numeric comparison if filter rule value is numeric. For consistency with API,
    // record values are somewhat forgiving, while filter rules must be a valid number.
    if (ruleValue && !isNaN(Number(ruleValue))) {
      recordValue = parseNumber(recordValue)

      try {
        ruleValue = parseFloat(ruleValue)
        recordValue = parseFloat(recordValue)
      } catch (err) {
        return false
      }

      return recordValue >= ruleValue
    }
    // Loose comparison, don't use 'localeCompare' because we only want to compare
    // numbers or well-formatted dates, which work with normal string comparison.
    return recordValue >= ruleValue
  },
  ruleMaximum: function (recordValue: any, ruleValue: any) {
    if (Array.isArray(recordValue)) {
      return false
    }
    if (recordValue === '') {
      return false
    }
    // Do numeric comparison if filter rule value is numeric. For consistency with API,
    // record values are somewhat forgiving, while filter rules must be a valid number.
    if (ruleValue && !isNaN(Number(ruleValue))) {
      recordValue = parseNumber(recordValue)

      try {
        ruleValue = parseFloat(ruleValue)
        recordValue = parseFloat(recordValue)
      } catch (err) {
        return false
      }

      return recordValue <= ruleValue

    }
    // Loose comparison, don't use 'localeCompare' because we only want to compare
    // numbers or well-formatted dates, which work with normal string comparison.
    return recordValue <= ruleValue
  },
  ruleContains: function (recordValue: any, ruleValue: any) {
    if (Array.isArray(recordValue)) {
      // Normalize Value as Array
      if (!Array.isArray(ruleValue)) {
        ruleValue = [ruleValue]
      }

      for (let index = 0; index < ruleValue.length; index++) {
        if (recordValue.indexOf(ruleValue[index]) === -1) {
          return false
        }
      }
      return true
    }
    return String(recordValue).indexOf(String(ruleValue)) !== -1

  },
  ruleDoesNotContain: function (recordValue: any, ruleValue: any) {
    return !matchers.ruleContains(recordValue, ruleValue)
  },
  ruleStartsWith: function (recordValue: any, ruleValue: any) {
    if (Array.isArray(recordValue)) {
      return false
    }
    return String(recordValue).startsWith(String(ruleValue))
  },
  ruleEndsWith: function (recordValue: any, ruleValue: any) {
    if (Array.isArray(recordValue)) {
      return false
    }
    return String(recordValue).endsWith(String(ruleValue))
  },
  ruleIn: function (recordValue: any, ruleValue: any) {
    if (!Array.isArray(ruleValue)) {
      return false
    }
    if (Array.isArray(recordValue)) {
      for (let i = 0; i < recordValue.length; i++) {
        if (matchers.ruleIn(recordValue[i], ruleValue)) {
          return true
        }
      }
      return false
    } else {
      const iRecordValue = String(recordValue).toLowerCase()
      const iRuleValues = ruleValue.map(function (value) {
        return String(value).toLowerCase()
      })
      return iRuleValues.indexOf(iRecordValue) !== -1
    }
  },
  ruleNotIn: function (recordValue: any, ruleValue: any) {
    if (!Array.isArray(ruleValue)) {
      return false
    }
    return !matchers.ruleIn(recordValue, ruleValue)
  }
}

export const getRuleValues = function (filter: ZengineFilter) {
  if (typeof filter.value === 'string' && filter.value.indexOf('|') !== -1) {
    return filter.value.split('|')
  }
  if (filter.value === 'null' || filter.value === null) {
    return ['']
  }
  return [filter.value]
}

export const getRecordValue = function (record: ZengineRecord, filter: ZengineFilter) {
  const attributePieces: string[] = String(filter.attribute).split('.')
  // Parse current record value of this rule's attribute, including dotted names (e.g. "folder.id")
  let recordValue: any = record

  attributePieces.forEach(function (attributePiece: string) {
    recordValue = recordValue && recordValue[attributePiece]
  })

  // Parse sub-object properties to use for check - e.g. field123.value for upload, field456.id for linked/member
  if (recordValue) {
    if (recordValue.value !== undefined) {
      recordValue = recordValue.value
    } else if (recordValue.id !== undefined) {
      recordValue = recordValue.id
    }
  }

  if (recordValue === null || recordValue === undefined) {
    return ''
  }

  return recordValue
}

export const recordMatchesRule = function (record: ZengineRecord, rule: ZengineFilter, options: RuleOptions = {}) {
  const operators = ['and', 'or']

  if (operators.indexOf(Object.keys(rule)[0]) !== -1) {
    // Rule contains "and"/"or" key - nested filter
    return recordMatchesFilter(record, rule, options)
  }

  if (rule.filter !== undefined) {
    if (options.subfiltering) {
      const subRecord: any = record[rule.attribute as string]
      return recordMatchesFilter(subRecord, rule.filter, options)
    } else {
      throw new Error('Subfilter matching is not supported')
    }
  }

  if (typeof rule.value === 'string' && rule.value.split('|').indexOf('logged-in-user') !== -1) {
    throw new Error('Dynamic filter conditions are not supported')
  }

  // From here, we know we have a normal rule with "prefix", "attribute", and "value" properties.
  const recordValue = getRecordValue(record, rule)
  const ruleValues = getRuleValues(rule)

  // Run actual match logic based on rule prefix
  const matchFunctionName: string = ruleFunctionMap[rule.prefix as string]
  const matchFunction: Function = matchers[matchFunctionName]

  for (let i in ruleValues) {
    if (matchFunction(recordValue, ruleValues[i])) {
      return true
    }
  }
  // All ruleValues failed to match
  return false
}

export const recordMatchesFilter = function (record: ZengineRecord, filter: ZengineFilter, options: RuleOptions = {}) {
  const currentOperator: string = Object.keys(filter)[0]

  // @ts-ignore
  if (filter[currentOperator].length === 0) {
    // Empty filter / no rules - considered a "match all"
    return true
  }

  // @ts-ignore
  for (let i in filter[currentOperator]) {
    // @ts-ignore
    const match = recordMatchesRule(record, filter[currentOperator][i], options)
    if (currentOperator === 'or' && match) {
      return true
    }
    if (currentOperator === 'and' && !match) {
      return false
    }
  }
  // "and" - no misses by this point, return true
  // "or" - no matches by this point, return false
  return currentOperator === 'and'
}

export default recordMatchesFilter
