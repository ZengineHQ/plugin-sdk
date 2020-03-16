import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Button } from '@zenginehq/zengine-ui-react';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'ZengineUIReact|Components/Atoms/Button',
  component: Button,
  parameters: {
    jest: ['Button.test.js'],
  },
};

export const Default = () => <Button onClick={ action('clicked') }>Default Button</Button>;

export const Secondary = () => (
  <Button theme="secondary" onClick={ action('clicked') }>
    Secondary Button
  </Button>
);

export const Disabled = () => (
  <Button disabled={ true } onClick={ action('clicked') }>
    Disabled Button
  </Button>
);

export const Sizes = () => (
  <div className="d-flex justify-content-between w-50">
    <div>
      <Button classes="btn-sm" onClick={ action('clicked') }>
        Small Button
      </Button>
    </div>

    <div>
      <Button onClick={ action('clicked') }>
        Regular Button
      </Button>
    </div>

    <div>
      <Button classes="btn-lg" onClick={ action('clicked') }>
        Large Button
      </Button>
    </div>
  </div>
);

export const StyleGuide = () => (
  <>
    <ul className="list-inline">
      <li className="list-inline-item"><Button>Primary</Button></li>
      <li className="list-inline-item"><Button theme="secondary">Secondary</Button></li>
      <li className="list-inline-item"><Button theme="success">Success</Button></li>
      <li className="list-inline-item"><Button theme="danger">Danger</Button></li>
      <li className="list-inline-item"><Button theme="warning">Warning</Button></li>
      <li className="list-inline-item"><Button theme="info">Info</Button></li>
      <li className="list-inline-item"><Button theme="light">Light</Button></li>
      <li className="list-inline-item"><Button theme="dark">Dark</Button></li>
      <li className="list-inline-item"><Button theme="link">Link</Button></li>
    </ul>
    <p className="text-muted">
      Hover over and click on the buttons to see their <em>hovered</em> and <em>active</em> states.
    </p>
  </>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  const themeOpts = {
    'Primary (default)': 'primary',
    Secondary: 'secondary',
    Success: 'success',
    Danger: 'danger',
    Warning: 'warning',
    Info: 'info',
    Light: 'light',
    Dark: 'dark',
    Link: 'link',
  };

  const typeOpts = {
    Button: 'button',
    Submit: 'submit',
    Reset: 'reset',
  };

  return (
    <Button
      disabled={ boolean('Disabled', false) }
      theme={ select('Theme', themeOpts, 'info') }
      onClick={ action('clicked') }
      type={ select('Type', typeOpts, 'button') }
      classes={ text('Classes', 'foo bar') }
    >
      { text('Label', 'Hello Friend') }
    </Button>
  );
};
