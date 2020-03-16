import React from 'react';
import { render } from '@testing-library/react';

import ErrorMessage from '../../src/util/ErrorMessage';

test('Renders a div HTML tag', () => {
  const { container } = render(<ErrorMessage meta={{ touched: true, error: 'Hello' }} />);
  const divs = container.getElementsByTagName('div');
  expect(divs).toHaveProperty('length', 1);
});

test('Renders with specified text', () => {
  const { getByText } = render(<ErrorMessage meta={{ touched: true, error: 'Hello' }} />);
  expect(getByText('Hello')).toBeTruthy();
});

test('Renders only if meta touched passed', () => {
  const { queryByText } = render(<ErrorMessage meta={{ touched: false, error: 'Hello' }} />);
  expect(queryByText('Hello')).toBeNull();
});
