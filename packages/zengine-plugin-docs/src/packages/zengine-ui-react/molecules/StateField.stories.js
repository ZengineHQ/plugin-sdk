import React from 'react';

import StateField from '@zenginehq/zengine-ui-react/lib/molecules/StateField';
import MockForm from '../../../util/MockForm';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Molecules/StateField',
  component: StateField,
  parameters: {
    jest: ['StateField.test.js'],
  },
};

export const Default = () => (
  <MockForm><StateField label="StateField" name="state" /></MockForm>
);
