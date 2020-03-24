import { useContext } from 'react';

import SlideOutContext from './SlideOutContext';

const useSlideOut = () => {
  return useContext(SlideOutContext);
};

export default useSlideOut;
