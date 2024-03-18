jsapi (Node.js Cli)
=================

# The fastest way to learn the Javascript APIs with examples.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [The fastest way to learn the Javascript APIs with examples.](#the-fastest-way-to-learn-the-javascript-apis-with-examples)
* [Installation](#installation)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Installation
```sh-session
$ npm install -g @saihtun/jsapi
```

# Usage
<!-- usage -->
```sh-session
$ npm install -g @saihtun/jsapi
$ jsapi COMMAND
running command...
$ jsapi (--version)
@saihtun/jsapi/1.0.8 darwin-arm64 node-v21.6.2
$ jsapi --help [COMMAND]
USAGE
  $ jsapi COMMAND
...
```
<!-- usagestop -->
![Jsapi Cli gif](./src/assets/as.gif)


# Commands
<!-- commands -->
* [`jsapi help [COMMANDS]`](#jsapi-help-commands)
* [`jsapi plugins`](#jsapi-plugins)
* [`jsapi plugins:install PLUGIN...`](#jsapi-pluginsinstall-plugin)
* [`jsapi plugins:inspect PLUGIN...`](#jsapi-pluginsinspect-plugin)
* [`jsapi plugins:install PLUGIN...`](#jsapi-pluginsinstall-plugin-1)
* [`jsapi plugins:link PLUGIN`](#jsapi-pluginslink-plugin)
* [`jsapi plugins:uninstall PLUGIN...`](#jsapi-pluginsuninstall-plugin)
* [`jsapi plugins:uninstall PLUGIN...`](#jsapi-pluginsuninstall-plugin-1)
* [`jsapi plugins:uninstall PLUGIN...`](#jsapi-pluginsuninstall-plugin-2)
* [`jsapi plugins update`](#jsapi-plugins-update)
* [`jsapi <command> [flags]`](#jsapi-command-flags)

## `jsapi help [COMMANDS]`

Display help for jsapi.

```
USAGE
  $ jsapi help [COMMANDS...] [-n]

ARGUMENTS
  COMMANDS...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jsapi.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `jsapi plugins`

List installed plugins.

```
USAGE
  $ jsapi plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jsapi plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `jsapi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jsapi plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ jsapi plugins add

EXAMPLES
  $ jsapi plugins:install myplugin 

  $ jsapi plugins:install https://github.com/someuser/someplugin

  $ jsapi plugins:install someuser/someplugin
```

## `jsapi plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jsapi plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jsapi plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/inspect.ts)_

## `jsapi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jsapi plugins install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ jsapi plugins add

EXAMPLES
  $ jsapi plugins:install myplugin 

  $ jsapi plugins:install https://github.com/someuser/someplugin

  $ jsapi plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/install.ts)_

## `jsapi plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jsapi plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ jsapi plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/link.ts)_

## `jsapi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jsapi plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jsapi plugins unlink
  $ jsapi plugins remove
```

## `jsapi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jsapi plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jsapi plugins unlink
  $ jsapi plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/uninstall.ts)_

## `jsapi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jsapi plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jsapi plugins unlink
  $ jsapi plugins remove
```

## `jsapi plugins update`

Update installed plugins.

```
USAGE
  $ jsapi plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/update.ts)_

## `jsapi <command> [flags]`

search JavaScript prototype methods quickly 🚀

```
USAGE
  $ jsapi search <command> [flags]
  $ jsapi search <command> --help
  $ jsapi search <command> --version

FLAGS
  -n, --name=<value>  Specify Javascript method name
  -t, --type=<value>  Specify Javascript object type

DESCRIPTION
  search JavaScript prototype methods quickly 🚀

EXAMPLES
  $ jsapi search -t array -n filter

  $ jsapi search -t string -n split

  $ jsapi search ⤵  Prompting interactive shell
```

_See code: [src/commands/search/index.ts](https://github.com/SaiHtun/jsapi/blob/v1.0.8/src/commands/search/index.ts)_
<!-- commandsstop -->


**Motivation:**

* reading the code examples to learn how the API works are way faster than browsing a bunch of texts.
* For Javascript's beginners by a beginner.
* This is my very first opensource project. Hence, I'm super excited to received some feedbacks and potential PR from you all! 🔥

**Features:**

* Interactive shell propmt will walk you through to find the respected API.

**Inspiration**:

* You would see the blue and yellow colors within the code examples. Yeah you are right! that's the colors from Ukraine's flag. 🇺🇦 ☮️

**Build with**:

* node.js, typescript, oclif, cheerio, enquirer, chalk
