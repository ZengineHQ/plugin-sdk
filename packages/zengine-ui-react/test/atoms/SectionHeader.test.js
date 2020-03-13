import React from 'react';
import { render } from '@testing-library/react';

import SectionHeader from '../../src/atoms/SectionHeader';

test('Renders the h2 HTML tag', () => {
  const { container } = render(<SectionHeader>Sup</SectionHeader>);
  expect(container.getElementsByTagName('h2')).toHaveProperty('length', 1);
});

test('Renders with specified text', () => {
  const { getByText } = render(<SectionHeader>Sup</SectionHeader>);
  expect(getByText('Sup')).toBeTruthy();
});

test('Adds no default classes', () => {
  const { container } = render(<SectionHeader>Sup</SectionHeader>);
  const h2 = container.firstChild;
  expect(h2.className).toEqual('');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<SectionHeader classes="foo bar baz">Sup</SectionHeader>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});
