import isObject from 'lodash/isObject';

/**
 * Return `option` elements for the select.
 * This handles accepting options as an array of either strings or objects with a "key" and "value" props.

 * @param {array} options
 *
 * @returns {array}
 */
const extractOptions = (options: Array<string | object>): object[] => {
  return options.map(opt => isObject(opt) ? opt : { key: `${opt}`, value: `${opt}` });
};

export default extractOptions;
