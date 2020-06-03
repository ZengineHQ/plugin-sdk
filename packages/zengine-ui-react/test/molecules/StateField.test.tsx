import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { MockForm } from '../MockForm';
import StateField from '../../src/molecules/StateField';

test('it displays a select field with US state options', () => {
  const { container, getByText } = render(<MockForm><StateField name="foo" /></MockForm>);
  const firstOption = container.getElementsByTagName('option')[1];
  const otherOption = container.getElementsByTagName('option')[10];

  expect(firstOption).toHaveAttribute('value', 'US-AL');
  expect(otherOption).toHaveAttribute('value', 'US-FL');
  expect(getByText('Arizona')).toBeInTheDocument();
  expect(getByText('Pennsylvania')).toBeInTheDocument();
});
