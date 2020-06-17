import React from 'react';
import { text } from '@storybook/addon-knobs';

import useDefaultPanel from '../../.storybook/useDefaultPanel';
import useSyntaxHighlighter from '../../.storybook/useSyntaxHighlighter';
import SectionHeader from '../../src/atoms/SectionHeader';

export default {
  title: 'Components/Utility/Validation',
  parameters: {
    jest: ['validation.test.js'],
  },
};

export const Default = () => {
  return (
    <>
      <p>Validation utilities aren't a component but a collection of tested functions for validating data in input Molecules.</p>
      <p>Browse through the following stories in the tree for examples.</p>
    </>
  );
};

export const Exists = () => {
  const code = `
  import { exists } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  exists(null) // false
  exists(undefined) // false
  exists(false) // true
  exists(0) // true
  exists('') // true
  exists({}) // true
  exists([]) // true
`;

  return (
    <>
      <SectionHeader><code>exists()</code></SectionHeader>
      <p>Checks whether a value exists, ie: is not null or undefined.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const IsEmpty = () => {
  const code = `
  import { isEmpty } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  isEmpty([]) // true
  isEmpty([1]) // false
  
  isEmpty({}) // true
  isEmpty({ a: 1 }) // false
  
  isEmpty('') // true
`;

  return (
    <>
      <SectionHeader><code>isEmpty()</code></SectionHeader>
      <p>Checks whether a value is empty, ie: it exists but is not empty.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};
export const IsString = () => {
  const code = `
  import { isString } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  isString([]) // false
  isEmpty('') // true
`;

  return (
    <>
      <SectionHeader><code>isString()</code></SectionHeader>
      <p>Checks whether a value is a string.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};
