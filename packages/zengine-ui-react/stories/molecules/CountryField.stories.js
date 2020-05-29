import React from 'react';

import CountryField from '../../src/molecules/CountryField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Molecules/CountryField',
  component: CountryField,
  parameters: {
    jest: ['CountryField.test.js'],
  },
};

export const Default = () => (
  <MockForm><CountryField label="CountryField" name="country" /></MockForm>
);
