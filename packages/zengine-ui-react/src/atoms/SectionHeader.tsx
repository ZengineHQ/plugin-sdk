import React, { ReactChildren, ReactChild } from 'react';

export interface SectionHeaderProps {
  classes?: string
  children: ReactChildren | ReactChild
}

/**
 * A Section Header displays an `h2` HTML element.
 *
 * It's really up to you whether you want to use this component or just copy the 1 liner that is it's markup.
 */
const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <h2 className={props.classes}>{props.children}</h2>
  );
}

SectionHeader.defaultProps = {
  classes: ''
};

export default SectionHeader;
