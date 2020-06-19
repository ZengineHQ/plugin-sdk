import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import Image from '../../src/atoms/Image';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Atoms/Image',
  component: Image,
  parameters: {
    jest: ['Image.test.js'],
  },
};

const exampleImage = '/sample-image.jpg';

export const Default = () => <Image src={ exampleImage } alt="Alt Text" />;

export const CustomDimensions = () => (
  <div className="d-flex justify-content-between w-50">
    <Image src={ exampleImage } alt="Alt Text" height="80" width="80" />
    <Image src={ exampleImage } alt="Alt Text" height="120" width="120" />
    <Image src={ exampleImage } alt="Alt Text" height="160" width="160" />
  </div>
);

export const CustomClasses = () => (
  <>
    <Image src={ exampleImage } alt="Alt Text" classes="atom-image-circle" />
    <Image src={ exampleImage } alt="Alt Text" classes="img-thumbnail" />
  </>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <>
      <div className="text-muted">
        <p>The image "sample-image.jpg" is hosted locally with this Storybook, use absolute URLs to change it.</p>
      </div>
      <Image
        src={ text('Source', 'sample-image.jpg') }
        height={ number('Height', 120) }
        width={ number('Width', 120) }
        alt={ text('Alt Text', 'This is an image of stuff') }
        classes={ text('Classes', 'class-one') }
      />
    </>
  );
};
