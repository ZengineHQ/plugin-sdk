# Zengine Plugin SDK

> Writing Zengine plugins?  We got you covered!

This is a monorepo containing various Zengine Plugin development related libraries.


## Development

Install [Lerna](https://lerna.js.org/):

`npm i -g lerna`


## Publishing packages

- First build all packages: `lerna run build`
- Publish! `lerna publish --message "chore: release"`

_Note_: Due to our [commitlint](https://github.com/conventional-changelog/commitlint) rules the default 
commit message for publishing fails so we gotta override it... PRs welcome to overcome


## Wishlist

- Install and configure Prettier for all packages
- If possible move ESLint and Prettier configs up to root level and propagate down
- Repeat above with shared node_modules stuff if possible

### Available Packages

| Name  | Version |
| ------------- | ------------- |
| Zengine SDK  | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-sdk.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-sdk)  |
| Zengine SDK React  | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-sdk-react.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-sdk-react) |
| Zengine UI | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-ui.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-ui) |
| Zengine UI React | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-ui-react.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-ui-react) |
