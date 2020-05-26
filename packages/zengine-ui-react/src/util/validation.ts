import _isObject from "lodash/isObject";
import _isEmpty from "lodash/isEmpty";

/**
 * Validates whether a value exists.
 */
export const exists = (value: any): boolean =>
  value !== null && value !== undefined;

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
  return value === "" || !exists(value);
};

/**
 * Validates whether a value is a string.
 */
export const isString = (value: any): boolean => typeof value === "string";

/**
 * Validates whether a value matches a regex.
 */
export const matchesRegex = (str: string, regex: RegExp | string): boolean => {
  const validationRegex = regex instanceof RegExp ? regex : new RegExp(regex);
  return validationRegex.test(str.toString());
};

/**
 * Validates whether a value is an email address.
 */
export const isEmail = (string: string): boolean => {
  if (string.length === 0) {
    return false;
  }
  // eslint-disable-next-line
  return matchesRegex(
    string,
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
  );
};

/**
 * Factory to return a field validation function.
 */
export const useFieldValidation = (required: Function | boolean, customValidation?: Function) => (value: any) => {
  // If required is false the field isn't required so just skip this step.
  if (required !== false) {
    // If required isn't false but it's not a function, default to a standard empty check.
    if (typeof required !== "function") {
      required = isEmpty;
    }

    // Validate requiredness.
    if (!required(value)) {
      return "Required";
    }
  }

  // Finally, perform additional custom validation.
  if (typeof customValidation === "function") {
    const res = customValidation(value);

    // Handle rejected promises so they don't throw and instead just trigger an error.
    if (res instanceof Promise) {
      return res.catch((err) => err);
    }
    return res;
  }
};
