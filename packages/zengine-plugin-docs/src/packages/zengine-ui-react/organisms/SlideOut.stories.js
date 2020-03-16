import React from 'react';

import SlideOut from '@zenginehq/zengine-ui-react/lib/organisms/SlideOut';
// import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Organisms/SlideOut',
  component: SlideOut,
  parameters: {
    jest: ['Slideout.test.js'],
  },
};

export const Default = () => <SlideOut />;
