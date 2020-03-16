import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Select from '../../src/atoms/Select';

// Dummy options to be re-used across tests.
const opts = ['optionOne', 'optionTwo', 'optionThree'];

test('Renders a select HTML tag', () => {
  const { container } = render(<Select />);
  const select = container.getElementsByTagName('select');
  expect(select).toHaveProperty('length', 1);
});

test('Marks select as required when specified', () => {
  const { container } = render(<Select required={true} />);
  expect(container.firstChild).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<Select required={true} />);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<Select required={false} />);
  expect(container.firstChild).not.toHaveAttribute('aria-required');
});

test('Marks select as disabled when specified', () => {
  const { container } = render(<Select disabled={true} />);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<Select disabled={true} />);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Sets select placeholder when specified', () => {
  const { container } = render(<Select placeholder="foo" />);
  expect(container.getElementsByTagName('option')[0]).toHaveTextContent('foo');
});

test('Sets select name when specified', () => {
  const { container } = render(<Select name="foo" />);
  expect(container.firstChild).toHaveAttribute('name', 'foo');
});

test('Sets select id when specified', () => {
  const { container } = render(<Select name="foo" id="bar" />);
  expect(container.firstChild).toHaveAttribute('id', 'bar');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Select classes="foo bar baz" />);
  expect(container.firstChild).toHaveClass('foo bar baz');
});

test('Adds a default value when specified', () => {
  const { container } = render(<Select options={opts} defaultValue="optionTwo" />);
  expect((container.firstChild as any).value).toEqual('optionTwo');
});

test('Adds array of options when specified', () => {
  const { container, getByText } = render(<Select options={opts} />);
  const options = container.getElementsByTagName('option');
  expect(options).toHaveProperty('length', 4);
  expect(getByText('optionOne')).toBeTruthy();
  expect(getByText('optionTwo')).toBeTruthy();
  expect(getByText('optionThree')).toBeTruthy();

  expect(options[1]).toHaveProperty('value', 'optionOne');
  expect(options[2]).toHaveProperty('value', 'optionTwo');
  expect(options[3]).toHaveProperty('value', 'optionThree');
});

test('Adds object of options when specified', () => {
  const objectOps = [
    { key: 'optOne', value: 'Option One' },
    { key: 'optTwo', value: 'Option Two' },
    { key: 'optThree', value: 'Option Three' },
  ];
  const { container, getByText } = render(<Select options={objectOps} />);
  const options = container.getElementsByTagName('option');
  expect(options).toHaveProperty('length', 4);
  expect(getByText('Option One')).toBeTruthy();
  expect(getByText('Option Two')).toBeTruthy();
  expect(getByText('Option Three')).toBeTruthy();

  expect(options[1]).toHaveAttribute('value', 'optOne');
  expect(options[2]).toHaveAttribute('value', 'optTwo');
  expect(options[3]).toHaveAttribute('value', 'optThree');
});

test('Fires custom onChange handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<Select options={opts} onChange={mock} />);
  const select = container.getElementsByTagName('select')[0];

  await act(async () => {
    fireEvent.change(select, {
      target: {
        value: opts[0],
      },
    });
  });

  expect(select.value).toEqual(opts[0]);
  expect(mock).toBeCalled();
});

test('Fires custom onBlur handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<Select options={opts} onBlur={mock} />);
  const select = container.getElementsByTagName('select')[0];

  await act(async () => {
    fireEvent.change(select, {
      target: {
        value: opts[1],
      },
    });
  });

  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select.value).toEqual(opts[1]);
  expect(mock).toBeCalled();
});
