import React from 'react';
import PropTypes from 'prop-types';

interface LabelProps {
  for?: string
  classes?: string
  required?: boolean
  children: string | Function | undefined
}

/**
 * A Label is used to annotate form inputs by including an HTML `label` element.
 *
 * See most `*Input` molecules for example usages.
 *
 * Unless you are building custom Input molecules or something along those lines you will probably never use this directly.
 */
function Label (props: LabelProps): React.ReactElement {
  return (
    <label htmlFor={ props.for } className={ props.classes }>
      { props.required === true ? <span className="text-danger">*</span> : undefined }
      { props.children }
    </label>
  );
}

Label.propTypes = {
  /**
   * Only text may be passed as a child to be used as the label contents.
   **/
  children: PropTypes.string,
  /**
   * HTML classes to be added as-is to the label.
   **/
  classes: PropTypes.string,
  /**
   * HTML "for" attribute.
   **/
  for: PropTypes.string,
  /**
   * Marks the label as being for a required input.
   **/
  required: PropTypes.bool
};

Label.defaultProps = {
  required: false,
};

export default Label;
