import React from 'react';
import PropTypes from 'prop-types';

import withInputProps, { InputProps } from '../util/withInputProps';
import withAriaAttributes from '../util/withAriaAttributes';

interface CheckedProps extends InputProps {
  checked?: boolean
  defaultChecked?: boolean
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
function Checkbox (props: CheckedProps): React.ReactElement {
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
      value={props.value ?? true}
    />
  );
}

Checkbox.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Marks the checkbox as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the checkbox as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the checkbox as read-only.
   **/
  readonly: PropTypes.bool,
  /**
   * The element id of any associated help text, used for accessibility.
   **/
  describedby: PropTypes.string,
  /**
   * HTML classes to be added as-is to the checkbox.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the checkbox's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the checkbox loses focus.
   **/
  onBlur: PropTypes.func,
  /**
   * Whether or not the checkbox is, well, checked.
   **/
  checked: PropTypes.bool,
  /**
   * The checkbox's value, only applicable when used as part of a checkbox group.
   **/
  value: PropTypes.bool,
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Checkbox };

export default withAriaAttributes(withInputProps(Checkbox));
