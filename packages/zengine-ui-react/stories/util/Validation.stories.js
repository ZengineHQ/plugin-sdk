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
      <p>Browse through the following stories in the tree for some explanations and examples.</p>
      <p>For more thorough information please refer to the tests.</p>
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
  
  isEmpty('') // true
  isString([]) // false
  isString({}) // false
  isString(1) // false
`;

  return (
    <>
      <SectionHeader><code>isString()</code></SectionHeader>
      <p>Checks whether a value is a string.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const MatchesRegex = () => {
  const code = `
  import { matchesRegex } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  matchesRegex('hello@123', /[a-z]+@[0-9]+/) // true
  matchesRegex('hello123', /[a-z]+@[0-9]+/) // false
`;

  return (
    <>
      <SectionHeader><code>matchesRegex()</code></SectionHeader>
      <p>Checks whether a value matches the given regular expression.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const IsEmail = () => {
  const code = `
  import { isEmail } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  isEmail('not an email') // false
  isEmail('without@domain') // false
  isEmail('withoutat.com') // false
  isEmail('test@contrived.net') // true
  isEmail('test.foo.bar@complex.net') // true
`;

  return (
    <>
      <SectionHeader><code>isEmail()</code></SectionHeader>
      <p>Checks whether a string is a valid email address.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const MaxLength = () => {
  const code = `
  import { maxLength } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  maxLength('hello', 3) // false
  maxLength('hello', 5) // true
`;

  return (
    <>
      <SectionHeader><code>maxLength()</code></SectionHeader>
      <p>Checks whether a string adheres to a maximum length restriction.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const MinLength = () => {
  const code = `
  import { minLength } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  minLength('hello', 3) // true
  minLength('oi', 3) // false
`;

  return (
    <>
      <SectionHeader><code>minLength()</code></SectionHeader>
      <p>Checks whether a string adheres to a maximum length restriction.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const MaxWordCount = () => {
  const code = `
  import { maxWordCount } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  maxWordCount('hello there foo bar', 3) // false
  maxWordCount('hello there foo', 3) // true
`;

  return (
    <>
      <SectionHeader><code>maxWordCount()</code></SectionHeader>
      <p>Checks whether a string adheres to a maximum word count restriction.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const MinWordCount = () => {
  const code = `
  import { minWordCount } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  minWordCount('hello there', 3) // false
  minWordCount('hello there foo', 3) // true
`;

  return (
    <>
      <SectionHeader><code>minWordCount()</code></SectionHeader>
      <p>Checks whether a string adheres to a minimum word count restriction.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const Alpha = () => {
  const code = `
  import { alpha } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  alpha('hellothere') // true
  alpha('hello there') // false
  alpha('hello123') // false
  
  alpha('hello there', true) // true
`;

  return (
    <>
      <SectionHeader><code>alpha()</code></SectionHeader>
      <p>Checks whether a string contains only alphabetic characters and, optionally, spaces.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const AlphaNumeric = () => {
  const code = `
  import { alphaNumeric } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  alphaNumeric('hello123') // true
  alphaNumeric('hello 123') // false
  
  alphaNumeric('hello 123', true) // true
`;

  return (
    <>
      <SectionHeader><code>alphaNumeric()</code></SectionHeader>
      <p>Checks whether a string contains only alphabetic and numeric characters and, optionally, spaces.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};

export const Numeric = () => {
  const code = `
  import { numeric } from '@zenginehq/zengine-ui-react/lib/util/validation';
  
  numeric('123') // true
  numeric('123 456') // false
  numeric('123.456') // true
  numeric('hello123') // false
`;

  return (
    <>
      <SectionHeader><code>numeric()</code></SectionHeader>
      <p>Checks whether a string contains only numeric characters.</p>

      { useSyntaxHighlighter(code) }
    </>
  );
};
