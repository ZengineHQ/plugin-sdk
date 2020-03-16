import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Radio from '../../src/atoms/Radio';

test('Renders an input type="radio" HTML tag', () => {
  const { container } = render(<Radio />);
  const input = container.getElementsByTagName('input');
  expect(input).toHaveProperty('length', 1);
  expect(input[0]).toHaveAttribute('type', 'radio');
});

test('Marks input as required when specified', () => {
  const { container } = render(<Radio required={true} />);
  expect(container.firstChild).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<Radio required={true} />);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<Radio required={false} />);
  expect(container.firstChild).not.toHaveAttribute('aria-required');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<Radio disabled={true} />);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<Radio disabled={true} />);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Marks input as readonly when specified', () => {
  const { container } = render(<Radio readonly={true} />);
  expect(container.firstChild).toHaveAttribute('readonly');
});

test('Sets aria-readonly attribute when readonly', () => {
  const { container } = render(<Radio readonly={true} />);
  expect(container.firstChild).toHaveAttribute('aria-readonly', 'true');
});

test('Sets input name when specified', () => {
  const { container } = render(<Radio name="foo" />);
  expect(container.firstChild).toHaveAttribute('name', 'foo');
});

test('Sets input id when specified', () => {
  const { container } = render(<Radio name="foo" id="bar" />);
  expect(container.firstChild).toHaveAttribute('id', 'bar');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Radio classes="foo bar baz" />);
  expect(container.firstChild).toHaveClass('foo bar baz');
});

test('Fires custom onChange handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<Radio name="foo" onChange={mock} />);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.click(input);
  });

  expect(mock).toBeCalled();
});

test('Fires custom onBlur handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<Radio name="foo" onBlur={mock} />);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.blur(input);
  });

  expect(mock).toBeCalled();
});
