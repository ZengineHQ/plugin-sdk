import React from 'react';
import { useField } from 'formik';

import Input from '../atoms/Input';
import Label from '../atoms/Label';
import withForwardRef from '../util/withForwardRef';
import getFieldClasses from '../util/getFieldClasses';
import { fieldValidationHelper, isEmpty } from '../util/validation';
import ErrorMessage from '../util/ErrorMessage';
import { NumberFieldProps } from './NumberField';
import FormattedNumber, { FormatInputValueFunction, NumberFormatValues } from 'react-number-format';

export interface FormattedNumberFieldProps extends NumberFieldProps {
  separator?: boolean
  /**
   *  Props allowed to be passed to 'react-format-number'
   */
  decimalSeparator?: boolean | string
  fixedDecimalScale?: boolean
  displayType?: 'input' | 'text'
  format?: string | FormatInputValueFunction
  removeFormatting?: (formattedValue: string) => string
  mask?: string | string[]
  isNumericString?: boolean
  allowNegative?: boolean
  allowEmptyFormatting?: boolean
  allowLeadingZeros?: boolean
  type?: 'text' | 'tel' | 'password'
  isAllowed?: (values: NumberFormatValues) => boolean
  renderText?: (formattedValue: string) => React.ReactNode
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan'
  defaultValue?: number | string
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
const FormattedNumberField: React.FC<FormattedNumberFieldProps> = ({
  name,
  id = `number-${name}`,
  innerRef,
  decimals,
  disabled,
  required,
  requiredMessage,
  separator,
  classes,
  placeholder,
  prefix,
  suffix,
  label,
  labelClasses,
  help,
  onBlur: customOnBlur,
  onChange: customOnChange,
  validate: customValidate,
  ...props
}) => {
  const validate = async (value: any): Promise<any> => {
    if (required === true && isEmpty(value)) {
      return requiredMessage;
    }
    return await fieldValidationHelper(customValidate, value);
  };

  const [{ onChange, onBlur, ...field }, meta] = useField({ name, validate });

  const helpId = !isEmpty(help) && !isEmpty(id) ? `${id}-help` : undefined;

  const className = getFieldClasses(meta, (classes ?? ''))

  const input = (
    <FormattedNumber
      {...props}
      onValueChange={({ value, floatValue, formattedValue }) => {
        customOnChange?.({ value, floatValue, formattedValue })
        onChange({ target: { name: name, value: floatValue } })
      }}
      {...field}
      onBlur={e => {
        customOnBlur?.(e)
        onBlur(e)
      }}
      id={id}
      customInput={Input}
      getInputRef={innerRef}
      disabled={disabled}
      decimalScale={decimals}
      required={required}
      thousandSeparator={separator === true ? true : undefined}
      placeholder={placeholder}
      className={className}
      classes={className}
      describedby={helpId}
    />
  );

  return (
    <div className="form-group">
      {!isEmpty(label) ? (
        <Label required={required} for={id} classes={labelClasses}>{label}</Label>
      ) : undefined}

      {(!isEmpty(prefix) || !isEmpty(suffix)) ? (
        <div className="input-group">
          {!isEmpty(prefix) ? (
            <div className="input-group-append"><span className="input-group-text">{prefix}</span></div>
          ) : undefined}

          {input}

          {!isEmpty(suffix) ? (
            <div className="input-group-prepend"><span className="input-group-text">{suffix}</span></div>
          ) : undefined}
        </div>
      ) : input}

      {!isEmpty(help) ? <small id={helpId} className="form-text text-muted">{help}</small> : undefined}

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
