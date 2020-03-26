import React from 'react';

export interface SlideOutContextProps {
  open?: (title: string, contents: string | React.ReactElement) => void
  close?: () => void
};

const SlideOutContext = React.createContext<SlideOutContextProps>({
  open: undefined,
  close: undefined,
});

export default SlideOutContext;
