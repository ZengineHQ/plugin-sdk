import React from 'react';
import PropTypes from 'prop-types';
import Button from "../atoms/Button";

export interface SlideoutProps {
  foo: number
}

/**
 * KPI displays a group of Counter Labeled elements in containing box.
 */
function SlideOut (props: SlideoutProps): React.ReactElement {
  const handleClick = () => {
    alert('VICTOR');
  };
  return (
    <>
    <h1>OI VICTOR</h1>
      <Button onClick={handleClick}>
        ❤️
      </Button>
    </>
  );
}

SlideOut.propTypes = {
  foo: PropTypes.string
};

export default SlideOut;
