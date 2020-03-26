import React from 'react';
import Button from '@zenginehq/zengine-ui-react/lib/atoms/Button';

import SlideOutProvider from '@zenginehq/zengine-ui-react/lib/organisms/SlideOutProvider';
import useSlideOut from '@zenginehq/zengine-ui-react/lib/organisms/useSlideOut';

export default {
  title: 'ZengineUIReact|Components/Organisms/SlideOutProvider',
  component: SlideOutProvider,
  parameters: {
    jest: ['Slideout.test.js'],
  },
};

const SampleComponent = () => {
  const slideOut = useSlideOut();

  const handleClick = () => {
    slideOut.open('Related Data', <em>This is cool</em>);
  };

  return (
    <Button onClick={handleClick}>Toggle SlideOut</Button>
  );
};

export const Default = () => {
  return (
    <SlideOutProvider>
      <SampleComponent />
    </SlideOutProvider>
  );
};
