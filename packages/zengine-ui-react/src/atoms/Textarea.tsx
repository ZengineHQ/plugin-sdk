import React from 'react';
import PropTypes from 'prop-types';

import withAriaAttributes from '../util/withAriaAttributes';
import withInputProps, { InputProps } from '../util/withInputProps';

export interface TextareaProps extends InputProps {
  resizable?: boolean
  placeholder?: string
  name?: string
  id?: string
  ref?: any
}

/**
 * Textareas are useful for collecting long-form written information from users.
 *
 * This will generate an HTML `<textarea>` element.
 *
 * See the `TextAreaField` for an example usage.
 *
 * Unless you are building custom Input molecules or something along those lines you will probably never use this directly.
 */
function Textarea (props: TextareaProps): React.ReactElement {
  const { resizable, ...passProps } = props;
  return (
    <textarea
      { ...passProps }
      // This inline style hacky thing allows us to control whether the textarea should be resizable via props.
      style={ props.resizable === true ? {} : { resize: 'none' } }
    />
  );
}

Textarea.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Marks the textarea as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the textarea as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the textarea as read-only.
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
   * HTML classes to be added as-is to the textarea.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the textarea's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the textarea loses focus.
   **/
  onBlur: PropTypes.func,
  /**
   * Whether the textarea should be resizable; uses native HTML functionality.
   **/
  resizable: PropTypes.bool,
};

Textarea.defaultProps = {
  resizable: true,
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Textarea };

export default withAriaAttributes(withInputProps(Textarea));
