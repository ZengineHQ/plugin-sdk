import React, { ReactChild, ReactChildren } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import isEmpty from 'lodash/isEmpty';

import Button from '../atoms/Button';

interface FormProps {
  enableReinitialize?: boolean
  initialValues?: object
  onSubmit?: Function
  labelReset?: string
  labelSubmit?: string
  showReset: boolean
  showSubmit: boolean
  validate?: Function
  validateOnMount?: boolean
  validateOnBlur?: boolean
  validateOnChange?: boolean
  saveMessage?: string
  classes?: string
  children?: ReactChildren | ReactChild
}

interface FormikProperties {
  dirty: boolean
  isValid: boolean
  isSubmitting: boolean
  errors: object
  touched: boolean
}

/**
 * ZengineUIForm is an advanced form wrapper built on top of Formik.
 */
function ZengineUIForm (props: FormProps): React.ReactElement {
  const {
    enableReinitialize,
    initialValues,
    onSubmit,
    labelReset,
    labelSubmit,
    showReset,
    showSubmit,
    validate,
    validateOnMount,
    validateOnBlur,
    validateOnChange,
    saveMessage = 'Saving...',
    classes
  } = props;

  const validateForm = (values: object): object => {
    if (typeof validate === 'function') {
      return validate(values);
    }
    return {};
  };

  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues ?? {}}
      validateOnMount={validateOnMount}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        await onSubmit?.(values);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
      validate={validateForm}
    >
      {({ dirty, isValid, isSubmitting, errors, touched }: FormikProperties) => {
        return (
          <Form noValidate className={classes}>
            {props.children}

            {/* If the form has been touched and we have errors, display a message above buttons. */}
            {!isEmpty(errors) && !isEmpty(touched) ? (<div className="invalid-feedback d-block">
              Please fix the above errors and try again.
            </div>) : null}

            {/* If we're showing either a submit or a reset button add a "form-actions" wrapper for them */}
            {(showSubmit || showReset) && (
              <div className="form-actions d-flex align-items-center">
                {showSubmit && (
                  <Button
                    type="submit"
                    theme="primary"
                    aria-label={labelSubmit}
                    disabled={!touched || isSubmitting || !isValid}
                    classes='mr-2'
                  >
                    {labelSubmit !== undefined ? labelSubmit : ''}
                  </Button>
                )}

                {showReset && dirty && (
                  <Button
                    type="reset"
                    theme="link"
                    aria-label={labelReset}
                    disabled={isSubmitting}
                    classes='mr-2'
                  >
                    {labelReset !== undefined ? labelReset : ''}
                  </Button>
                )}
                {isSubmitting && <p className='mb-0 text-info'>{saveMessage}</p>}
              </div>
            )}
          </Form>
        )
      }}
    </Formik>
  );
}

ZengineUIForm.propTypes = {
  /**
   * Pass elements to be rendered into the form.
   **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Callback that will receive valid, submitted form values.
   **/
  onSubmit: PropTypes.func.isRequired,
  /**
   * Initial data, if any, to populate the form with.
   **/
  initialValues: PropTypes.object,
  /**
   * Customize the label for the "Reset Form" button.
   **/
  labelReset: PropTypes.string,
  /**
   * Customize the label for the "Save Form" button.
   **/
  labelSubmit: PropTypes.string,
  /**
   * Whether or not to display the reset button.
   **/
  showReset: PropTypes.bool,
  /**
   * Whether or not to display the submit button.
   **/
  showSubmit: PropTypes.bool,
  /**
   * Additional custom form-level validation function.
   **/
  validate: PropTypes.func,
  /**
   * Whether to validate the Form on first mount.
   **/
  validateOnMount: PropTypes.bool,
  /**
   * Whether to validate the Form on blur.
   **/
  validateOnBlur: PropTypes.bool,
  /**
   * Whether to validate the Form every time values change.
   **/
  validateOnChange: PropTypes.bool,
  /**
   * Whether to enable reinitializing the Form.
   **/
  enableReinitialize: PropTypes.bool,
  /**
   * HTML classes to be added as-is to the form.
   **/
  classes: PropTypes.string,
};

ZengineUIForm.defaultProps = {
  initialValues: {},
  labelReset: 'Reset',
  labelSubmit: 'Save',
  showReset: true,
  showSubmit: true,
  classes: '',
  validateOnMount: true,
  validateOnBlur: true,
  validateOnChange: true,
};

export default ZengineUIForm;
