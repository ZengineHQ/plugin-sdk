import isEmpty from 'lodash/isEmpty';

/**
 * Returns CSS classes to add to form inputs.
 *
 * @param {object} meta The Formik Field meta object.
 * @param {string} extra Any additional classes to add to the input.
 *
 * @returns {string}
 */
const getFieldClasses = (meta: object, extra: string): string => {
  let classes = ['form-control'];

  if ((meta as any).touched === true) {
    classes.push(isEmpty((meta as any).error) ? 'is-valid' : 'is-invalid');
  }

  if (extra !== undefined) {
    classes = classes.concat(extra.split(' '));
  }

  return classes.join(' ');
};

export default getFieldClasses;
