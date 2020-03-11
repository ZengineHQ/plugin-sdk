import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';

import '@zenginehq/zengine-ui/style.min.css';

try {
  // @TODO figure out how to handle tests from different packages.
  const results = require('../src/test/.results.json');
  addDecorator(withTests({ results }));
} catch (e) {
  // It's all good, just don't display test results.
}

addDecorator(withKnobs);
addParameters({
  options: { showPanel: true },
  viewMode: 'story',
});
