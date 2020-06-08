import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import NumberField from '../../src/molecules/NumberField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Molecules/NumberField',
  component: NumberField,
  parameters: {
    jest: ['NumberField.test.js'],
  },
};

export const Default = () => <MockForm><NumberField label="Number Input" name="number" /></MockForm>;

export const Required = () => (
  <MockForm><NumberField label="Required Number Input" required={ true } name="number" /></MockForm>
);

export const Disabled = () => (
  <MockForm><NumberField label="Disabled Number Input" disabled={ true } name="number" /></MockForm>
);

export const HelpText = () => (
  <MockForm><NumberField label="Number" help="This is some help text" name="number" /></MockForm>
);

export const Placeholder = () => (
  <MockForm><NumberField label="Placeholder Number Input" placeholder="placeholder number" name="number" /></MockForm>
);

export const PrefixAndSuffix = () => (
  <MockForm>
    <NumberField
      label="Desired grant amount"
      placeholder="All the benjamins"
      name="number"
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
      <NumberField label="Bio" help="Pick a number between 50 and 55" name="random" validate={ validate } />
    </MockForm>
  );
};

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <NumberField
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
