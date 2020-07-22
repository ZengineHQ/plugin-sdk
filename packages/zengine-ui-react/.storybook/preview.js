import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';

import '@zenginehq/zengine-ui/style.css';

try {
  const results = require('../public/test-results.json');
  addDecorator(withTests({ results }));
} catch (e) {
  // It's all good, just don't display test results.
}

addParameters({
  options: {
    showPanel: true
  },
  // viewMode: 'story',
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    defaultViewport: 'responsive',
  }
});
