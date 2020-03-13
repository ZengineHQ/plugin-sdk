import React from 'react';
import PropTypes from 'prop-types';
// import { StringChain } from 'lodash';

export interface ImageProps {
  src?: string
  alt?: string
  height?: number
  width?: number
  classes?: string
}

/**
 * Displays an image.
 *
 * This atom supports the following classes to customize it:
 *
 * - `atom-image-circle`: display the image as a circle with very rounded borders
 * - `img-fluid`: make the image responsive so it scales with it's parent element
 * - `img-thumbnail`: give the image a subtle framed border appearance
 * - `rounded`: make the images borders slightly rounded
 */
function Image (props: ImageProps): React.ReactElement {
  return (
    <img
      src={ props.src }
      alt={ props.alt }
      height={ props.height }
      width={ props.width }
      className={ props.classes }
    />
  );
}

Image.propTypes = {
  /**
   * Image source url or inline data.
   **/
  src: PropTypes.string.isRequired,
  /**
   * Image alternate text; required for accessibility.
   **/
  alt: PropTypes.string.isRequired,
  /**
   * Image height.
   **/
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Image width.
   **/
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * HTML classes to be added as-is to the button.
   **/
  classes: PropTypes.string,
};

Image.defaultProps = {
  classes: '',
};

export default Image;
