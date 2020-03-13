/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { forwardRef } from 'react';

/**
 * Wraps a component with an injected inner reference so that it can be attached inside of it.
 *
 * This is useful for components that wrap HTML elements such as inputs where you might want a reference to the
 * actual input element itself from outside of the component.
 */
export default function withForwardRef <P extends object> (
  Component: React.ComponentType<P>
) {
  function component (props: any, ref: any): React.ReactElement {
    return <Component innerRef={ref} {...props as P} />;
  }

  const name = Component.displayName ?? Component.name;
  component.displayName = `withForwardRef(${name})`;
  return forwardRef<React.ReactElement, P>(component);
};
