import React from 'react';
import PropTypes from 'prop-types';

import withAriaAttributes from '../util/withAriaAttributes';
import withInputProps from '../util/withInputProps';

/**
 * Inputs are a fundamental building block in collecting any kind of information from users.
 *
 * This will generate an HTML `<input>` element.
 *
 * See the `NumberField` and `TextField` molecules for example usages.
 *
 * Unless you are building custom Input molecules or something along those lines you will probably never use this directly.
 */
function Input (props: any): React.ReactElement {
  return (
    <input { ...props } />
  );
}

Input.propTypes = {
  /**
   * HTML input type.
   **/
  type: PropTypes.string.isRequired,
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Marks the input as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the input as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the input as read-only.
   **/
  readonly: PropTypes.bool,
  /**
   * HTML placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * The element id of any associated help text, used for accessibility.
   **/
  describedby: PropTypes.string,
  /**
   * HTML classes to be added as-is to the input.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the input's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the input loses focus.
   **/
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Input };

export default withAriaAttributes(withInputProps(Input));
