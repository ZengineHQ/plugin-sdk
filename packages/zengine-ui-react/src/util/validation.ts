import _isObject from 'lodash/isObject';
import _isEmpty from 'lodash/isEmpty';

/**
 * Validates whether a value exists.
 */
export const exists = (value: any): boolean => value !== null && value !== undefined;

/**
 * Validates whether a value is empty.
 */
export const isEmpty = (value: any): boolean => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (_isObject(value)) {
    return _isEmpty(value);
  }
  return value === '' || !exists(value);
};

/**
 * Validates whether a value is a string.
 */
export const isString = (value: any): boolean => typeof value === 'string';

/**
 * Validates whether a string matches a regex.
 */
export const matchesRegex = (str: string, regex: RegExp | string): boolean => {
  const validationRegex = (regex instanceof RegExp ? regex : (new RegExp(regex)));
  return isString(str) && validationRegex.test(str);
};

/**
 * Validates whether a value is an email address.
 */
export const isEmail = (str: string): boolean => {
  if (!isString(str) || str.length === 0) {
    return false;
  }
  // eslint-disable-next-line
  return matchesRegex(str, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
};

/**
 * Validates whether a string adheres to a maximum length.
 */
export const maxLength = (str: string, max: number): boolean => {
  return isString(str) && str.length <= max;
};

/**
 * Validates whether a string adheres to a minimum length.
 */
export const minLength = (str: string, min: number): boolean => {
  return isString(str) && str.length >= min;
};

/**
 * Counts how many words are in a string.
 * This is a utility function used by maxWordCount() and minWordCount()
 */
export const wordCount = (str: string): number => {
  const matches = str.match(/(\S+)/g);
  return matches ? matches.length : 0;
};

/**
 * Validates whether a string adheres to a maximum word count.
 */
export const maxWordCount = (str: string, max: number): boolean => {
  return isString(str) && wordCount(str) <= max;
}

/**
 * Validates whether a string adheres to a minimum word count.
 */
export const minWordCount = (str: string, min: number): boolean => {
  return isString(str) && wordCount(str) >= min;
}

/**
 * Validates whether a string contains only alphabetic characters and, optionally, spaces.
 */
export const alpha = (str: string, allowSpaces: boolean = false): boolean => {
  const regex = allowSpaces ? /^[a-z ]+$/i : /^[a-z]+$/i;
  return isString(str) && matchesRegex(str, regex);
};

/**
 * Validates whether a string contains only alphabetic and numeric characters and, optionally, spaces.
 */
export const alphaNumeric = (str: string, allowSpaces: boolean = false): boolean => {
  const regex = allowSpaces ? /^[a-z0-9 ]+$/i : /^[a-z0-9]+$/i;
  return isString(str) && matchesRegex(str, regex);
};

/**
 * Validate whether a value is a number.
 */
export const isNumber = (val: any): boolean => typeof val === 'number';

/**
 * Validates whether a value is a number or a string containing only numeric characters.
 */
export const numeric = (val: any): boolean => {
  return isNumber(val) || (isString(val) && matchesRegex(val, /^[-+]?([0-9]*\.[0-9]+|[0-9]+)$/));
};

/**
 * Validates whether a string is a valid US area/zip code.
 */
export const zipCode = (str: string): boolean => {
  return isString(str) && matchesRegex(str, /(^\d{5}$)|(^\d{5}-\d{4}$)/);
};

/**
 * Validates whether a numeric value adheres to a maximum number restriction.
 */
export const maxNumber = (num: number|string, max: number|string): boolean => {
  return numeric(num) && numeric(max) && parseFloat(num as string) <= parseFloat(max as string);
};

/**
 * Validates whether a numeric value adheres to a minimum number restriction.
 */
export const minNumber = (num: number|string, min: number|string): boolean => {
  return numeric(num) && numeric(min) && parseFloat(num as string) >= parseFloat(min as string);
};
