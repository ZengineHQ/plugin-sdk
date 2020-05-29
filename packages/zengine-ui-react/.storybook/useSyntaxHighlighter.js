import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

/**
 * Helper to include syntax highlighted source code.
 *
 * @param code
 */
const useSyntaxHighlighter = code => (
  <SyntaxHighlighter language="jsx" style={ atomDark } customStyle={ { paddingTop: 0 } }>
    { code }
  </SyntaxHighlighter>
);

export default useSyntaxHighlighter;
