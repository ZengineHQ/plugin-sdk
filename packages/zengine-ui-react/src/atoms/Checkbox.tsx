import React from 'react';

import withInputProps, { InputProps } from '../util/withInputProps';
import withAriaAttributes, { AriaProps } from '../util/withAriaAttributes';

export interface CheckedProps extends AriaProps, InputProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: React.ChangeEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  value?: any
  id?: string
  ref?: any
}

/**
 * A Checkbox is used to collect binary information from users.
 *
 * This will generate an HTML `<input type="checkbox">` element. Checkboxes are sufficiently different from other inputs
 * that they warrant their own atom.
 *
 * See the `CheckboxField` and `CheckboxGroupField` molecules for example usages.
 *
 * Unless you are building custom Checkbox/Toggle molecules or something along those lines you will probably never use
 * this directly.
 */
const Checkbox: React.FC<CheckedProps> = (props) => {
  const checked = ('checked' in props && props.checked !== undefined) ? props.checked : props.value ?? false;
  const checkedProp: CheckedProps = {};

  if (props.onChange !== undefined) {
    checkedProp.checked = checked;
  } else {
    checkedProp.defaultChecked = checked;
  }

  return (
    <input
      type="checkbox"
      {...props}
      // These are specific to checkboxes.
      { ...checkedProp }
      aria-checked={props.onChange !== undefined && checked === true}
      value={props.value !== undefined ? props.value : true}
    />
  );
}

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Checkbox };

export default withAriaAttributes(withInputProps(Checkbox));
