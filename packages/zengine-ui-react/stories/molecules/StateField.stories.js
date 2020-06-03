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
  <MockForm><StateField label="StateField" name="state" /></MockForm>
);

export const IncludeCanada = () => (
  <MockForm><StateField label="StateFieldCanada" name="state" includeCanada={true}/></MockForm>
);
