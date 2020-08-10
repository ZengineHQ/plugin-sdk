import React, { ReactElement } from 'react';
import { useField } from 'formik';

import Input from '../atoms/Input';
import Label from '../atoms/Label';
import withForwardRef from '../util/withForwardRef';
import getFieldClasses from '../util/getFieldClasses';
import { fieldValidationHelper, isEmpty, isNumber } from '../util/validation';
import ErrorMessage from '../util/ErrorMessage';
import { NumberFieldProps } from "./NumberField";

export interface FormattedNumberFieldProps extends NumberFieldProps {
  separator?: boolean
}

/**
 * The FormattedNumberField molecule is a full-fledged numeric input Formik field with formatting, validation, help text and error messages.
 *
 * It consists of an `Input` atom, a `Label` atom and some additional markup.
 *
 * It's different from a regular NumberField in that it has support for thousand separators, which
 * means it can't be an HTML input with type "number".
 *
 * Use it to collect formatted numeric data from users.
 */
const FormattedNumberField: React.FC<FormattedNumberFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && isEmpty(value)) {
      return props.requiredMessage;
    }
    return fieldValidationHelper(props.validate, value);
  };

  const [field, meta, { setValue }] = useField({ name: props.name, validate });

  const id = props.id ?? `number-${props.name}`;
  const helpId = !isEmpty(props.help) && !isEmpty(id) ? `${id}-help` : undefined;

  const onChangeHelper = (e: React.ChangeEvent): any => {
    // Call custom callback.
    props?.onChange?.(e);

    // Now delegate back to Formik to keep things working.
    return field.onChange(e);
  };

  const numberWithCommas = (x: string|number) => {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  const onBlurHelper = (e: React.FocusEvent): void => {
    const target = e.currentTarget as HTMLInputElement;
    let val = target.value;

    if (isNumber(props.decimals)) {
      const temp = parseFloat(val.replace(/,/g, ''));
      val = isNaN(temp) ? '' : temp.toFixed(props.decimals);
    }

    // Add thousand separator.
    if (props.separator) {
      val = numberWithCommas(val);
    }

    setValue(val);
    const evt = { target: { value: val, name: field.name } };
    props?.onBlur?.(evt);
    return field.onBlur(evt);
  };

  const input = (
    <Input
      type="text"
      id={id}
      disabled={props.disabled}
      required={props.required}
      placeholder={props.placeholder}
      classes={getFieldClasses(meta, (props.classes ?? ''))}
      ref={props.innerRef}
      describedby={helpId}
      {...field}
      // If we have custom onChange and onBlur callbacks we need to wrap them to keep from breaking Formik.
      onChange={onChangeHelper}
      onBlur={onBlurHelper}
    />
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

FormattedNumberField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  readonly: false,
  classes: '',
  requiredMessage: 'Required',
  separator: false,
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { FormattedNumberField };

export default withForwardRef(FormattedNumberField);
