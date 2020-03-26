import React from 'react';
import { action } from '@storybook/addon-actions';

import Form from '@zenginehq/zengine-ui-react/lib/util/Form';
import TextField from '@zenginehq/zengine-ui-react/lib/molecules/TextField';
import TextAreaField from '@zenginehq/zengine-ui-react/lib/molecules/TextAreaField';
import CheckboxField from '@zenginehq/zengine-ui-react/lib/molecules/CheckboxField';

export default {
  title: 'ZengineUIReact|Templates',
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
