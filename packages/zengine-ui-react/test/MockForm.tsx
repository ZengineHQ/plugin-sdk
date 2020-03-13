import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

export function MockForm (props: any): ReactElement {
  return (
    <Formik
      initialValues={{}}
      onSubmit={props.onSubmit}
      validateOnBlur={true}
      validateOnMount={false}
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
};

MockForm.defaultProps = {
  onSubmit: () => null,
};

export default MockForm;
