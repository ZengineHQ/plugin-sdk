import React from 'react';
import { render } from '@testing-library/react';

import CounterLabeled from '../../src/molecules/CounterLabeled';

test('Renders an article HTML tag', () => {
  const { container } = render(<CounterLabeled />);
  expect(container.getElementsByTagName('article')).toHaveProperty('length', 1);
});

const defaultClasses = 'mol-counter-labeled d-flex flex-column align-items-center';

test('Adds default classes', () => {
  const { container } = render(<CounterLabeled />);
  expect(container.firstChild).toHaveClass(defaultClasses);
});

test('Adds custom classes when specified', () => {
  const { container } = render(<CounterLabeled classes="my-custom-class" />);
  expect(container.firstChild).toHaveClass(`${defaultClasses} my-custom-class`);
});

test('Renders with specified count and label', () => {
  const { container } = render(<CounterLabeled count={123} label="something" />);
  const count = container.getElementsByTagName('span')[0];
  const text = container.getElementsByTagName('small')[0];
  expect(count).toHaveTextContent('123');
  expect(text).toHaveTextContent('something');
});

test('Formats long numbers', () => {
  const { container } = render(<CounterLabeled count={12345} />);
  const count = container.getElementsByTagName('span')[0];
  expect(count).toHaveTextContent('12,345');
});

test('Adds a suffix if specified', () => {
  const { container } = render(<CounterLabeled count={99} suffix="%" />);
  expect(container.firstChild).toHaveTextContent('99%');
});
