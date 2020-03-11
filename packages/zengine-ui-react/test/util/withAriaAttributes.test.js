import React from 'react';
import { render } from '@testing-library/react';

import withAriaAttributes from '../../src/util/withAriaAttributes';

function TestComponent(props) {
  // React doesn't like us adding "readonly" sans camelCase, we don't care about the actual attribute here only the
  // aria-equivalent as the actual readonly attribute is being tested in `withInputProps()`.
  const { readonly, ...passProps } = props;
  return <input type="text" {...passProps} />;
}

const AttrTestComponent = withAriaAttributes(TestComponent);

test('it does nothing if no relevant props exist', () => {
  const { container } = render(<AttrTestComponent />);
  expect(container.firstChild).not.toHaveAttribute('aria-readonly');
  expect(container.firstChild).not.toHaveAttribute('aria-disabled');
  expect(container.firstChild).not.toHaveAttribute('aria-required');
  expect(container.firstChild).not.toHaveAttribute('aria-describedBy');
});

test('it adds aria-readonly attribute if specified', () => {
  const { container } = render(<AttrTestComponent readonly={true} />);
  expect(container.firstChild).toHaveAttribute('aria-readonly', 'true');
});

test('it adds aria-disabled attribute if specified', () => {
  const { container } = render(<AttrTestComponent disabled={true} />);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('it adds aria-required attribute if specified', () => {
  const { container } = render(<AttrTestComponent required={true} />);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('it adds aria-describedby attribute if specified', () => {
  const { container } = render(<AttrTestComponent describedby="foo123" />);
  expect(container.firstChild).toHaveAttribute('aria-describedby', 'foo123');
});
