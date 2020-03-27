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
    return [] as SelectOption[];
  }
  return options.map(opt => isObject(opt)
    ? { key: `${opt.key}`, value: `${opt.value}` }
    : { key: `${opt}`, value: `${opt}` });
};

export default extractOptions;
