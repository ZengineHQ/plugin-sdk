import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { TextField } from '../../src/molecules/TextField';
import { MockForm } from '../MockForm';
import { isEmail } from '../../src/util/validation';

test('Renders a text input', () => {
  const { container } = render(<MockForm><TextField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><TextField label="foo" name="foo" /></MockForm>);
  expect(getByText('foo')).toBeInTheDocument();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<MockForm><TextField name="foo" required={true} /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

// Testing for aria-required attribute not necessary here because if it's marked as required the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Marks input as disabled when specified', () => {
  const { container } = render(<MockForm><TextField name="foo" disabled={true} /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

// Testing for aria-disabled attribute not necessary here because if it's marked as disabled the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Set aria-describedby attribute when help is specified', () => {
  const { container } = render(<MockForm><TextField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const input = container.getElementsByTagName('input')[0];
  expect(input).toHaveAttribute('aria-describedby', 'text-foo-help');
});

test('Sets input placeholder when specified', () => {
  const { container } = render(<MockForm><TextField name="foo" placeholder="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets input id automatically', () => {
  const { container } = render(<MockForm><TextField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'text-foo');
});

test('Changes input name when specified', () => {
  const { container } = render(<MockForm><TextField name="test" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('name', 'test');
});

test('Changes input id when specified', () => {
  const { container } = render(<MockForm><TextField name="test" id="whoathere" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'whoathere');
});

test('Sets label "for" attribute when there\'s a label', () => {
  const { container } = render(<MockForm><TextField label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'text-foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><TextField name="foo" /></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<MockForm><TextField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the input when specified', () => {
  const { container } = render(<MockForm><TextField classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><TextField label="Foo" name="foo" labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});

test('Displays custom help when specified', () => {
  const { container } = render(<MockForm><TextField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const help = container.getElementsByTagName('small')[0];
  expect(help).toBeTruthy();
  expect(help).toHaveTextContent('foo bar');
  expect(help).toHaveAttribute('id', 'text-foo-help');
});

test('Sets prefix and suffix when specified', () => {
  const { getByText } = render(
    <MockForm><TextField label="Foo" name="foo" prefix="fooprefix" suffix="barsuffix" /></MockForm>
  );
  expect(getByText('fooprefix')).toBeInTheDocument();
  expect(getByText('barsuffix')).toBeInTheDocument();
});

test('Validates field "required" correctly', async () => {
  const { container, getByText } = render(<MockForm><TextField name="foo" required={true} /></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  expect(input.value).toEqual('');

  await act(async () => {
    fireEvent.change(input, { target: { value: 'Testing' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('Testing');
  expect(input).toHaveClass('form-control is-valid');

  await act(async () => {
    fireEvent.change(input, { target: { value: '' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('');
  expect(input).toHaveClass('form-control is-invalid');
  expect(getByText('Required')).toBeInTheDocument();
});

test('Fires custom onChange handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<MockForm><TextField name="foo" onChange={mock} /></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'tests',
      },
    });
  });

  expect(input.value).toEqual('tests');
  expect(mock).toBeCalled();
});

test('Fires custom onBlur handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<MockForm><TextField name="foo" onBlur={mock} /></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'foo',
      },
    });
  });

  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('foo');
  expect(mock).toBeCalled();
});

test('Calls custom validation handler', async () => {
  const mock = jest.fn();
  const { container } = render(
    <MockForm><TextField name="foo" required={true} validate={mock} /></MockForm>
  );
  const input = container.getElementsByTagName('input')[0];

  expect(input.value).toEqual('');

  await act(async () => {
    fireEvent.change(input, { target: { value: 'Testing' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('Testing');
  expect(input).toHaveClass('form-control is-valid');
  expect(mock).toHaveBeenCalled();
});

test('Performs custom validation correctly when specified', async () => {
  const validate = (value: any) => {
    if (!isEmail(value)) {
      return 'Invalid email address';
    }
  };
  const { container, getByText } = render(
    <MockForm><TextField name="foo" required={true} validate={validate} /></MockForm>
  );
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, { target: { value: 'foo@bar' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('foo@bar');
  expect(input).toHaveClass('form-control is-invalid');
  expect(getByText('Invalid email address')).toBeInTheDocument();

  await act(async () => {
    fireEvent.change(input, { target: { value: 'foo@bar.com' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('foo@bar.com');
  expect(input).toHaveClass('form-control is-valid');
});
