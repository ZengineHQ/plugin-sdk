import React from 'react';
import PropTypes from 'prop-types';

/**
 * Utility to display an error message for a Formik field.
 * The message will only be displayed if the field has been touched and has an error.
 *
 * This is used primarily by the input Molecules and unless you are writing your own custom input molecules
 * you will probably not have no use for it.
 */
function ErrorMessage ({ meta }): React.ReactElement {
  // We add display block inline here because the default Bootstrap styles require a container to have certain classes
  // for this to appear, however we are controlling the visibility ourselves so this makes it fit our needs.
  return meta.touched === true ? <div className="invalid-feedback d-block">
    {meta.error}
  </div> : null;
}

ErrorMessage.propTypes = {
  /**
   * Formik field metadata object.
   **/
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired
};

export default ErrorMessage;
