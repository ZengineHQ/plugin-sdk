import React from 'react';
import { SlideOutOpenOptions } from './SlideOutProvider';

export interface SlideOutContextProps {
  open?: (title: string, contents: string | React.ReactElement, options?: SlideOutOpenOptions) => void
  close?: () => void
};

const SlideOutContext = React.createContext<SlideOutContextProps>({
  open: undefined,
  close: undefined,
});

export default SlideOutContext;
