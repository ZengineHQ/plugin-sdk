import React from 'react';
import { text } from '@storybook/addon-knobs';

import { SectionHeader } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/SectionHeader',
  component: SectionHeader,
  parameters: {
    jest: ['SectionHeader.test.js'],
  },
};

export const Default = () => <SectionHeader>Section Header</SectionHeader>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <SectionHeader classes={ text('Classes', 'class-two') }>
      { text('Text', 'Interesting Section') }
    </SectionHeader>
  );
};
