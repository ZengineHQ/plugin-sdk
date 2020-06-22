import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import SelectField from '../../src/molecules/SelectField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Molecules/SelectField',
  component: SelectField,
  parameters: {
    jest: ['SelectField.test.js'],
  },
};

/**
 * Dummy options to be re-used across stories.
 */
const opts = ['one', 'two', 'three', 'four'];

export const Default = () => (
  <MockForm><SelectField label="SelectField" name="select" options={ opts } /></MockForm>
);

export const Required = () => (
  <MockForm><SelectField label="Required SelectField" name="select" options={ opts } required /></MockForm>
);


export const RequiredMessage = () => (
  <MockForm>
    <SelectField
      label="Required SelectField"
      name="select"
      options={ opts }
      required={true}
      requiredMessage="Very important can't ignore"
    />
  </MockForm>
);

export const Disabled = () => (
  <MockForm><SelectField label="Disabled SelectField" name="select" options={ opts } disabled /></MockForm>
);

export const CustomPlaceholder = () => (
  <MockForm>
    <SelectField
      label="Custom placeholder SelectField"
      name="select"
      options={ opts }
      placeholder="Holding the place"
    />
  </MockForm>
);

export const NoPlaceholder = () => (
  <MockForm>
    <SelectField
      label="No placeholder SelectField"
      name="select"
      options={ opts }
      placeholder=""
    />
  </MockForm>
);

export const DefaultValue = () => (
  <MockForm>
    <SelectField label="Default Value SelectField" name="select" options={ opts } defaultValue="three" />
  </MockForm>
);

export const Multiple = () => (
  <MockForm>
    <SelectField
      label="Multiple value SelectField"
      name="select"
      options={ opts }
      multiple={ true }
    />
  </MockForm>
);

export const CustomValidation = () => {
  const validate = value => {
    if (value !== 'three') {
      return 'You must pick "three"';
    }
  };
  return (
    <MockForm>
      <SelectField
        options={ opts }
        label="Validation"
        help="You must pick the right one"
        name="foo"
        validate={ validate }
      />
    </MockForm>
  );
};

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <SelectField
        label={ text('Label', 'Input Label') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', false) }
        multiple={ boolean('Multiple', false) }
        placeholder={ text('Placeholder', 'placeholder') }
        name="select"
        options={ opts }
      />
    </MockForm>
  );
};
