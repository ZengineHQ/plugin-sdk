import React from 'react';
import { action } from '@storybook/addon-actions';

import Form from '@zenginehq/zengine-ui-react/lib/util/Form';
import TextField from '@zenginehq/zengine-ui-react/lib/molecules/TextField';

export default {
  title: 'ZengineUIReact|Templates',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const QuickSearch = () => (
  <Form
    onSubmit={ action('Search form submitted') }
    showReset={ false }
    showSubmit={ false }
    classes="form-inline"
  >
    <TextField label="Search" name="search" placeholder="Type here...." />
  </Form>
);
