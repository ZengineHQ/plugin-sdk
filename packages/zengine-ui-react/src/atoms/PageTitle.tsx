import React, { ReactChild, ReactChildren } from 'react';

export interface PageTitleProps {
  classes?: string
  children: ReactChildren | ReactChild
}

/**
 * A Page Title displays an `h1` HTML element.
 *
 * There should only be one Page Title per page :)
 *
 * It's really up to you whether you want to use this component or just copy the 1 liner that is it's markup.
 */
const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <h1 className={props.classes}>{props.children}</h1>
  );
}

PageTitle.defaultProps = {
  classes: ''
};

export default PageTitle;
