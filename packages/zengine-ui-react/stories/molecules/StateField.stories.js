import React from 'react';

import StateField from '../../src/molecules/StateField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Molecules/StateField',
  component: StateField,
  parameters: {
    jest: ['StateField.test.js'],
  },
};

export const Default = () => (
  <MockForm>
    <p>
      This is a <em>SelectField</em> with custom, unchangeable options. All other SelectField props work here.
      <br />Data is pulled from the Zengine API.
    </p>
    <StateField label="StateField" name="state" />
  </MockForm>
);

export const IncludeCanada = () => (
  <MockForm>
    <p>
      Use this option to include Canadian provinces/territories.
      <br />Data is pulled from the Zengine API.
    </p>
    <StateField label="StateFieldCanada" name="state" includeCanada={ true } />
  </MockForm>
);
