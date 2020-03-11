import React, { forwardRef } from 'react';

/**
 * Wraps a component with an injected inner reference so that it can be attached inside of it.
 *
 * This is useful for components that wrap HTML elements such as inputs where you might want a reference to the
 * actual input element itself from outside of the component.
 */
export default function withForwardRef (Component: React.FC): React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>> {
  function component (props: any, ref: any): React.ReactElement {
    return <Component innerRef={ref} {...props} />;
  }

  const name = Component.displayName ?? Component.name;
  component.displayName = `withForwardRef(${name})`;
  return forwardRef(component);
};
