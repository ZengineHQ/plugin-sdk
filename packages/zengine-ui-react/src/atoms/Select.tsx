import React from 'react';

import extractOptions from '../util/extractOptions';
import withAriaAttributes, { AriaProps } from '../util/withAriaAttributes';
import withInputProps, { InputProps } from '../util/withInputProps';

export interface SelectOption {
  key: string | number
  value: string | number
}

export interface SelectProps extends InputProps, AriaProps {
  name?: string
  placeholder?: string
  options?: Array<SelectOption | string>
  id?: string
  ref?: any
}

/**
 * A select is used to have users select one or more options from a list.
 *
 * This will generate an HTML `<select>` element.
 *
 * See the `SelectField` molecule for an example usage.
 *
 * Unless you are building custom Select molecules or something along those lines you will probably never use this
 * directly.
 */
const Select: React.FC<SelectProps> = (props) => {
  const { placeholder, ...passProps } = props;
  return (
    <select {...passProps}>
      {placeholder !== undefined && placeholder !== null ? (<option value="">{placeholder}</option>) : null}

      {extractOptions(props.options).map((opt, i) => (
        <option key={i} value={opt.key}>{opt.value}</option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  disabled: false,
  required: false,
  classes: '',
  multiple: false,
  placeholder: '-Select-',
  options: []
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Select };

export default withAriaAttributes(withInputProps(Select));
