import React from 'react';
import { useField } from 'formik';

import Input from '../atoms/Input';
import Label from '../atoms/Label';
import withForwardRef from '../util/withForwardRef';
import getFieldClasses from '../util/getFieldClasses';
import { fieldValidationHelper, isEmpty } from '../util/validation';
import ErrorMessage from '../util/ErrorMessage';
import { NumberFieldProps } from './NumberField';
import FormattedNumber from 'react-number-format';

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
  const validate = async (value: any,): Promise<any> => {
    if (props.required === true && isEmpty(value)) {
      return props.requiredMessage;
    }
    return await fieldValidationHelper(props.validate, value);
  };

  const [{ onChange, onBlur, ...field }, meta] = useField({ name: props.name, validate });

  const id = props.id ?? `number-${props.name}`;
  const helpId = !isEmpty(props.help) && !isEmpty(id) ? `${id}-help` : undefined;

  const input = (
    <FormattedNumber
      onValueChange={({ value, floatValue, formattedValue }) => {
        props.onChange?.({ value, floatValue, formattedValue })
        onChange({ target: { name: props.name, value: floatValue } })
      }}
      {...field}
      onBlur={e => {
        props.onBlur?.(e)
        onBlur(e)
      }}
      id={id}
      customInput={Input}
      getInputRef={props.innerRef}
      disabled={props.disabled}
      decimalScale={props.decimals}
      required={props.required}
      thousandSeparator={props.separator === true ? true : undefined}
      placeholder={props.placeholder}
      classes={getFieldClasses(meta, (props.classes ?? ''))}
      describedby={helpId}
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
  separator: true,
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { FormattedNumberField };

export default withForwardRef(FormattedNumberField);
