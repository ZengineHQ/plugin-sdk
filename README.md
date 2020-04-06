# Zengine Plugin SDK

> Writing Zengine plugins?  We got you covered!

This is a monorepo containing various Zengine Plugin development related libraries.

## Available Packages

| Name  | Version |
| ------------- | ------------- |
| PostRPC Client  | [![npm version](https://img.shields.io/npm/v/@zenginehq/post-rpc-client.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/post-rpc-client)  |
| PostRPC Server  | [![npm version](https://img.shields.io/npm/v/@zenginehq/post-rpc-server.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/post-rpc-server)  |
| Zengine SDK  | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-sdk.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-sdk)  |
| Zengine SDK React  | [![npm version](https://img.shields.io/npm/v/@zenginehq/react-sdk.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/react-sdk) |
| Zengine UI | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-ui.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-ui) |
| Zengine UI React | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-ui-react.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-ui-react) |

## Documentation

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://zenginehq.github.io/plugin-sdk)

## Development

- Install [Lerna](https://lerna.js.org/): `npm i -g lerna`
- Bootstrap the repo: `npm i && lerna bootstrap && lerna run build`
- Run dev script: `lerna run watch --parallel`

## Publishing

After any code or docs change has been made, publish to npm and/or the documentation site with these commands. Lerna will take care of intelligently determining what changed and where to publish it. You need only occasionally determine the semver bump (Lerna usually gets that right too though).

- First build all packages: `lerna run build`
- Publish! `lerna publish --message "chore: release"` (see note)

_Notes_
- Due to our [commitlint](https://github.com/conventional-changelog/commitlint) rules the default 
commit message for publishing fails, so this valid message argument is required.


## Wishlist

- Install and configure Prettier for all packages
- If possible move ESLint and Prettier configs up to root level and propagate down
- Repeat above with shared node_modules stuff if possible
