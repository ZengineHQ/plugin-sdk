import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import RadioGroupField from '@zenginehq/zengine-ui-react/lib/molecules/RadioGroupField';
import MockForm from '../../../util/MockForm';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Molecules/RadioGroupField',
  component: RadioGroupField,
  parameters: {
    jest: ['RadioGroupField.test.js'],
  },
};

const opts = ['Baseball', 'Basketball', 'Hockey', 'Football', 'Soccer'];

export const Default = () => (
  <MockForm>
    <RadioGroupField label="Radio Group Input" name="text" options={ opts } />
  </MockForm>
);

export const Required = () => (
  <MockForm>
    <RadioGroupField
      label="Required Radio Group"
      required={ true }
      name="required"
      options={ opts }
    />
  </MockForm>
);

export const HelpText = () => (
  <MockForm>
    <RadioGroupField label="Pick One!" help="This is some help text" name="help" options={ opts } />
  </MockForm>
);

export const Disabled = () => (
  <MockForm>
    <RadioGroupField label="Disabled Radio Field" disabled={ true } name="disabled" options={ opts } />
  </MockForm>
);

export const CustomValidation = () => {
  const validate = value => {
    if (value !== 'Soccer') {
      return 'You must pick "Soccer"';
    }
  };
  return (
    <MockForm>
      <RadioGroupField
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
  const freshDemoOptions = [
    'Kwame (Earth)',
    'Wheeler (Fire)',
    'Linka (Wind)',
    'Gi (Water)',
    'Ma-Ti (Heart)',
  ];

  return (
    <MockForm>
      <RadioGroupField
        name="planeteer"
        label={ text('Label', 'Favorite planeteer from Captain Planet and the aforementioned') }
        help={ text('Help Text', 'Theres really no right answer...') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', true) }
        options={ freshDemoOptions }
      />
    </MockForm>
  );
};
