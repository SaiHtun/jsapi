jsapi (Node.js Cli)
=================

# The fastest way to learn the Javascript API with examples.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [The fastest way to learn the Javascript API with examples.](#The-fastest-way-to-learn-the-javascript-api-with-examples)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @saihtun/jsapi
$ jsapi COMMAND
running command...
$ jsapi (--version)
@saihtun/jsapi/1.0.3 darwin-x64 node-v14.16.1
$ jsapi --help [COMMAND]
USAGE
  $ jsapi COMMAND
EXAMPLES
  $ jsapi search -t <JS object type> -n <JS prototype method name>
...
```
<!-- usagestop -->
![Jsapi Cli gif](./src/assets/as.gif)


# Commands
<!-- commands -->
* [`jsapi <command> [flags]`](#jsapi-command-flags)
* [`jsapi help [COMMAND]`](#jsapi-help-command)
* [`jsapi plugins`](#jsapi-plugins)
* [`jsapi plugins:inspect PLUGIN...`](#jsapi-pluginsinspect-plugin)
* [`jsapi plugins:install PLUGIN...`](#jsapi-pluginsinstall-plugin)
* [`jsapi plugins:link PLUGIN`](#jsapi-pluginslink-plugin)
* [`jsapi plugins:uninstall PLUGIN...`](#jsapi-pluginsuninstall-plugin)
* [`jsapi plugins update`](#jsapi-plugins-update)

## `jsapi <command> [flags]`

search JavaScript prototype methods quickly 🚀

```
USAGE
  $ jsapi <command> [flags]
  $ jsapi <command> --help
  $ jsapi <command> --version

FLAGS
  -t, --type=<value>  Specify Javascript object type
  -n, --name=<value>  Specify Javascript method name

DESCRIPTION
  search JavaScript prototype methods quickly 🚀

EXAMPLES
  $ jsapi search -t array -n filter

  $ jsapi search -t string -n split

  $ jsapi search ⤵  Prompting interactive shell
```

_See code: [dist/commands/search/index.ts](https://github.com/SaiHtun/jsapi/blob/main/src/commands/search/index.ts)_
## `jsapi search --help`

Display help for jsapi.

```
USAGE
  $ jsapi search help 
  $ jsapi [COMMAND] [-n] --help

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jsapi.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `jsapi plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jsapi plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jsapi plugins:inspect myplugin
```

## `jsapi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jsapi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

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

## `jsapi plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jsapi plugins:link PLUGIN

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

## `jsapi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jsapi plugins:uninstall PLUGIN...

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
