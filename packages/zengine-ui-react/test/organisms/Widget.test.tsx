import React from 'react';
import { render } from '@testing-library/react';

import Widget from '../../src/organisms/Widget';
import Button from '../../src/atoms/Button';

test('Renders a div HTML tag', () => {
  const { container } = render(<Widget />);
  expect(container.getElementsByTagName('div')[0]).toHaveClass('card');
});

test('Adds a default class', () => {
  const { container } = render(<Widget />);
  expect(container.firstChild).toHaveClass('card');
});

test('Adds all content if specified', () => {
  const { container, getByText } = render(<Widget header="WidgetHeader" body="WidgetBody" footer="WidgetFooter" />);
  const div = container.getElementsByTagName('div');
  expect(div).toHaveProperty('length', 4);
  expect(div[1]).toHaveClass('card-header');
  expect(div[2]).toHaveClass('card-body');
  expect(div[3]).toHaveClass('card-footer');
  expect(getByText('WidgetHeader')).toBeTruthy();
  expect(getByText('WidgetBody')).toBeTruthy();
  expect(getByText('WidgetFooter')).toBeTruthy();
});

test('Omits footer altogether if left blank', () => {
  const { container } = render(<Widget header="WidgetHeader" body="WidgetBody" />);
  expect(container.getElementsByTagName('footer')).toHaveProperty('length', 0);
});

test('Renders React components in header, body and footer', () => {
  const { container, getByText } = render(<Widget
    header={<Button>HeaderButton</Button>}
    body={<Button>BodyButton</Button>}
    footer={<Button>FooterButton</Button>}
  />);
  expect(container.getElementsByTagName('button')).toHaveProperty('length', 3);
  expect(getByText('HeaderButton')).toBeTruthy();
  expect(getByText('BodyButton')).toBeTruthy();
  expect(getByText('FooterButton')).toBeTruthy();
});
