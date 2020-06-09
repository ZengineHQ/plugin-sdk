import React, { useRef, ReactChild } from 'react';
import { Formik, Form } from 'formik';
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';

import Button from '../atoms/Button';
import FocusFormErrors from "./FocusFormErrors";

interface FormProps {
  enableReinitialize?: boolean
  initialValues?: object
  onSubmit?: Function
  onSecondary?: Function
  afterSubmit?: Function
  labelReset?: string
  labelSubmit?: string
  labelSecondary?: string
  showReset?: boolean
  showSubmit?: boolean
  showSecondary?: boolean
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
  errors: { [key: string]: string }
  touched: { [key: string]: boolean }
  values: object
}

/**
 * ZengineUIForm is an advanced form wrapper built on top of Formik.
 */
function ZengineUIForm (props: FormProps): React.ReactElement {
  const {
    enableReinitialize,
    onSubmit,
    onSecondary,
    afterSubmit,
    labelReset,
    labelSubmit,
    labelSecondary,
    showReset,
    showSubmit,
    showSecondary,
    validate,
    validateOnMount,
    validateOnBlur,
    validateOnChange,
    saveMessage,
    classes
  } = props;

  // Make sure all child fields are initialized with at least an empty value.
  const initialValues = Object.assign(props.initialValues ?? {});
  React.Children.forEach(props.children as ReactChild[], (c: any) => {
    const name = c.props.name;
    if (!(name in initialValues)) {
      initialValues[name] = '';
    }
  });

  const valuesRef = useRef({});

  const validateForm = (values: object): object => {
    if (typeof validate === 'function') {
      return validate(values);
    }
    return {};
  };

  const onSecondaryHelper = (): void => {
    if (typeof onSecondary === 'function') {
      onSecondary(valuesRef.current);
    }
  };

  const allFieldsTouched = (touched: { [key: string]: boolean }): boolean => {
    const touchedCount = Object.keys(touched).filter((key: string) => touched[key]).length;
    return Object.keys(initialValues).length <= touchedCount;
  };

  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      validateOnMount={validateOnMount}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        try {
          await onSubmit?.(values);
          actions.resetForm();
          afterSubmit?.(values);
        } catch (err) {
          if (isObject(err)) {
            if (err instanceof Error) {
              actions.setErrors({ _form: err.message })
            } else {
              actions.setErrors(err);
            }
          } else {
            actions.setErrors({ _form: err })
          }
        }

        actions.setSubmitting(false);
      }}
      validate={validateForm}
    >
      {({ dirty, isSubmitting, errors, touched, values }: FormikProperties) => {
        valuesRef.current = values;
        return (
          <Form noValidate className={classes}>
            {props.children}

            {/* If the form has errors, display a message above buttons. */}
            {!isEmpty(errors) && (allFieldsTouched(touched) || !isEmpty(errors._form)) ? (
              <div className="invalid-feedback d-block mb-2">
                {!isEmpty(errors._form) ? (
                  <><span>{errors._form}</span><br /></>
                ) : null}

                Please fix the above errors and try again.
              </div>
            ) : null}

            {/* If we're showing either a submit or a reset button add a "form-actions" wrapper for them */}
            {(showSubmit === true || showReset === true) && (
              <div className="form-actions d-flex align-items-center">
                {showSecondary === true && (
                  <Button
                    type="button"
                    theme="secondary"
                    aria-label={labelSecondary}
                    disabled={isSubmitting}
                    classes="mr-2"
                    onClick={onSecondaryHelper}
                  >
                    {labelSecondary !== undefined ? labelSecondary : ''}
                  </Button>
                )}

                {showSubmit === true && (
                  <Button
                    type="submit"
                    theme="primary"
                    aria-label={labelSubmit}
                    disabled={isSubmitting}
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
            <FocusFormErrors />
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
  labelSecondary: 'Save Draft',
  showReset: true,
  showSubmit: true,
  showSecondary: false,
  classes: '',
  enableReinitialize: true,
  validateOnMount: false,
  validateOnBlur: true,
  validateOnChange: true,
  saveMessage: 'Saving...',
};

export default ZengineUIForm;
