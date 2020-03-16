import React from 'react';
import { useField } from 'formik';

import Label from '../atoms/Label';
import Select, { SelectOption } from '../atoms/Select';
import withForwardRef from '../util/withForwardRef';
import getFieldClasses from '../util/getFieldClasses';
import { isEmpty } from '../util/validation';
import ErrorMessage from '../util/ErrorMessage';

export interface SelectFieldProps {
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
  multiple?: boolean
  options: Array<SelectOption | string>
  placeholder?: string
  defaultValue?: any
  innerRef?: any
}

/**
 * The SelectField is a full-fledged select input Formik field with validation, help text and error messages.
 *
 * A SelectField molecule consists of a `Select` atom paired with a `Label` atom and some extra markup.
 *
 * Use it to have users pick one or more items from a pre-defined list.
 */
const SelectField: React.FC<SelectFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && isEmpty(value)) {
      return 'Required';
    }
    if (props.validate !== undefined && typeof props.validate === 'function') {
      return props.validate(value);
    }
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id ?? `select-${props.name}`;
  const helpId = !isEmpty(props.help) && !isEmpty(id) ? `${id}-help` : undefined;

  const onChangeHelper = (e: React.ChangeEvent): void => {
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
      {!isEmpty(props.label) ? (
        <Label required={props.required} for={id} classes={props.labelClasses}>{props.label}</Label>
      ) : undefined}
      <Select
        id={id}
        disabled={props.disabled}
        required={props.required}
        multiple={props.multiple}
        options={props.options}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        classes={getFieldClasses(meta, (props.classes ?? ''))}
        ref={props.innerRef}
        describedby={helpId}
        // value, onChange and onBlur are being added here directly from `useField()`.
        {...field}
        // If we have custom onChange and onBlur callbacks we need to wrap them to keep from breaking Formik.
        onChange={onChangeHelper}
        onBlur={onBlurHelper}
      />

      {!isEmpty(props.help) ? <small id={helpId} className="form-text text-muted">{props.help}</small> : undefined}

      <ErrorMessage meta={meta} />
    </div>
  );
}

SelectField.defaultProps = {
  disabled: false,
  label: '',
  required: false,
  classes: '',
  multiple: false,
  placeholder: '-Select-'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { SelectField };

export default withForwardRef(SelectField);
