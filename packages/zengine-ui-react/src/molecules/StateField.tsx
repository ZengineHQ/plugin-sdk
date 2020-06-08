import React from 'react';

import { SelectField } from './SelectField';
import withForwardRef from '../util/withForwardRef';
import getStates from '../util/getStates';

export interface StateFieldProps {
  required?: boolean
  onChange?: (event: React.ChangeEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  id?: string
  name: string
  help?: string
  label?: string
  labelClasses?: string
  disabled?: boolean
  classes?: string
  multiple?: boolean
  placeholder?: string
  defaultValue?: any
  innerRef?: any
}

/**
 * The StateField is a customized SelectField that only allows selecting US States.
 */
const StateField: React.FC<StateFieldProps> = (props) => {
  const stateOptions = getStates();
  return (
    <SelectField
      required={props.required}
      onChange={props.onChange}
      onBlur={props.onBlur}
      id={props.id}
      name={props.name}
      help={props.help}
      label={props.label}
      labelClasses={props.labelClasses}
      disabled={props.disabled}
      classes={props.classes}
      multiple={props.multiple}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      options={stateOptions}
    />
  );
}

StateField.defaultProps = {
  disabled: false,
  label: '',
  required: false,
  classes: '',
  multiple: false,
  placeholder: '-Select-'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { StateField };

export default withForwardRef(StateField);
