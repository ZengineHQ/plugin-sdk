import React, { useEffect } from 'react';
import { useField } from 'formik';

import Label from '../atoms/Label';
import getFieldClasses from '../util/getFieldClasses';
import ErrorMessage from '../util/ErrorMessage';
import Checkbox from '../atoms/Checkbox';
import extractOptions from '../util/extractOptions';
import { isEmpty } from '../util/validation';
import { SelectOption } from '../atoms/Select';

export interface CheckboxGroupFieldProps {
  required?: boolean
  validate?: Function
  id?: string
  name: string
  onChange?: (event: React.ChangeEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  disabled?: boolean
  readonly?: boolean
  classes?: string
  labelClasses?: string
  label?: string
  innerRef?: string
  help?: string
  children?: React.ReactNode
  options?: Array<SelectOption | string>
}

/**
 * The CheckboxGroupField molecule is a full-fledged multiple checkbox input Formik field with validation, help text
 * and error messages.
 *
 * It consists of one or more `Checkbox` atoms, each paired with a `Label` atom and some additional markup.
 *
 * Use it to have users select one or more items from a list.
 */
const CheckboxGroupField: React.FC<CheckboxGroupFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && value === undefined) {
      return 'Required';
    }
    if (props.validate !== undefined) {
      return props.validate(value);
    }
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

  const fieldId = props.id ?? `checkboxgroup-${props.name}`;
  const helpId = !isEmpty(props.help) && !isEmpty(fieldId) ? `${fieldId}-help` : undefined;

  /**
   * This is a workaround for the fact that checkboxes don't seem to get marked as "touched" when the label or
   * checkbox itself is clicked, despite being touched.
   */
  useEffect(() => {
    if (meta?.value !== meta.initialValue) {
      if (!meta.touched) {
        setTouched(true);
      }
    }
  }, [meta, setTouched]);

  return (
    <div className="form-group">
      {!isEmpty(props.label) ? (
        <Label for="" required={props.required} classes={props.labelClasses}>{props.label}</Label>
      ) : undefined}

      {extractOptions(props.options).map((opt, i) => {
        const id = `${fieldId}-${opt.value}`;
        return (
          <div className="form-check" key={i}>
            <Checkbox
              id={id}
              disabled={props.disabled}
              required={props.required}
              classes={getFieldClasses(meta, (props.classes ?? '')).replace('form-control', 'form-check-input')}
              describedby={helpId}
              {...field}
              onBlur={onBlurHelper}
              onChange={onChangeHelper}
              value={opt.key}
              checked={Array.isArray(meta.value) ? meta.value.includes(opt.key) : false}
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

CheckboxGroupField.defaultProps = {
  disabled: false,
  required: false,
  readonly: false,
};

export default CheckboxGroupField;
