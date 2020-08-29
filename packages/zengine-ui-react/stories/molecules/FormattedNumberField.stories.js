import React from 'react';
import { boolean, text, number } from '@storybook/addon-knobs';

import FormattedNumberField from '../../src/molecules/FormattedNumberField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';
import { useFormikContext } from 'formik';

export default {
  title: 'Components/Molecules/FormattedNumberField',
  component: FormattedNumberField,
  parameters: {
    jest: ['FormattedNumberField.test.js'],
  },
};

export const Default = () => <MockForm><FormattedNumberField label="Number Input" name="number" /></MockForm>;

export const Required = () => (
  <MockForm><FormattedNumberField label="Required Number Input" required={ true } name="number" /></MockForm>
);

export const RequiredMessage = () => (
  <MockForm>
    <FormattedNumberField
      label="Required Number Input"
      required={ true }
      requiredMessage="This is crucial and can't be left out"
      name="number"
    />
  </MockForm>
);

export const Disabled = () => (
  <MockForm><FormattedNumberField label="Disabled Number Input" disabled={ true } name="number" /></MockForm>
);

export const HelpText = () => (
  <MockForm><FormattedNumberField label="Number" help="This is some help text" name="number" /></MockForm>
);

export const Placeholder = () => (
  <MockForm><FormattedNumberField label="Placeholder Number Input" placeholder="placeholder number" name="number" /></MockForm>
);

export const Decimals = () => (
  <MockForm>
    <FormattedNumberField
      label="Fixed Decimal Places Number Input"
      decimals={4}
      name="decimals"
    />
  </MockForm>
);

export const ThousandSeparator = () => (
  <MockForm>
    <FormattedNumberField
      label="Thousand Separator Number Input"
      separator={true}
      name="thousands"
      help="This input displays commas to separate thousands"
    />
  </MockForm>
);

export const PrefixAndSuffix = () => (
  <MockForm>
    <FormattedNumberField
      label="Desired grant amount"
      placeholder="All the benjamins"
      name="number"
      separator
      help="This some crucial information and shows amongst other things how greedy you are"
      prefix="$"
      suffix=".00"
    />
  </MockForm>
);

export const CustomValidation = () => {
  const validate = value => {
    if (!value) {
      return 'Pick a number kid';
    }
    if (value <= 50) {
      return 'Must be greater than 50';
    }
    if (value >= 55) {
      return 'Must be less than 55';
    }
  };
  return (
    <MockForm>
      <FormattedNumberField label="Bio" help="Pick a number between 50 and 55" name="random" validate={ validate } />
    </MockForm>
  );
};

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <FormattedNumberField
        name="playgroundFormattedNumberField"
        label={text('Label', 'Input Label')}
        help={text('Help Text', 'Follow these instructions wisely')}
        disabled={boolean('Disabled', false)}
        decimals={number('Decimals', 2)}
        required={boolean('Required', false)}
        placeholder={text('Placeholder', 'placeholder')}
      />
    </MockForm>
  );
};
