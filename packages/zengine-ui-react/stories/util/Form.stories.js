import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import Form from '../../src/util/Form';
import NumberField from '../../src/molecules/NumberField';
import TextField from '../../src/molecules/TextField';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Utility/Form',
  component: Form,
  parameters: {
    jest: ['Form.test.js'],
  },
};

export const Default = () => (
  <Form onSubmit={ action('Form submitted') }>
    <TextField label="Name" name="name" required />
    <NumberField label="Age" name="age" required />
  </Form>
);

export const HideReset = () => (
  <Form onSubmit={ action('Form submitted') } showReset={ false }>
    <TextField label="Name" name="name" required />
    <NumberField label="Age" name="age" required />
  </Form>
);

export const ResetLabel = () => (
  <Form onSubmit={ action('Form submitted') } labelReset="Nuke it!">
    <TextField label="Name" name="name" required />
    <NumberField label="Age" name="age" required />
  </Form>
);

export const HideSubmit = () => (
  <Form onSubmit={ action('Form submitted') } showSubmit={ false }>
    <TextField label="Name" name="name" required />
    <NumberField label="Age" name="age" required />
  </Form>
);

export const SubmitLabel = () => (
  <Form onSubmit={ action('Form submitted') } labelSubmit="Perform exciting action!">
    <TextField label="Name" name="name" required />
    <NumberField label="Age" name="age" required />
  </Form>
);

export const ExtraButton = () => {
  const myCallback = values => {
    console.warn('values', values);
  };

  return (
    <Form
      onSubmit={ action('Form submitted') }
      labelSubmit="Submit"
      showSecondary={ true }
      labelSecondary="Save Draft"
      onSecondary={ myCallback }
    >
      <TextField label="Name" name="name" required />
      <NumberField label="Age" name="age" required />
    </Form>
  );
};

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Form
      showReset={ boolean('Show Reset', true) }
      showSubmit={ boolean('Show Submit', true) }
      onSubmit={ action('Form submitted') }
      labelReset={ text('Reset Label', 'Reset') }
      labelSubmit={ text('Submit Label', 'Save') }
    >
      <TextField label="Name" name="name" required />
      <NumberField label="Age" name="age" required />
    </Form>
  );
};
