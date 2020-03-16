import React from 'react';
import PropTypes from 'prop-types';

export interface SlideoutProps {
  foo: number
}

/**
 * KPI displays a group of Counter Labeled elements in containing box.
 */
function SlideOut (props: SlideoutProps): React.ReactElement {
  return (
    <em>placeholder</em>
  );
}

SlideOut.propTypes = {
  foo: PropTypes.string
};

export default SlideOut;
