import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { default as Radio, Radio as RadioProps } from '../../src/atoms/Radio';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Atoms/Radio',
  component: RadioProps,
  parameters: {
    jest: ['Radio.test.js'],
  },
};

export const Default = () => <Radio />;

export const Required = () => <Radio required={ true } />;

export const Disabled = () => <Radio disabled={ true } />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Radio
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      classes={ text('Classes', 'foo bar') }
    />
  );
};
