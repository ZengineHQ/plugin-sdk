import React from 'react';

import Button from '../../src/atoms/Button';
import SlideOutProvider from '../../src/organisms/SlideOutProvider';
import useSlideOut from '../../src/organisms/useSlideOut';

export default {
  title: 'Components/Organisms/SlideOutProvider',
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
