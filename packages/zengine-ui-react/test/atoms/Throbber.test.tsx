import React from 'react';
import { render } from '@testing-library/react';

import Throbber from '../../src/atoms/Throbber';

const defaultClasses = 'throbber-container d-flex justify-content-center align-items-center';

test('Renders a div wrapper with the expected classes', () => {
  const { container } = render(<Throbber />);
  const div = container.getElementsByTagName('div');
  expect(div).toHaveProperty('length', 2);
  expect(div[0]).toHaveClass(defaultClasses);
});

test('Adds custom classes to wrapper if specified', () => {
  const { container } = render(<Throbber wrapperClass="foo"/>);
  const div = container.getElementsByTagName('div')[0];
  expect(div).toHaveClass(`${defaultClasses} foo`);
});

test('Displays a Bootstrap spinner by default', () => {
  const { container } = render(<Throbber />);
  const div = container.getElementsByTagName('div')[1];
  expect(div).toHaveClass('spinner-border text-primary')
});

test('Changes Bootstrap spinner theme if specified', () => {
  const { container } = render(<Throbber theme="error"/>);
  const div = container.getElementsByTagName('div')[1];
  expect(div).toHaveClass('spinner-border text-error')
});

test('Uses the Zengine throbber if specified', () => {
  const { container } = render(<Throbber theme="zengine"/>);
  const div = container.getElementsByTagName('div');
  expect(div).toHaveProperty('length', 1);
  const img = container.getElementsByTagName('img');
  expect(img).toHaveProperty('length', 1);
  expect(img[0]).toHaveAttribute('src', 'https://platform.zenginehq.com/images/ajax-loader3.gif');
  expect(img[0]).toHaveAttribute('alt', 'Loading...');
});
