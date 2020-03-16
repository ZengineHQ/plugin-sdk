import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Radio } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/Radio',
  component: Radio,
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
