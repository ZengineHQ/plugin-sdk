import React from 'react';
import { render } from '@testing-library/react';

import Image from '../../src/atoms/Image';

test('Renders an img HTML tag', () => {
  const { container } = render(<Image alt="test image" src="sample-image.jpg" />);
  expect(container.getElementsByTagName('img')).toHaveProperty('length', 1);
});

test('Renders with specified alt text', () => {
  const { container } = render(<Image alt="test image" src="sample-image.jpg" />);
  expect(container.firstChild).toHaveProperty('alt', 'test image');
});

test('Sets height when specified', () => {
  const { container } = render(<Image alt="test image" src="sample-image.jpg" height={40} />);
  expect(container.firstChild).toHaveAttribute('height', '40');
});

test('Sets width when specified', () => {
  const { container } = render(<Image alt="test image" src="sample-image.jpg" width={20} />);
  expect(container.firstChild).toHaveAttribute('width', '20');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Image alt="test image" src="sample-image.jpg" classes="foo bar baz" />);
  expect(container.firstChild).toHaveClass('foo bar baz');
});
