import React from 'react';
import { text } from '@storybook/addon-knobs';

import { PageTitle } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/PageTitle',
  component: PageTitle,
  parameters: {
    jest: ['PageTitle.test.js'],
  },
};

export const Default = () => <PageTitle>Page Title</PageTitle>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <PageTitle classes={ text('Classes', 'class-one') }>
      { text('Title', 'Click-bait Title') }
    </PageTitle>
  );
};
