import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Label from '../../src/atoms/Label';
import Select, { SelectOption } from '../atoms/Select';
import withForwardRef from '../../src/util/withForwardRef';
import getFieldClasses from '../../src/util/getFieldClasses';
import { isEmpty } from '../../src/util/validation';
import ErrorMessage from '../../src/util/ErrorMessage';

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
  options: SelectOption[]
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
function SelectField(props: SelectFieldProps) {
  const validate = (value: any): any => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
    if (props.validate && typeof props.validate === 'function') {
      return props.validate(value);
    }
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id ?? `select-${props.name}`;
  const helpId = props.help ? `${id}-help` : undefined;

  const onChangeHelper = (e: React.ChangeEvent) => {
    // Call custom callback.
    props.onChange && props.onChange(e);
    // Now delegate back to Formik to keep things working.
    return field.onChange(e);
  };
  const onBlurHelper = (e: React.FocusEvent) => {
    props.onBlur && props.onBlur(e);
    return field.onBlur(e);
  };

  return (
    <div className="form-group">
      {props.label && (
        <Label required={props.required} for={id} classes={props.labelClasses}>{props.label}</Label>
      )}
      <Select
        id={id}
        disabled={props.disabled}
        required={props.required}
        multiple={props.multiple}
        options={props.options}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        classes={getFieldClasses(meta, props.classes)}
        ref={props.innerRef}
        describedby={helpId}
        // value, onChange and onBlur are being added here directly from `useField()`.
        {...field}
        // If we have custom onChange and onBlur callbacks we need to wrap them to keep from breaking Formik.
        onChange={onChangeHelper}
        onBlur={onBlurHelper}
      />

      {props.help && <small id={helpId} className="form-text text-muted">{props.help}</small>}

      <ErrorMessage meta={meta} />
    </div>
  );
}

SelectField.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string.isRequired,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Field label.
   **/
  label: PropTypes.string,
  /**
   * Select options; either an object keyed by values or an array of strings.
   **/
  // options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  /**
   * Marks the select as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the select as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the select as accepting multiple choices.
   **/
  multiple: PropTypes.bool,
  /**
   * String to be used as the empty option.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the select.
   **/
  classes: PropTypes.string,
  /**
   * HTML classes to be added as-is to the label.
   **/
  labelClasses: PropTypes.string,
  /**
   * Optional help text to display below the select.
   **/
  help: PropTypes.string,
  /**
   * Callback for when the select's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the select loses focus.
   **/
  onBlur: PropTypes.func,
  /**
   * A value to be used as the starting value if none already exists.
   **/
  defaultValue: PropTypes.string,
  /**
   * Custom validation callback. Only "required" is handled automatically. Should return a string.
   **/
  validate: PropTypes.func,
};

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
