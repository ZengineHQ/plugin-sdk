import React from 'react';

import CountryField from '@zenginehq/zengine-ui-react/lib/molecules/CountryField';
import MockForm from '../../../util/MockForm';
import useDefaultPanel from '../../../util/useDefaultPanel';
import SelectField from '@zenginehq/zengine-ui-react/lib/molecules/SelectField';

export default {
  title: 'ZengineUIReact|Components/Molecules/CountryField',
  component: CountryField,
  parameters: {
    jest: ['CountryField.test.js'],
  },
};

export const Default = () => (
  <MockForm><CountryField label="CountryField" name="country" /></MockForm>
);
