import { useContext } from 'react';

import SlideOutContext, { SlideOutContextProps } from './SlideOutContext';

const useSlideOut = (): SlideOutContextProps => {
  return useContext(SlideOutContext);
};

export default useSlideOut;
