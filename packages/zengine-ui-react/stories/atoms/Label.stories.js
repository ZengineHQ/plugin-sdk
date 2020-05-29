import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Label from '../../src/atoms/Label';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  parameters: {
    jest: ['Label.test.js'],
  },
};

export const Default = () => <Label>Default Label</Label>;

export const Required = () => <Label required={ true }>Required Label</Label>;

export const CustomClasses = () => <Label classes="text-info">Custom Classes Label</Label>;

export const ForElement = () => <Label for="foo-element">For Element Label</Label>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Label
      for={ text('For', 'foo-element') }
      required={ boolean('Required', false) }
      classes={ text('Classes', 'text-success') }
    >
      { text('Label', 'Compelling Label') }
    </Label>
  );
};
