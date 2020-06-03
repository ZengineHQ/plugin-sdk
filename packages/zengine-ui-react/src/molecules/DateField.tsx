import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { isEmpty } from "../util/validation";
import { useField } from "formik";
import Label from "../atoms/Label";
import ErrorMessage from "../util/ErrorMessage";
import getFieldClasses from "../util/getFieldClasses";

export interface DateFieldProps {
  required?: boolean
  validate?: Function
  id?: string
  name?: string
  onChange?: (event: React.ChangeEvent | any) => void
  onBlur?: (event: React.FocusEvent) => void
  disabled?: boolean
  readonly?: boolean
  classes?: string
  placeholder?: string
  labelClasses?: string
  label?: string
  help?: string
}

const DateField: React.FC<DateFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && (value === null || value === '' || value === undefined)) {
      return 'Required';
    }
    if (props.validate !== undefined) {
      return props.validate(value);
    }
  };

  const [field, meta, { setTouched, setValue }] = useField({ name: (props.name ?? ''), validate });

  const onChangeHelper = (date: Date): any => {
    setValue(date);
    setTouched(true);

    // Call custom callback.
    // const evt = new CustomEvent('date-change', { detail: date });
    const evt = { currentTarget: { value: date, name: field.name } };
    props?.onChange?.(evt);

    // Now delegate back to Formik to keep things working.
    return field.onChange(evt);
  };

  const onBlurHelper = (e: React.FocusEvent): void => {
    setTouched(true);
    props?.onBlur?.(e);
    return field.onBlur(e);
  };

  const id = props.id ?? `date-${props.name}`;
  const helpId = props.help !== undefined ? `${id}-help` : undefined;

  return (
    <div className="form-group">
      {!isEmpty(props.label) ? (
        <Label required={props.required} for={id} classes={props.labelClasses}>{props.label}</Label>
      ) : undefined}

      <div>
        <DatePicker
          selected={field.value}
          onChange={onChangeHelper}
          placeholderText={props.placeholder}
          className={getFieldClasses(meta, props.classes)}
          onBlur={onBlurHelper}
          disabled={props.disabled}
          name={props.name}
        />
      </div>

      {!isEmpty(props.help) ? <small id={helpId} className="form-text text-muted">{props.help}</small> : undefined}

      <ErrorMessage meta={meta} />
    </div>
  );
}

DateField.defaultProps = {
  disabled: false,
  label: '',
  required: false,
  readonly: false,
  classes: '',
  placeholder: ''
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { DateField };

export default DateField;
