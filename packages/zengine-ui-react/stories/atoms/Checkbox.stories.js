import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Workaround for storybook docs not processing wrapped components.
import Checkbox from '../../src/atoms/Checkbox';
import { Checkbox as CheckboxProps } from '../../src/atoms/Checkbox';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Atoms/Checkbox',
  component: CheckboxProps,
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
