import React from 'react';
import { text } from '@storybook/addon-knobs';

import Widget from '../../src/organisms/Widget';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Organisms/Widget',
  component: Widget,
  parameters: {
    jest: ['Widget.test.js'],
  },
};

export const Default = () => <Widget header="Header" body="Body" footer="Footer" />;

export const NoHeader = () => <Widget body="Look ma, no header!" footer="Footer" />;

export const NoFooter = () => <Widget header="Header" body="Look ma, no footer!" />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Widget
      classes={ text('Classes', 'class-two') }
      header={ text('Header', 'Header') }
      body={ text('Body', 'Lorem ipsum etc') }
      footer={ text('Footer', 'Copyright 2020') }
    />
  );
};
