import React from 'react';
import { action } from '@storybook/addon-actions';

import Form from '../../src/util/Form';
import TextAreaField from '../../src/molecules/TextAreaField';
import TextField from '../../src/molecules/TextField';
import CheckboxField from '../../src/molecules/CheckboxField';

export default {
  title: 'Templates',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const ContactForm = () => (
  <Form
    onSubmit={ action('Contact form submitted') }
    labelSubmit="Submit!"
    showReset={ false }
    validateOnMount={ false }
  >
    <TextField label="Name" name="name" placeholder="Name" required />
    <TextField label="Email" name="email" placeholder="Email" required />
    <TextAreaField label="Message" name="message" placeholder="Type in something thoughtful" />
    <CheckboxField label="I agree to receive spam emails from you" name="marketing" />
  </Form>
);
