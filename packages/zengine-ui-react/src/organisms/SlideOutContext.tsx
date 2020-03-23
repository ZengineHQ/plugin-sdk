import React from 'react';

const SlideOutContext = React.createContext({
  open: (title: string, contents: string | React.ReactElement): void => undefined,
  close: (): void => undefined,
});

export default SlideOutContext;
