import React from 'react';

type eventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void

interface InputProps {
  className?: string
  readOnly?: boolean
  onChange?: eventHandler
  onBlur?: eventHandler
  value?: any
  defaultValue?: any
  multiple?: boolean
}

interface NonInputProps {
  classes?: string
  readonly?: boolean
  onChange?: eventHandler
  onBlur?: eventHandler
  value?: any
  defaultValue?: any
  multiple?: boolean
}

/**
 * Applies common properties to an input component.
 *
 * It also omits them if blank so we don't clutter out elements with empty attributes unless they mean something.
 */
export default function withInputProps (Component: React.FC): (props: NonInputProps) => React.ReactElement {
  function component (props: NonInputProps): React.ReactElement {
    const { readonly, classes, value, defaultValue, ...passProps } = props;

    const inputProps: InputProps = { ...passProps };

    if (readonly === true) {
      // React DOM requires it to be camelCased like this.
      inputProps.readOnly = true;
    }

    if (classes !== undefined) {
      inputProps.className = classes;
    }

    if (props.onChange !== undefined) {
      inputProps.onChange = props.onChange;
    }

    if (props.onBlur !== undefined) {
      inputProps.onBlur = props.onBlur;
    }

    // Only set value if controlled.
    if (props.onChange !== undefined && props.onBlur !== undefined) {
      if (value !== undefined) {
        inputProps.value = value;
      } else if (defaultValue !== undefined) {
        inputProps.value = defaultValue;
      } else {
        inputProps.value = props.multiple !== undefined ? [] : '';
      }
    } else if (defaultValue !== undefined) {
      inputProps.defaultValue = defaultValue;
    }

    return <Component {...inputProps} />;
  }

  const name = Component.displayName ?? Component.name;
  component.displayName = `withInputProps(${name})`;

  component.defaultProps = {
    ...Component.defaultProps,
    ...{
      disabled: false,
      required: false,
      readonly: false,
    }
  };

  return component;
};
