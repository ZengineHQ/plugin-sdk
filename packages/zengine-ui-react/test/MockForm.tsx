import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

export function MockForm (props: any): ReactElement {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validateOnBlur={true}
      validateOnMount={false}
      validateOnChange={false}
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
  onSubmit: () => null,
  initialValues: {},
};

export default MockForm;
