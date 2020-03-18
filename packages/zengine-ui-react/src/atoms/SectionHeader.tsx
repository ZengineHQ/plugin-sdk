import React from 'react';
import PropTypes from 'prop-types';

export interface SectionHeaderProps {
  classes?: string
  children: string | Function
}

/**
 * A Section Header displays an `h2` HTML element.
 *
 * It's really up to you whether you want to use this component or just copy the 1 liner that is it's markup.
 */
const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <h2 className={ props.classes }>{ props.children }</h2>
  );
}

SectionHeader.propTypes = {
  /**
   * Plain text or a component may be passed as a child to be used as the section header text.
   **/
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

SectionHeader.defaultProps = {
  classes: ''
};

export default SectionHeader;
