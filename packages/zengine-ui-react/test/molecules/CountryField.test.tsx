import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { MockForm } from '../MockForm';
import CountryField from '../../src/molecules/CountryField';

test('it displays a select field with country options', () => {
  const { container, getByText } = render(<MockForm><CountryField name="foo" /></MockForm>);
  const firstOption = container.getElementsByTagName('option')[1];
  const otherOption = container.getElementsByTagName('option')[10];

  expect(firstOption).toHaveAttribute('value', 'AF');
  expect(otherOption).toHaveAttribute('value', 'AR');
  expect(getByText('Afghanistan')).toBeInTheDocument();
  expect(getByText('Brazil')).toBeInTheDocument();
});
