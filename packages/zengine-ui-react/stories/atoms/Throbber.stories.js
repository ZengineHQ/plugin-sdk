import React from 'react';
import { select, text } from '@storybook/addon-knobs';

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

export const ZengineStyle = () => (
  <Throbber theme="zengine"/>
);

export const BootstrapStyles = () => (
  <>
    <Throbber theme="secondary"/>
    <Throbber theme="success"/>
    <Throbber theme="error"/>
    <Throbber theme="info"/>
  </>
);

export const CustomClasses = () => (
  <>
    <small className="form-text text-muted">This throbber has a custom class!</small>
    <Throbber wrapperClass="foo" />
  </>
);

export const PlayGround = () => {
  useDefaultPanel('Knobs');

  const themeOpts = [
    'primary',
    'zengine',
    'secondary',
    'success',
    'error',
    'info',
  ];

  return (
    <Throbber
      wrapperClass={ text('Classname', 'foo') }
      theme={select('Theme', themeOpts, 'success')}
    />
  );
};
