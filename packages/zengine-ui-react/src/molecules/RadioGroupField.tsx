import React, { useEffect } from 'react';
import { useField } from 'formik';

import Label from '../atoms/Label';
import getFieldClasses from '../util/getFieldClasses';
import ErrorMessage from '../util/ErrorMessage';
import Radio from '../atoms/Radio';
import { SelectOption } from '../atoms/Select';
import { fieldValidationHelper, isEmpty } from '../util/validation';
import extractOptions from '../util/extractOptions';

export interface RadioGroupFieldProps {
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
  readonly?: boolean
  classes?: string
  options: Array<SelectOption | string>
  requiredMessage?: string
}

/**
 * The RadioGroupField molecule is a full-fledged radio group input Formik field with validation, help text and error
 * messages.
 *
 * It consists of one or more `Radio` atoms, each paired with a `Label` atom and some additional markup.
 *
 * Use it to have users select an item from a list.
 */
const RadioGroupField: React.FC<RadioGroupFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && value === undefined) {
      return props.requiredMessage;
    }
    return fieldValidationHelper(props.validate, value);
  };

  const [field, meta, { setTouched }] = useField({ name: props.name, validate });

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

  const fieldId = props.id ?? `radiogroup-${props.name}`;
  const helpId = !isEmpty(props.help) && !isEmpty(fieldId) ? `${fieldId}-help` : undefined;

  /**
   * This is a workaround for the fact that radios don't seem to get marked as "touched" when the label or
   * checkbox itself is clicked, despite being touched.
   */
  useEffect(() => {
    if (meta?.value !== meta.initialValue) {
      if (!meta.touched) {
        setTouched(true).catch(r => {
          console.error(r);
        });
      }
    }
  }, [meta, setTouched]);

  return (
    <div className="form-group">
      {!isEmpty(props.label) ? (
        <Label required={props.required} classes={props.labelClasses}>{props.label}</Label>
      ) : undefined}

      {extractOptions(props.options).map((opt, i) => {
        const id = `${fieldId}-${opt.value}`;
        return (
          <div className="form-check" key={i}>
            <Radio
              id={id}
              disabled={props.disabled}
              required={props.required}
              classes={getFieldClasses(meta, (props.classes ?? '')).replace('form-control', 'form-check-input')}
              describedby={helpId}
              {...field}
              onBlur={onBlurHelper}
              onChange={onChangeHelper}
              value={opt.key}
              checked={meta.value === opt.key}
            />

            <Label required={false} for={id} classes="form-check-label">{opt.value}</Label>
          </div>
        )
      })}

      {!isEmpty(props.help) ? <small id={helpId} className="form-text text-muted">{props.help}</small> : undefined}

      <ErrorMessage meta={meta} />
    </div>
  );
}

RadioGroupField.defaultProps = {
  disabled: false,
  required: false,
  readonly: false,
  requiredMessage: 'Required'
};

export default RadioGroupField;
