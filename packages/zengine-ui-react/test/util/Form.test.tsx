import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Field } from "formik";

import { Form } from '../../src/index';

test('Renders a form', () => {
  const { container } = render(<Form onSubmit={() => null} />);
  const form = container.getElementsByTagName('form')[0];
  expect(container.firstChild).toBe(form);
});

test('Form has a submit button by default', () => {
  const { container } = render(<Form onSubmit={() => null} />);
  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'submit');
  expect(button).toHaveTextContent('Save');
});

test('Form changes submit button label when specified', () => {
  const { container } = render(<Form onSubmit={() => null} labelSubmit="Foo" />);
  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'submit');
  expect(button).toHaveTextContent('Foo');
});

test('Form has a reset button by default', async () => {
  const { container } = render(
    <Form onSubmit={() => null} showSubmit={false} showReset={true} initialValues={{ name: '' }}>
      <Field label="Name" name="name" required />
    </Form>
  );
  const input = container.getElementsByTagName('input')[0];

  // Add something to the input to make sure the reset button appears.
  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Testing',
      },
    });
  });

  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'reset');
  expect(button).toHaveTextContent('Reset');
});

test('Form changes reset button label when specified', async () => {
  const { container } = render(
    <Form
      onSubmit={() => null}
      showSubmit={false}
      showReset={true}
      labelReset="Baz"
      initialValues={{ name: '' }}
    >
      <Field label="Name" name="name" required />
    </Form>
  );
  const input = container.getElementsByTagName('input')[0];

  // Add something to the input to make sure the reset button appears.
  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Testing',
      },
    });
  });

  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'reset');
  expect(button).toHaveTextContent('Baz');
});

test('Form reset button doesn\'t appear when form is untouched', async () => {
  // Not really sure at all why but this one won't run unless wrapped.
  await act(async () => {
    const { container } = render(
      <Form onSubmit={() => null} showSubmit={false} showReset={true} initialValues={{ name: '' }}>
        <Field label="Name" name="name" required />
      </Form>
    );

    const button = container.getElementsByTagName('button');
    expect(button).toHaveProperty('length', 0);
  });
});

test('Adds form classes when specified', () => {
  const { container } = render(<Form onSubmit={() => null} classes="foo bar" />);
  expect(container.firstChild).toHaveClass('foo bar');
});

test('Validation does not occur on initial mount', async () => {
  const mock = jest.fn();
  render(<Form onSubmit={() => null} validate={mock} />);
  expect(mock).not.toBeCalled();
});

test('Performs custom validation when specified', async () => {
  const mock = jest.fn();
  const { container } = render(
    <Form onSubmit={() => null} validate={mock}>
      <Field label="Name" name="name" required />
    </Form>
  );
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Still testing',
      },
    });
  });

  expect(mock).toBeCalled();
});

test('Calls submit handler with proper value when submitted', async () => {
  const mock = jest.fn();
  const { container } = render(
    <Form onSubmit={mock} initialValues={{ name: '', age: 0 }}>
      <Field label="Name" name="name" required />
      <Field label="Age" type="number" name="age" required />
    </Form>
  );
  const form = container.getElementsByTagName('form')[0];
  const input = container.getElementsByTagName('input')[0];
  const otherInput = container.getElementsByTagName('input')[1];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Still testing',
      },
    });
    fireEvent.change(otherInput, {
      target: {
        value: 15,
      },
    });
  });

  await act(async () => {
    fireEvent.submit(form);
  });

  expect(mock).toBeCalled();
  expect(mock.mock.calls[0][0].name).toEqual('Still testing');
  expect(mock.mock.calls[0][0].age).toEqual(15);
});

test('Calls after submit handler with proper values after submitted', async () => {
  const mock = jest.fn();

  const { container } = render(
    <Form onSubmit={() => null} afterSubmit={mock} initialValues={{ name: 'hello' }}>
      <Field label="Name" name="name" />
    </Form>
  );
  const form = container.getElementsByTagName('form')[0];

  await act(async () => {
    fireEvent.submit(form);
  });

  expect(mock).toBeCalled();
  expect(mock.mock.calls[0][0].name).toEqual('hello');
});
