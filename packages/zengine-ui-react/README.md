# Zengine UI React

> Atomic design Components for Zengine Plugins built in React.

## Installation

```
npm i @zenginehq/zengine-ui @zenginehq/zengine-ui-react
```

## Running Storybook

```
npm run storybook 
```
## Publishing Changes
```
npm postpublish
```

## Usage

#### Add Font Awesome Icons
In index.html or equivalent:
```
<script src="https://kit.fontawesome.com/0cf0825a47.js" crossorigin="anonymous"></script>
```

#### Import and Use
In your component.js file:
```
// Add styles. In the future this might be available on a CDN, for now include it locally.
import '@zenginehq/zengine-ui/style.css';

// Use components.
import { Button, TextField, NumberField, Form } from '@zenginehq/zengine-ui-react';
// Tree-shaking friendly imports also available.
import Button from '@zenginehq/zengine-ui-react/lib/atoms/Button';

function MyComponent() {
    const myCallback = values => {
        console.warn('submitted values', values);
    };

    return (
        <Form onSubmit={myCallback}>
            <TextField name="firstName" label="First Name" required />
            <NumberField name="age" label="Age" required />
        </Form>
    );
}
```

For more information see the Storybook.

## Explanation of NPM scripts

- `storybook`: starts the local dev version of the Storybook
- `test`: starts the Jest interactive test runner
- `test:save`: runs tests in CI mode (non-interactive just run all tests once) and logs output to a file
- `test:cover`: runs tests in CI mode (see test:save) and generates code a coverage report (only considers `api` folder)
- `storybook:build`: runs tests to generate the log output and builds the Storybook
- `storybook:publish`: deploys the Storybook to Github Pages
- `build`: builds the redistributable output for Zengine UI React; this is what people will get when they `npm install` this in their projects
- `build:js`: helper script to build JS artifacts, gets called by `npm run build`
- `build:css`: helper script to build CSS artifacts, gets called by `npm run build`
- 'postpublish': 'test build and publish all in one command'

## Directory Structure Guide

- `.cache` is an internal directory used by React, ignore it
- `.storybook` contains Storybook configuration
- `lib` is where the generated package code goes when `npm run build` is executed; this directory won't exist unless you've run the command
- `public` contains static assets to be served with the Storybook
- `src` contains the actual Zengine UI React source code
- `storybook-static` is where the generated Storybook code when `npm run build-storybook` is executed; this directory won't exist unless you've run the command
