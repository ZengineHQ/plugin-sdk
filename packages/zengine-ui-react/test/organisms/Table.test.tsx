import React from 'react';
import { render } from '@testing-library/react';

import Table from '../../src/organisms/Table';
import Button from '../../src/atoms/Button';

test('Renders a table HTML tag', () => {
  const { container } = render(<Table />);
  expect(container.getElementsByTagName('table')).toHaveProperty('length', 1);
});

test('Adds responsive wrapper', () => {
  const { container } = render(<Table />);
  expect(container.firstChild).toHaveClass('table-responsive');
});

test('Adds a default class to the table', () => {
  const { container } = render(<Table />);
  expect(container.getElementsByTagName('table')[0]).toHaveClass('table');
});

const headers = ['HeaderOne', 'HeaderTwo', 'HeaderThree'];

test('Generates correct table markup', () => {
  const { container } = render(<Table headers={headers} />);
  expect(container.getElementsByTagName('thead')).toHaveProperty('length', 1);
  expect(container.getElementsByTagName('tbody')).toHaveProperty('length', 1);
  expect(container.getElementsByTagName('tr')).toHaveProperty('length', 1);
  expect(container.getElementsByTagName('th')).toHaveProperty('length', 3);
});

test('Renders table headers', () => {
  const { container, getByText } = render(<Table headers={headers} />);
  expect(container.getElementsByTagName('th')).toHaveProperty('length', 3);
  expect(getByText('HeaderOne')).toBeInTheDocument();
  expect(getByText('HeaderTwo')).toBeInTheDocument();
  expect(getByText('HeaderThree')).toBeInTheDocument();
});

test('Renders table rows', () => {
  const rows = [['Column1', 'Column2', 'Column3'], ['Column4', 'Column5', 'Column6']];
  const { container, getByText } = render(<Table headers={headers} rows={rows} />);
  expect(container.getElementsByTagName('tr')).toHaveProperty('length', 3);
  expect(container.getElementsByTagName('td')).toHaveProperty('length', 6);
  expect(getByText('Column1')).toBeInTheDocument();
  expect(getByText('Column2')).toBeInTheDocument();
  expect(getByText('Column3')).toBeInTheDocument();
  expect(getByText('Column4')).toBeInTheDocument();
  expect(getByText('Column5')).toBeInTheDocument();
  expect(getByText('Column6')).toBeInTheDocument();
});

test('Renders React components in table columns', () => {
  const rows = [['Column1', <Button>ButtonComponent</Button>]];
  const { container, getByText } = render(<Table headers={headers} rows={rows} />);
  expect(container.getElementsByTagName('tr')).toHaveProperty('length', 2);
  expect(container.getElementsByTagName('td')).toHaveProperty('length', 2);
  expect(getByText('Column1')).toBeInTheDocument();
  expect(container.getElementsByTagName('button')).toHaveProperty('length', 1);
  expect(getByText('ButtonComponent')).toBeInTheDocument();
});

test('Renders React components in table columns', () => {
  const headers = ['Header1', <Button>ButtonComponent</Button>];
  const rows = [['Column1', 'Column2', 'Column3'], ['Column4', 'Column5', 'Column6']];
  const { container, getByText } = render(<Table headers={headers} rows={rows} />);
  expect(container.getElementsByTagName('th')).toHaveProperty('length', 2);
  expect(container.getElementsByTagName('td')).toHaveProperty('length', 2);
  expect(getByText('Header1')).toBeInTheDocument();
  expect(container.getElementsByTagName('button')).toHaveProperty('length', 1);
  expect(getByText('ButtonComponent')).toBeInTheDocument();
});