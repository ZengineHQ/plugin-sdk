import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Checkbox } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/Checkbox',
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
