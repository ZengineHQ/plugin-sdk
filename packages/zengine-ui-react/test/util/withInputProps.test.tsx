import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import withInputProps from '../../src/util/withInputProps';

function TestComponent(props) {
  return <input type="text" { ...props }/>;
}

const PropTestComponent = withInputProps(TestComponent);

test('it does nothing if no relevant props exist', () => {
  const { container } = render(<PropTestComponent/>);
  const cmp = container.firstChild;

  expect(cmp).not.toHaveAttribute('readOnly');
  expect(cmp).not.toHaveAttribute('class');
  expect(cmp).not.toHaveAttribute('disabled');
  expect(cmp).not.toHaveAttribute('required');
  expect(cmp).not.toHaveAttribute('onChange');
  expect(cmp).not.toHaveAttribute('onBlur');
  expect(cmp).not.toHaveAttribute('value');
});

test('it adds readOnly attribute if specified', () => {
  const { container } = render(<PropTestComponent readonly={ true }/>);
  expect(container.firstChild).toHaveAttribute('readOnly');
});

test('it adds disabled attribute if specified', () => {
  const { container } = render(<PropTestComponent disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('it adds required attribute if specified', () => {
  const { container } = render(<PropTestComponent required={ true }/>);
  expect(container.firstChild).toHaveAttribute('required');
});

test('it adds classes if specified', () => {
  const { container } = render(<PropTestComponent classes="one two three"/>);
  expect(container.firstChild).toHaveAttribute('class', 'one two three');
});

test('it adds onChange callback if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<PropTestComponent onChange={mock}/>);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'tests',
      },
    });
  });

  expect(mock).toHaveBeenCalled();
});

test('it adds onBlur callback if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<PropTestComponent onBlur={mock}/>);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'tests',
      },
    });
  });

  await act(async () => {
    fireEvent.blur(input);
  });

  expect(mock).toHaveBeenCalled();
});

test('Doesn\'t set a value if the input is not controlled', () => {
  const { container } = render(<PropTestComponent value="foo"/>);
  expect(container.firstChild).not.toHaveAttribute('value');
});

test('Sets a value if the input is controlled', () => {
  const mock = jest.fn();
  const { container } = render(<PropTestComponent value="foo" onChange={mock} onBlur={mock}/>);
  expect(container.firstChild).toHaveAttribute('value', 'foo');
});

test('Falls back to a default value if the input is controlled with not value', () => {
  const mock = jest.fn();
  const { container } = render(<PropTestComponent defaultValue="hello" onChange={mock} onBlur={mock}/>);
  expect(container.firstChild).toHaveAttribute('value', 'hello');
});

test('Falls back to an empty string if the input is controlled with not no default value nor value', () => {
  const mock = jest.fn();
  const { container } = render(<PropTestComponent onChange={mock} onBlur={mock}/>);
  expect(container.firstChild).toHaveAttribute('value', '');
});

test('it sets displayName to indicate input props are being added', () => {
  expect(PropTestComponent.displayName).toEqual('withInputProps(TestComponent)');
});
