import React from 'react';

import withInputProps, { InputProps } from '../util/withInputProps';
import withAriaAttributes from '../util/withAriaAttributes';

export interface RadioProps extends InputProps {
  checked?: boolean
  name?: string
  id?: string
}

/**
 * A Radio is used to collect binary information from users, they seldom appear alone and usually appear as part of
 * a "Radio Group" where users have to pick one item out of a list, much like a regular select element (with
 * `multiple` set to false).
 *
 * This will generate an HTML `<input type="radio">` element. Radios are sufficiently different from other inputs
 * that they warrant their own atom.
 *
 * See the `RadioGroupField` molecule for an example usage.
 *
 * Unless you are building custom Radio molecules or something along those lines you will probably never use this
 * directly.
 */
const Radio: React.FC<RadioProps> = (props) => {
  const checked = ('checked' in props && props.checked !== undefined) ? props.checked : false;
  return (
    <input
      type="radio"
      { ...props }
      // These are specific to checkbox/radio.
      checked={ props.onChange !== undefined ? checked : undefined }
      aria-checked={ props.onChange !== undefined ? checked : undefined}
      value={ props.value }
    />
  );
}

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Radio };

export default withAriaAttributes(withInputProps(Radio));
