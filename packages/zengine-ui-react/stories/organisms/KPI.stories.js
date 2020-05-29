import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import KPI from '../../src/organisms/KPI';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Organisms/KPI',
  component: KPI,
  parameters: {
    jest: ['KPI.test.js'],
  },
};

export const Default = () => {
  const items = [
    { count: 1358, label: 'Submissions'},
    { count: 158, label: 'Ready for Review'},
    { count: 45, label: 'Reviewed'}
  ];
  return <KPI items={items}/>;
};

export const Playground = () => {
  useDefaultPanel('Knobs');

  const items = [
    { count: number('Item 1 Count', 1358), label: text('Item 1 Label', 'Submissions')},
    { count: number('Item 2 Count', 158), label: text('Item 2 Label', 'Ready for Review')},
    { count: number('Item 3 Count', 45), label: text('Item 3 Label', 'Reviewed')},
  ];

  return <KPI items={items}/>;
};
