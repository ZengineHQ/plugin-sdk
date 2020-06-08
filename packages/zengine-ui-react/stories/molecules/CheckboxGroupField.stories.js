import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import CheckboxGroupField from '../../src/molecules/CheckboxGroupField';
import MockForm from '../../test/MockForm';
import useDefaultPanel from '../../.storybook/useDefaultPanel';

export default {
  title: 'Components/Molecules/CheckboxGroupField',
  component: CheckboxGroupField,
  parameters: {
    jest: ['CheckboxGroupField.test.js'],
  },
};

const opts = ['Cake', 'Pizza', 'Ice Cream', 'Candy', 'Mucus'];

export const Default = () => (
  <MockForm>
    <CheckboxGroupField label="Checkbox Group" name="foo" options={ opts }/>
  </MockForm>
);

export const Required = () => (
  <MockForm>
    <CheckboxGroupField label="Required Checkbox Group" required={ true } name="required" options={ opts }/>
  </MockForm>
);

export const HelpText = () => (
  <MockForm>
    <CheckboxGroupField label="Pick One!" help="This is some help text" name="help" options={ opts }/>
  </MockForm>
);

export const Disabled = () => (
  <MockForm>
    <CheckboxGroupField label="Disabled Checkbox Group" disabled={ true } name="disabled" options={ opts }/>
  </MockForm>
);

export const CustomValidation = () => {
  const validate = value => {
    if (!value.includes('Pizza')) {
      return 'Bro, it\'s pizza what\'s wrong with you?';
    }
  };
  return (
    <MockForm>
      <CheckboxGroupField
        options={ opts }
        label="Validation"
        help="You can pick what you like as long as it includes Pizza"
        name="foo"
        validate={ validate }
      />
    </MockForm>
  );
};

export const Playground = () => {
  useDefaultPanel('Knobs');
  const freshDemoOptions = [
    'Triceratops',
    'Tyrannosaurus Rex',
    'Ankylosaurus',
    'Velociraptor',
    'Parasaurolophus',
  ];

  return (
    <MockForm>
      <CheckboxGroupField
        name="dinos"
        label={ text('Label', 'Dinosaurs you would like to be') }
        help={ text('Help Text', 'Theres really no right answer...') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', true) }
        options={ freshDemoOptions }
      />
    </MockForm>
  );
};
