import React from 'react';

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
const Label: React.FC<LabelProps> = (props) => {
  return (
    <label htmlFor={ props.for } className={ props.classes }>
      { props.required === true ? <span className="text-danger">*</span> : undefined }
      { props.children }
    </label>
  );
}

Label.defaultProps = {
  required: false,
};

export default Label;
