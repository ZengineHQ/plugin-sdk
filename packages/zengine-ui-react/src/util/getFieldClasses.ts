import { FieldMetaProps } from 'formik';

/**
 * Returns CSS classes to add to form inputs.
 *
 * @param {object} meta The Formik Field meta object.
 * @param {string} extra Any additional classes to add to the input.
 *
 * @returns {string}
 */
const getFieldClasses = (meta: any, extra?: string): string => {
  let classes = ['form-control'];

  if (meta.touched === true) {
    classes.push(meta.error === undefined ? 'is-valid' : 'is-invalid');
  }

  if (extra !== undefined) {
    classes = classes.concat(extra.split(' '));
  }

  return classes.join(' ');
};

export default getFieldClasses;
