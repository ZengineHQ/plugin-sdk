import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Input from '../../src/atoms/Input';

test('Renders a input HTML tag', () => {
  const { container } = render(<Input />);
  expect(container.getElementsByTagName('input')).toHaveProperty('length', 1);
});

test('Renders a type text input by default', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toHaveAttribute('type', 'text');
});

test('Renders correct input type when specified', () => {
  const { container } = render(<Input type="number" />);
  expect(container.firstChild).toHaveAttribute('type', 'number');
});

test('Marks input as required when specified', () => {
  const { container } = render(<Input required={true} />);
  expect(container.firstChild).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<Input required={true} />);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<Input required={false} />);
  expect(container.firstChild).not.toHaveAttribute('aria-required');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<Input disabled={true} />);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<Input disabled={true} />);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Marks input as readonly when specified', () => {
  const { container } = render(<Input readonly={true} />);
  expect(container.firstChild).toHaveAttribute('readonly');
});

test('Sets aria-readonly attribute when readonly', () => {
  const { container } = render(<Input readonly={true} />);
  expect(container.firstChild).toHaveAttribute('aria-readonly', 'true');
});

test('Sets input placeholder when specified', () => {
  const { container } = render(<Input placeholder="foo" />);
  expect(container.firstChild).toHaveAttribute('placeholder', 'foo');
});

test('Sets input name when specified', () => {
  const { container } = render(<Input name="foo" />);
  expect(container.firstChild).toHaveAttribute('name', 'foo');
});

test('Sets input id when specified', () => {
  const { container } = render(<Input name="foo" id="bar" />);
  expect(container.firstChild).toHaveAttribute('id', 'bar');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Input classes="foo bar baz" />);
  expect(container.firstChild).toHaveClass('foo bar baz');
});

test('Fires custom onChange handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<Input name="foo" onChange={mock} />);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'hello',
      },
    });
  });

  expect(input.value).toEqual('hello');
  expect(mock).toBeCalled();
});

test('Fires custom onBlur handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<Input name="foo" onBlur={mock} />);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'testing',
      },
    });
  });

  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('testing');
  expect(mock).toBeCalled();
});
