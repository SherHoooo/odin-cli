# odin-cli [![Build Status](https://img.shields.io/circleci/project/odinjs/odin-cli/master.svg)](https://circleci.com/gh/odinjs/odin-cli) [![npm package](https://img.shields.io/npm/v/odin-cli.svg)](https://www.npmjs.com/package/odin-cli)

A simple CLI for scaffolding odin.js projects.

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g shark-odin
```

### Usage

``` bash
$ odin gen <template-name> <project-name>
```

Example:

``` bash
$ odin gen webpack my-project
```

The above command pulls the template from [odinjs-templates/webpack](https://github.com/odinjs-templates/webpack), prompts for some information, and generates the project at `./my-project/`.

### License

[MIT](http://opensource.org/licenses/MIT)
