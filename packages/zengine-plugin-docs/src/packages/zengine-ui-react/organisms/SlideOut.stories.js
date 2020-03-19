import React from 'react';
import Button from '@zenginehq/zengine-ui-react/lib/atoms/Button';

import SlideOut from '@zenginehq/zengine-ui-react/src/organisms/SlideOut';
import SlideOutProvider from '@zenginehq/zengine-ui-react/src/organisms/SlideOutProvider';
import useSlideOut from '@zenginehq/zengine-ui-react/src/organisms/useSlideOut';
// import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Organisms/SlideOut',
  component: SlideOut,
  parameters: {
    jest: ['Slideout.test.js'],
  },
};

export const Default = () => {
  const slideOut = useSlideOut();

  const handleClick = () => {
    slideOut.open('Related Data', <em>This is cool</em>);
  };

  return (
    <SlideOutProvider>
      <Button onClick={ handleClick }>Toggle SlideOut</Button>
    </SlideOutProvider>
  );
};
