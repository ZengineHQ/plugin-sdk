import React from 'react';

import PageTitle from '../../src/atoms/PageTitle';

export default {
  title: 'Templates',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const Intro = () => (
  <article>
    <PageTitle>Template Browser</PageTitle>
    <p>
      Use the nested menu on the left to navigate between different Atom Design Templates built using these
      components the example data switched out.nts. Each page will have the rendered template with the full
      source code displayed underneath it.
    </p>
    <p>
      <strong>NOTE</strong>: These templates are meant to serve as more complex examples of creating designs
      leveraging the atomic design components and they can actually be simply copied and pasted into your
      project.
    </p>
  </article>
);
