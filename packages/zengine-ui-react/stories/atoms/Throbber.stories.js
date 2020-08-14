import React from 'react';
import { text } from '@storybook/addon-knobs';

import useDefaultPanel from '../../.storybook/useDefaultPanel';
import Throbber from '../../src/atoms/Throbber';

export default {
  title: 'Components/Atoms/Throbber',
  component: Throbber,
  parameters: {
    options: {
      showPanel: true,
    },
    jest: ['Throbber.test.js'],
  },
};

export const Default = () => (
  <Throbber />
);

export const CustomClasses = () => (
  <>
    <small className="form-text text-muted">This throbber has a custom class!</small>
    <Throbber className="foo" />
  </>
);

export const PlayGround = () => {
  useDefaultPanel('Knobs');

  return (
    <Throbber className={ text('Classname', 'foo') } />
  );
};
