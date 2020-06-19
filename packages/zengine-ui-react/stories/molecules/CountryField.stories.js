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
  <MockForm>
    <p>
      This is a <em>SelectField</em> with custom, unchangeable options. All other SelectField props work here.
      <br/>Data is pulled from the Zengine API.
    </p>
    <CountryField label="CountryField" name="country" />
  </MockForm>
);
