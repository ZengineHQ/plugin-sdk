import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import DateField from '../../src/molecules/DateField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Molecules/DateField',
  component: DateField,
  parameters: {
    jest: ['DateField.test.js'],
  },
};

export const Default = () => (
  <MockForm><DateField label="Date Input" name="date" /></MockForm>
);

export const Required = () => (
  <MockForm><DateField label="Required Date Input" required={ true } name="date" /></MockForm>
);

export const Disabled = () => (
  <MockForm><DateField label="Disabled Date Input" disabled={ true } name="date" /></MockForm>
);

export const HelpText = () => (
  <MockForm><DateField label="Date Input" name="date" help="Custom Help Text" /></MockForm>
);

export const CustomValidation = () => {
  const validate = value => {
    return 'Always invalid';
  };

  return (
    <MockForm>
      <DateField label="Date Input" name="date" validate={ validate } help="This field will always be invalid but you can use the custom callback to check whatever"/>
    </MockForm>
  );
}

export const Placeholder = () => (
  <MockForm><DateField label="Date Input" name="date" placeholder="Custom Placeholder" /></MockForm>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <DateField
        name="foo"
        label={ text('Label', 'Input Label') }
        help={ text('Help Text', 'Follow these instructions wisely') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', false) }
        placeholder={ text('Placeholder', 'placeholder') }
      />
    </MockForm>
  );
};
