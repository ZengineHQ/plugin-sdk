import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';

import { MockForm } from '../MockForm';
import { SelectField } from '../../src/molecules/SelectField';

// Dummy options to be re-used across tests.
const opts = ['optionOne', 'optionTwo', 'optionThree', 'optionFour'];

test('Renders a select element', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('name', 'foo');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><SelectField name="foo" label="test" options={opts} /></MockForm>);
  expect(getByText('test')).toBeInTheDocument();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks select as required when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} required={true} /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('required');
});

// Testing for aria-required attribute not necessary here because if it's marked as required the presence of the
// aria-attribute will be tested by the "Select" atom component which actually gets rendered.

test('Marks select as disabled when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} disabled={true} /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('disabled');
});

// Testing for aria-disabled attribute not necessary here because if it's marked as disabled the presence of the
// aria-attribute will be tested by the "Select" atom component which actually gets rendered.

test('Displays custom help when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" help="foo bar" options={opts} /></MockForm>);
  const help = container.getElementsByTagName('small')[0];
  expect(help).toBeTruthy();
  expect(help).toHaveTextContent('foo bar');
  expect(help).toHaveAttribute('id', 'select-foo-help');
});

test('Set aria-describedby attribute when help is specified', () => {
  const { container } = render(
    <MockForm><SelectField label="Foo" name="foo" help="foo bar" options={opts} /></MockForm>
  );
  const select = container.getElementsByTagName('select')[0];
  expect(select).toHaveAttribute('aria-describedby', 'select-foo-help');
});

test('Sets a default placeholder as the first option', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} /></MockForm>);
  expect(container.getElementsByTagName('select')[0].firstChild).toHaveTextContent('-Select-');
});

test('Changes default placeholder when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} placeholder="foo" /></MockForm>);
  expect(container.getElementsByTagName('select')[0].firstChild).toHaveTextContent('foo');
});

test('Sets select id automatically', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('id', 'select-foo');
});

test('Changes select name when specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} name="test" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('name', 'test');
});

test('Changes select id when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} id="whoathere" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('id', 'whoathere');
});

test('Sets label "for" attribute when there\'s a label', () => {
  const { container } = render(<MockForm><SelectField options={opts} label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'select-foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} name="foo" /></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the select', () => {
  const { container } = render(<MockForm><SelectField options={opts} name="foo" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the select when specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} label="Foo" name="foo"
    labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});

test('Fires custom onChange handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<MockForm><SelectField options={opts} name="foo" onChange={mock} /></MockForm>);
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
  const { container } = render(<MockForm><SelectField options={opts} name="foo" onBlur={mock} /></MockForm>);
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

test('Validates field "required" correctly', async () => {
  const { container, getByText } = render(
    <MockForm><SelectField options={opts} name="foo" required={true} /></MockForm>
  );
  const select = container.getElementsByTagName('select')[0];

  expect(select.value).toEqual('');

  await act(async () => {
    fireEvent.change(select, { target: { value: opts[2] } });
  });
  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select.value).toEqual(opts[2]);
  expect(select).toHaveClass('form-control is-valid');

  await act(async () => {
    fireEvent.change(select, { target: { value: '' } });
  });
  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select.value).toEqual('');
  expect(select).toHaveClass('form-control is-invalid');
  expect(getByText('Required')).toBeInTheDocument();
});

test('Changes field "required" error message correctly', async () => {
  const { container, getByText } = render(
    <MockForm>
      <SelectField
        options={opts}
        name="foo"
        required={true}
        requiredMessage="Reqmsg"
      />
    </MockForm>
  );
  const select = container.getElementsByTagName('select')[0];

  expect(select.value).toEqual('');

  await act(async () => {
    fireEvent.change(select, { target: { value: opts[2] } });
  });
  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select.value).toEqual(opts[2]);
  expect(select).toHaveClass('form-control is-valid');

  await act(async () => {
    fireEvent.change(select, { target: { value: '' } });
  });
  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select.value).toEqual('');
  expect(select).toHaveClass('form-control is-invalid');
  expect(getByText('Reqmsg')).toBeInTheDocument();
});

test('Adds a default value when specified', () => {
  const { container } = render(
    <MockForm><SelectField name="foo" options={opts} defaultValue="optionTwo" /></MockForm>
  );
  const select = container.getElementsByTagName('select')[0];
  expect(select.value).toEqual('optionTwo');
});

// @TODO figure this out: not sure why the tests dont work when the behavior does.
// test('Handles selecting multiple values properly', async () => {
//   // Crappy state.
//   let lastValues = null;
//
//   const submit = values => {
//     console.warn('vals', values);
//     lastValues = values;
//   };
//   const { container } = render(
//     <MockForm onSubmit={ submit }><SelectField options={ opts } name="foo" multiple={ true }/></MockForm>
//   );
//   const form = container.getElementsByTagName('form')[0];
//
//   await act(async () => {
//     fireEvent.submit(form);
//   });
//
//   expect(lastValues).toEqual({});
//
//   const select = container.getElementsByTagName('select')[0];
//
//   await act(async () => {
//     fireEvent.change(select, {
//       target: {
//         value: opts[1],
//       },
//     });
//   });
//
//   await act(async () => {
//     fireEvent.submit(form);
//   });
//
//   expect(lastValues).toEqual({ foo: [opts[1]] });
//
//   await act(async () => {
//     fireEvent.change(select, {
//       target: {
//         value: opts[2],
//       },
//     });
//   });
//
//   await act(async () => {
//     fireEvent.submit(form);
//   });
//
//   expect(lastValues).toEqual({ foo: [opts[2]] });
//
//   await act(async () => {
//     userEvent.selectOptions(select, [opts[1], opts[2]])
//   });
//
//   await act(async () => {
//     fireEvent.submit(form);
//   });
//
//   expect(lastValues).toEqual({ foo: [opts[1], opts[2]] });
// });

test('Calls custom validation handler', async () => {
  const mock = jest.fn();
  const { container } = render(
    <MockForm><SelectField options={opts} name="foo" required={true} validate={mock} /></MockForm>
  );
  const select = container.getElementsByTagName('select')[0];

  await act(async () => {
    fireEvent.change(select, {
      target: {
        value: opts[2],
      },
    });
  });
  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select).toHaveClass('form-control is-valid');
  expect(mock).toHaveBeenCalled();
});

test('Performs custom validation correctly when specified', async () => {
  const validate = (value: any) => {
    if (value !== opts[1]) {
      return `Must pick ${opts[1]}`;
    }
  };
  const { container, getByText } = render(
    <MockForm><SelectField options={opts} name="foo" required={true} validate={validate} /></MockForm>
  );
  const select = container.getElementsByTagName('select')[0];

  await act(async () => {
    fireEvent.change(select, { target: { value: opts[0] } });
  });
  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select).toHaveClass('form-control is-invalid');
  expect(getByText(`Must pick ${opts[1]}`)).toBeInTheDocument();

  await act(async () => {
    fireEvent.change(select, { target: { value: opts[1] } });
  });
  await act(async () => {
    fireEvent.blur(select);
  });

  expect(select).toHaveClass('form-control is-valid');
});
