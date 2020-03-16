import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Textarea } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/Textarea',
  component: Textarea,
  parameters: {
    jest: ['Textarea.test.js'],
  },
};

export const Default = () => <Textarea />;

export const Required = () => <Textarea required={ true } />;

export const Disabled = () => <Textarea disabled={ true } />;

export const Placeholder = () => <Textarea placeholder="placeholder text" />;

export const DisableResize = () => <Textarea resizable={ false } />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Textarea
      classes={ text('Classes', 'class-one') }
      disabled={ boolean('Disabled', false) }
      required={ boolean('Required', false) }
      resizable={ boolean('Resizable', true) }
    />
  );
};
