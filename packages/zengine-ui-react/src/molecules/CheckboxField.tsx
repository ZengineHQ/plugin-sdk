import React, { useEffect } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import Label from '../atoms/Label';
import getFieldClasses from '../util/getFieldClasses';
import ErrorMessage from '../util/ErrorMessage';
import withForwardRef from '../util/withForwardRef';
import { fieldValidationHelper, isEmpty } from '../util/validation';
import Checkbox from '../atoms/Checkbox';

export interface CheckboxFieldProps {
  required?: boolean
  validate?: Function
  id?: string
  name?: string
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
  requiredMessage?: string
}

/**
 * The CheckboxField molecule is a full-fledged checkbox input Formik field with validation, help text and error messages.
 *
 * It consists of a `Checkbox` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect binary information from users.
 */
const CheckboxField: React.FC<CheckboxFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && value !== true) {
      return props.requiredMessage;
    }
    return fieldValidationHelper(props.validate, value);
  };

  const [field, meta, { setTouched }] = useField({ name: (props.name ?? ''), validate });

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

  const id = props.id ?? `checkbox-${props.name}`;
  const helpId = props.help !== undefined && id !== undefined ? `${id}-help` : undefined;

  return (
    <div className="form-group">
      <div className="form-check">
        <Checkbox
          id={id}
          disabled={props.disabled !== undefined ? props.disabled : false}
          required={props.required !== undefined ? props.required : false}
          classes={getFieldClasses(meta, (props.classes ?? '')).replace('form-control', 'form-check-input')}
          ref={props.innerRef}
          describedby={helpId}
          {...field}
          // If we have custom onChange and onBlur callbacks we need to wrap them to keep from breaking Formik.
          onChange={onChangeHelper}
          onBlur={onBlurHelper}
        />

        {!isEmpty(props.label) ? (
          <Label required={props.required} for={id}
            classes={classNames(['form-check-label', props.labelClasses])}>{props.label}</Label>
        ) : undefined}

        {props.help !== undefined
          ? <small id={helpId} className="form-text text-muted">{props.help}</small>
          : undefined}

        <ErrorMessage meta={meta} />
      </div>
    </div>
  );
}

CheckboxField.defaultProps = {
  label: '',
  classes: '',
  disabled: false,
  required: false,
  readonly: false,
  requiredMessage: 'Required'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { CheckboxField };

export default withForwardRef(CheckboxField);
