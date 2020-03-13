import React from 'react';

export interface TransformedAriaProps {
  'aria-describedby'?: string
  'aria-readonly'?: boolean
  'aria-disabled'?: boolean
  'aria-required'?: boolean
}

export interface AriaProps {
  describedby?: string
  readonly?: boolean
  disabled?: boolean
  required?: boolean
}

/**
 * Applies ARIA attributes to a Component.
 *
 * This checks for the presence of certain HTML attributes in the props and adds the corresponding ARIA attribute
 * to the list of attributes to be rendered with the element.
 */
const withAriaAttributes = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & AriaProps> => {
  function component (props: AriaProps): React.ReactElement {
    const ariaProps: TransformedAriaProps = {};

    if ('describedby' in props) {
      ariaProps['aria-describedby'] = props.describedby;
    }

    if (props?.readonly === true) {
      ariaProps['aria-readonly'] = true;
    }

    if (props?.disabled === true) {
      ariaProps['aria-disabled'] = true;
    }

    if (props?.required === true) {
      ariaProps['aria-required'] = true;
    }

    return <Component {...props as P} {...ariaProps} />;
  }

  const name = Component.displayName ?? Component.name;
  component.displayName = `withAriaAttributes(${name})`;
  return component;
};

export default withAriaAttributes;
