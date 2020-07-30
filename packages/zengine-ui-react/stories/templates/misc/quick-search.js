import React from 'react';
import { action } from '@storybook/addon-actions';

import Form from '../../../src/util/Form';
import TextField from '../../../src/molecules/TextField';

const QuickSearch = () => (
  <Form
    onSubmit={ action('Search form submitted') }
    showReset={ false }
    showSubmit={ false }
    classes="form-inline"
  >
    <TextField label="Search" name="search" placeholder="Type here...." />
  </Form>
);

export default QuickSearch;
