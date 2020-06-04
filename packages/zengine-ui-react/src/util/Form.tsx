import React, { ReactChild } from 'react';
import { Formik, Form } from 'formik';
import isEmpty from 'lodash/isEmpty';

import Button from '../atoms/Button';

interface FormProps {
  enableReinitialize?: boolean
  initialValues?: object
  onSubmit?: Function
  onExtra?: Function
  afterSubmit?: Function
  labelReset?: string
  labelSubmit?: string
  labelExtra?: string
  showReset?: boolean
  showSubmit?: boolean
  showExtra?: boolean
  validate?: Function
  validateOnMount?: boolean
  validateOnBlur?: boolean
  validateOnChange?: boolean
  saveMessage?: string
  classes?: string
  children?: ReactChild | ReactChild[]
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
    onExtra,
    afterSubmit,
    labelReset,
    labelSubmit,
    labelExtra,
    showReset,
    showSubmit,
    showExtra,
    validate,
    validateOnMount,
    validateOnBlur,
    validateOnChange,
    saveMessage,
    classes
  } = props;

  const validateForm = (values: object): object => {
    if (typeof validate === 'function') {
      return validate(values);
    }
    return {};
  };

  const onExtraHelper = () => {
    console.warn('here');
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
        afterSubmit?.(values);
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
            {(showSubmit === true || showReset === true) && (
              <div className="form-actions d-flex align-items-center">
                {showExtra === true && (
                  <Button
                    type="button"
                    theme="secondary"
                    aria-label={labelExtra}
                    disabled={isSubmitting}
                    classes="mr-2"
                    onClick={onExtraHelper}
                  >
                    {labelExtra !== undefined ? labelExtra : ''}
                  </Button>
                )}

                {showSubmit === true && (
                  <Button
                    type="submit"
                    theme="primary"
                    aria-label={labelSubmit}
                    disabled={isSubmitting || !isValid || isEmpty(touched)}
                    classes="mr-2"
                  >
                    {labelSubmit !== undefined ? labelSubmit : ''}
                  </Button>
                )}

                {showReset === true && dirty && (
                  <Button
                    type="reset"
                    theme="link"
                    aria-label={labelReset}
                    disabled={isSubmitting}
                    classes="mr-2"
                  >
                    {labelReset !== undefined ? labelReset : ''}
                  </Button>
                )}

                {isSubmitting && <p className="mb-0 text-info">{saveMessage}</p>}
              </div>
            )}
          </Form>
        )
      }}
    </Formik>
  );
}

ZengineUIForm.defaultProps = {
  initialValues: {},
  labelReset: 'Reset',
  labelSubmit: 'Save',
  showReset: true,
  showSubmit: true,
  classes: '',
  enableReinitialize: true,
  validateOnMount: false,
  validateOnBlur: false,
  validateOnChange: true,
  saveMessage: 'Saving...',
};

export default ZengineUIForm;
