import React, { useState } from 'react';
import { useField } from 'formik';

import { fieldValidationHelper, isEmpty, wordCount } from '../util/validation';
import Label from '../atoms/Label';
import getFieldClasses from '../util/getFieldClasses';
import ErrorMessage from '../util/ErrorMessage';
import Textarea from '../atoms/Textarea';
import withForwardRef from '../util/withForwardRef';

export interface TextAreaFieldProps {
  required?: boolean
  validate?: Function
  onChange?: (event: React.ChangeEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  id?: string
  name: string
  help?: string
  label?: string
  labelClasses?: string
  disabled?: boolean
  classes?: string
  placeholder?: string
  innerRef?: any
  resizable?: boolean
  requiredMessage?: string
  wordCounter?: boolean
}

/**
 * The TextAreaField molecule is a full-fledged textarea input Formik field with validation, help text and error messages.
 *
 * It consists of a `Textarea` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect long-form textual data from users.
 */
const TextAreaField: React.FC<TextAreaFieldProps> = (props) => {
  const [words, setWords] = useState(0);

  const validate = (value: any): any => {
    if (props.required === true && isEmpty(value)) {
      return props.requiredMessage;
    }
    return fieldValidationHelper(props.validate, value);
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id ?? `textarea-${props.name}`;
  const helpId = !isEmpty(props.help) && !isEmpty(id) ? `${id}-help` : undefined;

  const onChangeHelper = (e: React.ChangeEvent): void => {
    const target = e.currentTarget as HTMLInputElement;

    if (props.wordCounter === true) {
      setWords(wordCount(target.value));
    }

    // Call custom callback.
    props?.onChange?.(e);
    // Now delegate back to Formik to keep things working.
    return field.onChange(e);
  };
  const onBlurHelper = (e: React.FocusEvent): void => {
    props?.onBlur?.(e);
    return field.onBlur(e);
  };

  return (
    <div className="form-group">
      { !isEmpty(props.label) ? (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) : undefined }
      <Textarea
        id={ id }
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        classes={ getFieldClasses(meta, (props.classes ?? '')) }
        ref={ props.innerRef }
        describedby={ helpId }
        resizable={ props.resizable }
        { ...field }
        // If we have custom onChange and onBlur callbacks we need to wrap them to keep from breaking Formik.
        onChange={ onChangeHelper }
        onBlur={ onBlurHelper }
      />

      <div className="d-flex">
        { !isEmpty(props.help) ? <small id={ helpId } className="form-text text-muted flex-grow-1">{ props.help }</small> : undefined }
        { props.wordCounter === true && <small className="form-text text-muted">Word Count: { words }</small>}
      </div>

      <ErrorMessage meta={ meta }/>
    </div>
  );
}

TextAreaField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  classes: '',
  resizable: true,
  requiredMessage: 'Required',
  wordCounter: false
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { TextAreaField };

export default withForwardRef(TextAreaField);
