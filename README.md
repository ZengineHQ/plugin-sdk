# Zengine Plugin SDK

> Writing Zengine plugins?  We got you covered!

This is a monorepo containing various Zengine Plugin development related libraries.

## Available Packages

| Name  | Version |
| ------------- | ------------- |
| PostRPC Client  | [![npm version](https://img.shields.io/npm/v/@zenginehq/post-rpc-client.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/post-rpc-client)  |
| PostRPC Generator  | [![npm version](https://img.shields.io/npm/v/@zenginehq/post-rpc-generator.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/post-rpc-generator)  |
| PostRPC Server  | [![npm version](https://img.shields.io/npm/v/@zenginehq/post-rpc-server.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/post-rpc-server)  |
| Zengine SDK  | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-sdk.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-sdk)  |
| Zengine SDK React  | [![npm version](https://img.shields.io/npm/v/@zenginehq/react-sdk.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/react-sdk) |
| Zengine UI | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-ui.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-ui) |
| Zengine UI React | [![npm version](https://img.shields.io/npm/v/@zenginehq/zengine-ui-react.svg?color=brightgreen)](https://www.npmjs.com/package/@zenginehq/zengine-ui-react) |

## Development

- Install [Lerna](https://lerna.js.org/): `npm i -g lerna`
- Run dev script: `lerna run watch --parallel`

## Publishing packages

- First build all packages: `lerna run build`
- Publish! `lerna publish --message "chore: release"`
- Publish documentation: `lerna run docs:publish`

_Notes_
- Due to our [commitlint](https://github.com/conventional-changelog/commitlint) rules the default 
commit message for publishing fails, so we gotta override it... PRs welcome to overcome!
- Since the docs are a private package not on npm `lerna publish` ignores it so we do it ourselves


## Wishlist

- Install and configure Prettier for all packages
- If possible move ESLint and Prettier configs up to root level and propagate down
- Repeat above with shared node_modules stuff if possible
