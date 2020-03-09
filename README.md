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
