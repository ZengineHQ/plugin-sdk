import React from 'react';

import MockForm from '../../../util/MockForm';
import useDefaultPanel from '../../../util/useDefaultPanel';
import YearField from '@zenginehq/zengine-ui-react/lib/molecules/YearField';

export default {
  title: 'ZengineUIReact|Components/Molecules/YearField',
  component: YearField,
  parameters: {
    jest: ['YearField.test.js'],
  },
};

export const Default = () => (
  <MockForm><YearField label="YearField" name="year" /></MockForm>
);
