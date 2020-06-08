import React from 'react';

import { Form, NumberField, TextField } from '../src';

export default {
  title: 'Form Dev',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      disable: true,
    },
  }
};

export const Dev = () => {
  const myCallback = values => {
    console.warn('values', values);

    return Promise.resolve({ name: 'Invalid name' });
  };

  return (
    <Form onSubmit={ myCallback }>
      <TextField
        name="name"
        label="Name"
        required
      />
      <NumberField
        name="age"
        label="Age"
        required
      />
    </Form>
  );
};
