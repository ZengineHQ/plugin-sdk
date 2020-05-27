import React from 'react';
import range from 'lodash/range';

import { SelectField } from './SelectField';
import withForwardRef from '../util/withForwardRef';
import getFieldClasses from '../util/getFieldClasses';
import Select from '../atoms/Select';

export interface YearFieldProps {
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
 * The YearField is a customized SelectField that only allows selecting a year.
 */
const YearField: React.FC<YearFieldProps> = (props) => {
  const yearOptions = range(1901, 2041).map(n => n.toString());

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
      options={yearOptions}
    />
  );
}

YearField.defaultProps = {
  disabled: false,
  label: '',
  required: false,
  classes: '',
  multiple: false,
  placeholder: '-Select-'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { YearField };

export default withForwardRef(YearField);
