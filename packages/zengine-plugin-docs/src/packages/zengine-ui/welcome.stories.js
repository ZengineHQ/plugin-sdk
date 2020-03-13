import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { Button, PageTitle, SectionHeader } from '@zenginehq/zengine-ui-react';
import useSyntaxHighlighter from '../../util/useSyntaxHighlighter';

export default {
  title: 'ZengineUI|Welcome',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      disable: true,
    },
  }
};

export const Introduction = () => {
  const code1 = `
npm i @zenginehq/zengine-ui
`;

  const code2 = `
import '@zenginehq/zengine-ui/style.css';
// or
import '@zenginehq/zengine-ui/style.min.css';
`;

  const code3 = `
@import "~@zenginehq/zengine-ui/scss/variables";
@import "~@zenginehq/zengine-ui/scss/vendor/variables";
@import "~@zenginehq/zengine-ui/scss/vendor/bootstrap";
@import "~@zenginehq/zengine-ui/scss/vendor/bootswatch";
@import "~@zenginehq/zengine-ui/scss/custom";
`;

  return (
    <article>
      <PageTitle>Introduction</PageTitle>

      <p>
        Zengine UI is a beautiful set of responsive styles for you to build Zengine Plugins with.
        It's built using Bootstrap with a custom theme.
      </p>

      <p>Installing and using Zengine UI is easy:</p>

      <SectionHeader>Installation</SectionHeader>

      { useSyntaxHighlighter(code1) }

      <SectionHeader>Add styles in your JS</SectionHeader>

      { useSyntaxHighlighter(code2) }

      <SectionHeader>Rolling your own SASS</SectionHeader>

      { useSyntaxHighlighter(code3) }
    </article>
  );
};

export const Usage = () => (
  <article>
    <PageTitle>Usage</PageTitle>

    <p>Should the need arise to customize Zengine UI styles, there are a couple options</p>

    <SectionHeader>Bootstrap</SectionHeader>

    <p>
      Since Zengine UI uses Bootstrap you are free to leverage any of the helper classes in order to
      tweak styles to your heart's content.
    </p>

    <SectionHeader>SASS</SectionHeader>

    <p>If you are rolling your own SASS, feel free to override variables and include only the partials
      you actually want!</p>

  </article>
);

export const Development = () => (
  <article>
    <PageTitle>Developing Zengine UI</PageTitle>

    <p>@TODO add some relevant information here</p>
  </article>
);
