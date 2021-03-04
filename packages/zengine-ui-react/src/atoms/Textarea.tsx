import React from 'react';

import withAriaAttributes from '../util/withAriaAttributes';
import withInputProps, { InputProps } from '../util/withInputProps';

export interface TextareaProps extends InputProps<HTMLTextAreaElement> {
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
const Textarea: React.FC<TextareaProps> = (props) => {
  const { resizable, ...passProps } = props;
  return (
    <textarea
      {...passProps}
      // This inline style hacky thing allows us to control whether the textarea should be resizable via props.
      style={props.resizable === true ? {} : { resize: 'none' }}
    />
  );
}

Textarea.defaultProps = {
  resizable: true,
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Textarea };

export default withAriaAttributes(withInputProps(Textarea));
