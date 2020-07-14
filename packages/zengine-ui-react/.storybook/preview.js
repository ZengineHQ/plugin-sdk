import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';

import '@zenginehq/zengine-ui/style.css';

try {
  const results = require('../public/test-results.json');
  addDecorator(withTests({ results }));
} catch (e) {
  // It's all good, just don't display test results.
}

addDecorator(withKnobs);

addParameters({
  options: { showPanel: true },
  viewMode: 'story',
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
