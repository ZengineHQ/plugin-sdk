import React from 'react';
import { text } from '@storybook/addon-knobs';

import Markdown from '../../src/atoms/Markdown';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Atoms/Markdown',
  component: Markdown,
  parameters: {
    jest: ['Markdown.test.js'],
  },
};

export const Default = () => <Markdown>**Markdown**</Markdown>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Markdown>
      { text('Contents', '_**Markdown**_') }
    </Markdown>
  );
};
