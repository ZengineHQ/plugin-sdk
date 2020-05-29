import React from 'react';

import YearField from '../../src/molecules/YearField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Molecules/YearField',
  component: YearField,
  parameters: {
    jest: ['YearField.test.js'],
  },
};

export const Default = () => (
  <MockForm><YearField label="YearField" name="year" /></MockForm>
);
