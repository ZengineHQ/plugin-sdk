import React, { ReactElement } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { fieldValidationHelper, isEmpty } from '../util/validation';
import { useField } from 'formik';
import Label from '../atoms/Label';
import ErrorMessage from '../util/ErrorMessage';
import getFieldClasses from '../util/getFieldClasses';

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
  prefix?: string | ReactElement
  suffix?: string | ReactElement
  label?: string
  help?: string
  showYearDropdown?: boolean
  showMonthDropdown?: boolean
  requiredMessage?: string
  minDate?: Date
  maxDate?: Date
}

const DateField: React.FC<DateFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && (value === null || value === '' || value === undefined)) {
      return props.requiredMessage;
    }
    return fieldValidationHelper(props.validate, value);
  };

  const [field, meta, { setTouched, setValue }] = useField({ name: (props.name ?? ''), validate });

  const onChangeHelper = (date: Date): any => {
    setValue(date).catch(r => {
      console.error(r);
    });
    setTouched(true).catch(r => {
      console.error(r);
    });

    // Call custom callback.
    // const evt = new CustomEvent('date-change', { detail: date });
    const evt = { currentTarget: { value: date, name: field.name } };
    props?.onChange?.(evt);

    // Now delegate back to Formik to keep things working.
    return field.onChange(evt);
  };

  const onBlurHelper = (e: React.FocusEvent): void => {
    setTouched(true).catch(evt => {
      console.error(evt);
    });
    props?.onBlur?.(e);
    return field.onBlur(e);
  };

  const id = props.id ?? `date-${props.name}`;
  const helpId = props.help !== undefined ? `${id}-help` : undefined;

  const input = (
    <div>
      <DatePicker
        selected={field.value}
        onChange={onChangeHelper}
        placeholderText={props.placeholder}
        className={getFieldClasses(meta, props.classes)}
        onBlur={onBlurHelper}
        disabled={props.disabled}
        name={props.name}
        showYearDropdown={props.showYearDropdown}
        showMonthDropdown={props.showMonthDropdown}
        minDate={props.minDate}
        maxDate={props.maxDate}
      />
    </div>
  );

  return (
    <div className="form-group">
      {!isEmpty(props.label) ? (
        <Label required={props.required} for={id} classes={props.labelClasses}>{props.label}</Label>
      ) : undefined}

      {(!isEmpty(props.prefix) || !isEmpty(props.suffix)) ? (
        <div className="input-group">
          {!isEmpty(props.prefix) ? (
            <div className="input-group-append"><span className="input-group-text">{props.prefix}</span></div>
          ) : undefined}

          {input}

          {!isEmpty(props.suffix) ? (
            <div className="input-group-prepend"><span className="input-group-text">{props.suffix}</span></div>
          ) : undefined}
        </div>
      ) : input}

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
  placeholder: '',
  showYearDropdown: true,
  showMonthDropdown: true,
  requiredMessage: 'Required'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { DateField };

export default DateField;
