import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

// Use named export in order to get Storybook Docs working but actually use the default export when writing the stories.
import { Input } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/Input',
  component: Input,
  parameters: {
    jest: ['Input.test.js'],
  },
};

export const Default = () => <Input />;

export const Required = () => <Input required={ true } />;

export const Disabled = () => <Input disabled={ true } required={ false } />;

export const Readonly = () => <Input readonly={ true } />;

export const Placeholder = () => <Input placeholder="placeholder text" />;

export const TypeNumber = () => <Input type="number" />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  const typeOpts = [
    'text',
    'number',
    'checkbox',
    'radio',
    'date',
  ];

  return (
    <Input
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      placeholder={ text('Placeholder', 'placeholder') }
      type={ select('Type', typeOpts, 'text') }
      classes={ text('Classes', 'foo bar') }
    />
  );
};
