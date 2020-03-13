import React from 'react';
import { render } from '@testing-library/react';

import KPI from '../../src/organisms/KPI';

test('Renders a section HTML tag', () => {
  const { container } = render(<KPI />);
  expect(container.getElementsByTagName('section')).toHaveProperty('length', 1);
});

test('Adds a default class', () => {
  const { container } = render(<KPI />);
  expect(container.firstChild).toHaveClass('org-kpi');
});

test('Renders CounterLabeled elements', () => {
  const items = [
    { count: 1358, label: 'Submissions' },
    { count: 158, label: 'Ready for Review' },
    { count: 45, label: 'Reviewed' }
  ];
  const { container, getByText } = render(<KPI items={items} />);

  expect(container.getElementsByTagName('article')).toHaveProperty('length', 3);
  expect(getByText('Submissions')).toBeTruthy();
  expect(getByText('Ready for Review')).toBeTruthy();
  expect(getByText('Reviewed')).toBeTruthy();
});
