import React from 'react';
import { linkTo } from '@storybook/addon-links';

import YearField from '../../src/molecules/YearField';
import MockForm from '../../test/MockForm';
import Button from '../../src/atoms/Button';

export default {
  title: 'Components/Molecules/YearField',
  component: YearField,
  parameters: {
    jest: ['YearField.test.js'],
  },
};

export const Default = () => (
  <MockForm>
    <p>
      This is a <em>SelectField</em> with custom, unchangeable options.
      All other <Button theme="link" onClick={ linkTo('Components/Molecules/SelectField') }>SelectField</Button> props work here.
    </p>
    <YearField label="YearField" name="year" />
  </MockForm>
);
