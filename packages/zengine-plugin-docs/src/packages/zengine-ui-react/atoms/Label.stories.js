import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Label } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/Label',
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
