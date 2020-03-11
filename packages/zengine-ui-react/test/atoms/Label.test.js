import React from 'react';
import { render } from '@testing-library/react';

import Label from '../../src/atoms/Label';

test('Renders with specified text', () => {
  const { getByText } = render(<Label>Hello</Label>);
  expect(getByText('Hello')).toBeTruthy();
});

test('Adds an asterisk when required', () => {
  const { getByText } = render(<Label required={true}>Hello</Label>);
  expect(getByText('*')).toBeTruthy();
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Label classes="foo bar baz">Hello</Label>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});

test('Adds "for" attribute when specified.', () => {
  const { container } = render(<Label for="foo-element">Hello</Label>);
  expect(container.firstChild).toHaveAttribute('for', 'foo-element');
});
