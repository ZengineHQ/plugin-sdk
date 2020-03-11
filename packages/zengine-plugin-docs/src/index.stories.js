import React from 'react';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@zenginehq/zengine-ui-react';

export default {
  title: 'Welcome|Plugin SDK',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      disable: true,
    },
  }
};

export const Introduction = () => (
  <>
    <p>
      Zengine Plugin SDK is a curated collection of packages encompassing all aspects of Zengine Plugin development.
    </p>

    <p>
      The following packages are available at the moment:
    </p>

    <dl>
      <dt><Button theme="link" classes="p-0" onClick={ linkTo('ZengineSDK|Welcome') }>Zengine SDK</Button></dt>
      <dd>A cohesive set of libraries for interacting with the Zengine API</dd>

      <dt><Button theme="link" classes="p-0" onClick={ linkTo('ZengineSDKReact|Welcome') }>Zengine SDK React</Button></dt>
      <dd>React wrappers and components for working with Zengine SDK</dd>

      <dt><Button theme="link" classes="p-0" onClick={ linkTo('ZengineUI|Welcome') }>Zengine UI</Button></dt>
      <dd>Beautiful, responsive styles using a custom Bootstrap theme for use with Zengine Plugins</dd>

      <dt><Button theme="link" classes="p-0" onClick={ linkTo('ZengineUIReact|Welcome') }>Zengine UI React</Button></dt>
      <dd>Robust React atomic design components for Zengine Plugins, used with Zengine UI</dd>

    </dl>
  </>
);
