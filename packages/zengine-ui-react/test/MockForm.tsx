import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

export function MockForm (props: any): ReactElement {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validateOnBlur={true}
      validateOnMount={true}
      validateOnChange={true}
    >
      <Form noValidate>
        {props.children}
      </Form>
    </Formik>
  );
}

MockForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};

MockForm.defaultProps = {
  onSubmit: (values) => null,
  initialValues: {},
};

export default MockForm;
