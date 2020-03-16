import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Select } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/Select',
  component: Select,
  parameters: {
    jest: ['Select.test.js'],
  },
};

const exampleOpts = ['Option One', 'Option Two', 'Option Three'];

export const Default = () => <Select options={ exampleOpts } />;

export const Required = () => (
  <Select
    required={ true }
    options={ exampleOpts }
    onChange={ action('Selected item!') }
  />
);

export const Disabled = () => (
  <Select
    disabled={ true }
    options={ exampleOpts }
    onChange={ action('Selected item!') }
  />
);

export const CustomPlaceholder = () => (
  <Select
    options={ exampleOpts }
    placeholder="PICK ONE NOW!"
    onChange={ action('Selected item!') }
  />
);

export const NoPlaceholder = () => (
  <Select
    options={ exampleOpts }
    placeholder=""
    onChange={ action('Selected item!') }
  />
);

export const DefaultValue = () => (
  <Select
    options={ exampleOpts }
    defaultValue="Option Two"
    placeholder="-Default Selected-"
  />
);

export const Multiple = () => (
  <Select
    options={ exampleOpts }
    placeholder=""
    multiple={ true }
  />
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Select
      options={ exampleOpts }
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      multiple={ boolean('Multiple', false) }
      placeholder={ text('Placeholder', '-Select-') }
      classes={ text('Classes', 'foo bar') }
      onChange={ action('onChange called') }
    />
  );
};
