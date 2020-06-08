import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { MockForm } from '../MockForm';
import YearField from '../../src/molecules/YearField';

test('it displays a year field with the expected date range', () => {
  const { container, getByText } = render(<MockForm><YearField name="foo" /></MockForm>);
  const firstOption = container.getElementsByTagName('option')[1];
  const otherOption = container.getElementsByTagName('option')[10];

  expect(firstOption).toHaveAttribute('value', '1901');
  expect(otherOption).toHaveAttribute('value', '1910');
  expect(getByText('1901')).toBeInTheDocument();
  expect(getByText('2040')).toBeInTheDocument();
});
