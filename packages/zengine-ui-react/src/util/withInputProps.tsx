import React from 'react';
import omit from 'lodash/omit';

export interface TransformedInputProps {
  className?: string
  readOnly?: boolean
  onChange?: (event: React.ChangeEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  value?: any
  defaultValue?: any
  multiple?: boolean
  children?: React.ReactNode
}

export interface InputProps {
  disabled?: boolean
  required?: boolean
  name?: string
  classes?: string
  readonly?: boolean
  onChange?: (event: React.ChangeEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  value?: any
  defaultValue?: any
  multiple?: boolean
  children?: React.ReactNode
}

/**
 * Applies common properties to an input component.
 *
 * It also omits them if blank so we don't clutter out elements with empty attributes unless they mean something.
 */
// export default function withInputProps (Component: React.FC): (props: NonInputProps) => React.ReactElement {
const withInputProps = <P extends {}> (
  Component: React.ComponentType<P>
): React.FC<P & InputProps> => {
  function component (props: InputProps): React.ReactElement {
    const { readonly, classes, value, defaultValue, ...passProps } = props;

    const inputProps: TransformedInputProps = { ...passProps };

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
        inputProps.value = props.multiple === true ? [] : '';
      }
    } else if (defaultValue !== undefined) {
      inputProps.defaultValue = defaultValue;
    }

    const newProps = omit(props, 'readonly', 'classes', 'value', 'defaultValue', 'onBlur', 'onChange');
    return <Component {...newProps as P} {...inputProps} />;
  }

  const name = Component.displayName ?? 'Component';
  component.displayName = `withInputProps(${name})`;

  // component.defaultProps = {
  //   ...Component.defaultProps,
  //   ...{
  //     disabled: false,
  //     required: false,
  //     readonly: false,
  //   }
  // };

  return component;
};

export default withInputProps;
