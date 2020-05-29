import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import ErrorMessage from '../../src/util/ErrorMessage';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Utility/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    jest: ['ErrorMessage.test.js'],
  },
};

export const Default = () => <ErrorMessage meta={{touched: true, error: 'This field is required.'}}/>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <ErrorMessage meta={{touched: boolean('Field Touched', true), error: text('Error', 'Everything you filled out is wrong.') }}/>
  );
};
