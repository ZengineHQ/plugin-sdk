import React from 'react';

export interface ImageProps {
  src?: string
  alt?: string
  height?: number | string
  width?: number | string
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
const Image: React.FC<ImageProps> = (props) => {
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

Image.defaultProps = {
  classes: '',
};

export default Image;
