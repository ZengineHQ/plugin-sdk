import React from 'react';
import PropTypes from 'prop-types';

import extractOptions from '../util/extractOptions';
import withAriaAttributes, { AriaProps } from '../util/withAriaAttributes';
import withInputProps, { InputProps } from '../util/withInputProps';

export interface SelectOption {
  key: string
  value: string
}

interface SelectProps extends InputProps, AriaProps {
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
    <select { ...passProps }>
      { placeholder !== undefined ? (<option value="">{ placeholder }</option>) : null }

      { extractOptions(props.options).map((opt, i) => (
        <option key={ i } value={ opt.key }>{ opt.value }</option>
      )) }
    </select>
  );
}

Select.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Select options; an array of objects with a "key" and "value" properties.
   **/
  // options: PropTypes.arrayOf(PropTypes.oneOfType([
  //   PropTypes.shape({ key: PropTypes.string, value: PropTypes.string }),
  //   PropTypes.string,
  // ])),
  /**
   * Marks the select as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the select as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * The element id of any associated help text, used for accessibility.
   **/
  describedby: PropTypes.string,
  /**
   * Marks the select as accepting multiple choices.
   **/
  multiple: PropTypes.bool,
  /**
   * Value to be used as the empty option or an empty string to omit it entirely.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the select.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the select's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the select loses focus.
   **/
  onBlur: PropTypes.func,
  /**
   * A value to be used as the starting value if none already exists.
   **/
  defaultValue: PropTypes.string,
};

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
