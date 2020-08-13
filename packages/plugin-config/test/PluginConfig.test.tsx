// @ts-ignore
import React from 'react';
import { render } from '@testing-library/react';

import PluginConfig from '../src/PluginConfig';

test('Renders without exploding', () => {
  const { container } = render(<PluginConfig/>);
  const contents = container.getElementsByTagName('h2');
  expect(contents).toHaveProperty('length', 1);
});
