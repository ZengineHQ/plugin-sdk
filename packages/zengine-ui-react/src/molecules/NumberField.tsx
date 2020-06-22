import React, { ReactElement } from 'react';
import { useField } from 'formik';

import Input from '../atoms/Input';
import Label from '../atoms/Label';
import withForwardRef from '../util/withForwardRef';
import getFieldClasses from '../util/getFieldClasses';
import { isEmpty, isNumber } from '../util/validation';
import ErrorMessage from '../util/ErrorMessage';

export interface NumberFieldProps {
  required?: boolean
  validate?: Function
  name: string
  help?: string
  id?: string
  onChange?: (event: React.ChangeEvent| any) => void
  onBlur?: (event: React.FocusEvent) => void
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  classes?: string
  innerRef?: any
  prefix?: string | ReactElement
  suffix?: string | ReactElement
  label?: string
  labelClasses?: string
  decimals?: number
  requiredMessage?: string
}

/**
 * The NumberField molecule is a full-fledged number input Formik field with validation, help text and error messages.
 *
 * It consists of an `Input` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect numeric data from users.
 */
const NumberField: React.FC<NumberFieldProps> = (props) => {
  const validate = (value: any): any => {
    if (props.required === true && isEmpty(value)) {
      return props.requiredMessage;
    }
    if (props.validate !== undefined) {
      return props.validate(value);
    }
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id ?? `number-${props.name}`;
  const helpId = !isEmpty(props.help) && !isEmpty(id) ? `${id}-help` : undefined;

  const onChangeHelper = (e: React.ChangeEvent): any => {
    const target = e.currentTarget as HTMLInputElement;
    let val = target.value;

    if (isNumber(props.decimals)) {
      val = parseFloat(val).toFixed(props.decimals);
    }

    const evt = { currentTarget: { value: val, name: field.name } };

    // Call custom callback.
    props?.onChange?.(evt);
    // Now delegate back to Formik to keep things working.
    return field.onChange(evt);
  };
  const onBlurHelper = (e: React.FocusEvent): void => {
    props?.onBlur?.(e);
    return field.onBlur(e);
  };

  const input = (
    <Input
      type="number"
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

NumberField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  readonly: false,
  classes: '',
  requiredMessage: 'Required'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { NumberField };

export default withForwardRef(NumberField);
