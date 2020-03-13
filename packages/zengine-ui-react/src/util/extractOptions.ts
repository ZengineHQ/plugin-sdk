import isObject from 'lodash/isObject';
import { SelectOption } from '../atoms/Select';

/**
 * Return `option` elements for the select.
 * This handles accepting options as an array of either strings or objects with a "key" and "value" props.

 * @param {array} options
 *
 * @returns {array}
 */
const extractOptions = (options: Array<SelectOption | string> | undefined): SelectOption[] => {
  if (options === undefined) {
    return [];
  }
  return options.map(opt => isObject(opt) ? opt : { key: `${opt}`, value: `${opt}` });
};

export default extractOptions;
