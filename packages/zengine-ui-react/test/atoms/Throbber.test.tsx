import React from 'react';
import { render } from '@testing-library/react';

import Throbber from '../../src/atoms/Throbber';

const defaultClasses = 'throbber-container d-flex justify-content-center align-items-center';

test('Renders a div wrapper with the expected classes', () => {
  const { container } = render(<Throbber />);
  const div = container.getElementsByTagName('div');
  expect(div).toHaveProperty('length', 1);
  expect(div[0]).toHaveClass(defaultClasses);
});

test('Adds custom classes to wrapper if specified', () => {
  const { container } = render(<Throbber className="foo"/>);
  const div = container.getElementsByTagName('div')[0];
  expect(div).toHaveClass(`${defaultClasses} foo`);
});

test('Displays an image element', () => {
  // @TODO
});
