import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { FormattedNumberField } from '../../src/molecules/FormattedNumberField';
import { MockForm } from '../MockForm';

test('Renders a text input instead of a number input', () => {
  const { container } = render(<MockForm><FormattedNumberField name="test" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><FormattedNumberField label="foo" name="foo" /></MockForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField required={true} name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

// Testing for aria-required attribute not necessary here because if it's marked as required the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Marks input as disabled when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField disabled={true} name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

// Testing for aria-disabled attribute not necessary here because if it's marked as disabled the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Sets input placeholder when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField placeholder="foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets input id automatically', () => {
  const { container } = render(<MockForm><FormattedNumberField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'number-foo');
});

test('Changes input name when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField name="test" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('name', 'test');
});

test('Changes input id when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField name="test" id="whoathere" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'whoathere');
});

test('Sets label "for" attribute when there\'s a label', () => {
  const { container } = render(<MockForm><FormattedNumberField label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'number-foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><FormattedNumberField name="foo" /></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<MockForm><FormattedNumberField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the input when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField label="Foo" name="foo" labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});

test('Displays custom help when specified', () => {
  const { container } = render(<MockForm><FormattedNumberField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const help = container.getElementsByTagName('small')[0];
  expect(help).toBeTruthy();
  expect(help).toHaveTextContent('foo bar');
  expect(help).toHaveAttribute('id', 'number-foo-help');
});

test('Sets prefix and suffix when specified', () => {
  const { getByText } = render(
    <MockForm><FormattedNumberField label="Foo" name="foo" prefix="fooprefix" suffix="barsuffix" /></MockForm>
  );
  expect(getByText('fooprefix')).toBeTruthy();
  expect(getByText('barsuffix')).toBeTruthy();
});

test('Set aria-describedby attribute when help is specified', () => {
  const { container } = render(<MockForm><FormattedNumberField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const input = container.getElementsByTagName('input')[0];
  expect(input).toHaveAttribute('aria-describedby', 'number-foo-help');
});

test('Validates field "required" correctly', async () => {
  const { container, getByText } = render(<MockForm><FormattedNumberField name="foo" required={true} /></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  expect(input.value).toEqual('');

  await act(async () => {
    fireEvent.change(input, { target: { value: 123 } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('123');
  expect(input).toHaveClass('form-control is-valid');

  await act(async () => {
    fireEvent.change(input, { target: { value: null } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('');
  expect(input).toHaveClass('form-control is-invalid');
  expect(getByText('Required')).toBeTruthy();
});

test('Changes field "required" error message correctly', async () => {
  const { container, getByText } = render(
    <MockForm>
      <FormattedNumberField
        name="foo"
        required={true}
        requiredMessage="Reqmsg"
      />
    </MockForm>
  );
  const input = container.getElementsByTagName('input')[0];

  expect(input.value).toEqual('');

  await act(async () => {
    fireEvent.change(input, { target: { value: 123 } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('123');
  expect(input).toHaveClass('form-control is-valid');

  await act(async () => {
    fireEvent.change(input, { target: { value: null } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('');
  expect(input).toHaveClass('form-control is-invalid');
  expect(getByText('Reqmsg')).toBeTruthy();
});

test('Fires custom onChange handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<MockForm><FormattedNumberField name="foo" onChange={mock} /></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: '123',
      },
    });
  });

  expect(input.value).toEqual('123');
  expect(mock).toBeCalled();
});

test('Sets fixed decimal places if specified', async () => {
  const { container } = render(
    <MockForm><FormattedNumberField name="foo" decimals={4} /></MockForm>
  );
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: '123',
      },
    });
  });

  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('123.0000');
});

test('Adds thousand separator if specified', async () => {
  const { container } = render(
    <MockForm><FormattedNumberField name="foo" decimals={4} separator={true} /></MockForm>
  );
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: '123456789',
      },
    });
  });

  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('123,456,789.0000');
});

test('Fires custom onBlur handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<MockForm><FormattedNumberField name="foo" onBlur={mock} /></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: '456',
      },
    });
  });

  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('456');
  expect(mock).toBeCalled();
});

test('Calls custom validation handler', async () => {
  const mock = jest.fn();
  const { container } = render(
    <MockForm><FormattedNumberField name="foo" required={true} validate={mock} /></MockForm>
  );
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, { target: { value: '99' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('99');
  expect(input).toHaveClass('form-control is-valid');
  expect(mock).toHaveBeenCalled();
});

test('Performs custom validation correctly when specified', async () => {
  const validate = (value: any) => {
    if (value < 10) {
      return 'Must be larger than 10';
    }
  };
  const { container, getByText } = render(
    <MockForm><FormattedNumberField name="foo" required={true} validate={validate} /></MockForm>
  );
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, { target: { value: '5' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input).toHaveClass('form-control is-invalid');
  expect(getByText('Must be larger than 10')).toBeInTheDocument();

  await act(async () => {
    fireEvent.change(input, { target: { value: '11' } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input).toHaveClass('form-control is-valid');
});
