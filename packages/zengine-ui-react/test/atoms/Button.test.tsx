import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../../src/atoms/Button';

test('Renders a button HTML tag', () => {
  const { container } = render(<Button>sup</Button>);
  const buttons = container.getElementsByTagName('button');
  expect(buttons).toHaveProperty('length', 1);
});

test('Renders with specified text', () => {
  const { getByText } = render(<Button>Hello</Button>);
  expect(getByText('Hello')).toBeTruthy();
});

test('Adds type attribute by default', () => {
  const { container } = render(<Button>Hello</Button>);
  expect(container.firstChild).toHaveAttribute('type', 'button');
});

test('Sets type attribute when specified', () => {
  const { container } = render(<Button type="submit">Hello</Button>);
  expect(container.firstChild).toHaveAttribute('type', 'submit');
});

test('Sets theme attribute when specified', () => {
  const { container } = render(<Button theme="success">Hello</Button>);
  expect(container.firstChild).toHaveClass('btn-success');
});

test('Disables button when specified', () => {
  const { container } = render(<Button disabled={true}>Hello</Button>);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Displays aria-disabled attribute when disabled', () => {
  const { container } = render(<Button disabled={true}>Hello</Button>);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Button classes="foo bar baz">Hello</Button>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});

test('Executes on-click handler when triggered', () => {
  const mock = jest.fn();
  const { getByText } = render(<Button onClick={mock}>Hello</Button>);
  fireEvent.click(getByText('Hello'));
  expect(mock).toBeCalled();
});
