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
const Input: React.FC<any> = (props) => {
  return (
    <input { ...props } />
  );
}

Input.defaultProps = {
  type: 'text',
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Input };

export default withAriaAttributes(withInputProps(Input));
