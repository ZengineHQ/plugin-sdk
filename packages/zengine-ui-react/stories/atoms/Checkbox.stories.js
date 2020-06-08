import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Checkbox from '../../src/atoms/Checkbox';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    jest: ['Checkbox.test.js'],
  },
};

export const Default = () => <Checkbox />;

export const Required = () => <Checkbox required={ true } />;

export const Disabled = () => <Checkbox disabled={ true } />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Checkbox
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      classes={ text('Classes', 'foo bar') }
    />
  );
};
