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
 * Validates whether a string adheres to a maximum word count.
 */
export const maxWordCount = (str: string, max: number): boolean => {
  return isString(str) && str.split(' ').length <= max;
}

/**
 * Validates whether a string adheres to a minimum word count.
 */
export const minWordCount = (str: string, min: number): boolean => {
  return isString(str) && str.split(' ').length >= min;
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
 * Validates whether a string contains only numeric characters and, optionally, spaces.
 */
export const numeric = (str: string, allowSpaces: boolean = false): boolean => {
  const regex = allowSpaces ? /^[0-9 ]+$/i : /^[0-9]+$/i;
  return isString(str) && matchesRegex(str, regex);
};
