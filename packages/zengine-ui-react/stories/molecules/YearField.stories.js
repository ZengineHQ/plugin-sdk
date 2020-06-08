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
  <MockForm>
    <p>
      This is a <em>SelectField</em> with custom, unchangeable options. All other SelectField props work here.
    </p>
    <YearField label="YearField" name="year" />
  </MockForm>
);
