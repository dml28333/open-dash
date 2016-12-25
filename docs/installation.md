
# Installation

OpenDash is built with [Meteor](https://meteor.com) and requires [Node.js](https://nodejs.org/) (v4 or higher). See the instructions for your operating system below.

- [macOS](#macos)
- [Linux](#linux)
- [Windows](#windows)

## macOS

**Node.js**

<https://nodejs.org/>

**Meteor**

```sh
curl https://install.meteor.com/ | sh
```

**Build Tools**

Install [Xcode](https://developer.apple.com/xcode/downloads/), then run `xcode-select --install`

**Homebrew**

```sh
# http://brew.sh/

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Git**

```sh
brew install git
```

## Linux

**Node.js**

<https://nodejs.org/>

**Build Tools**

```sh
# Ubuntu/Debian

apt-get update

apt-get install -y --no-install-recommends build-essential bzip2 curl ca-certificates git python
```

**Meteor**

```sh
curl https://install.meteor.com/ | sh
```

## Windows

**Node.js**

<https://nodejs.org/>

**Windows Build Tools 2015**

(requires admin priveledges to install, open a command prompt as an Administrator)

```sh
# https://github.com/felixrieseberg/windows-build-tools

npm install -g windows-build-tools
```

**Git**

<https://github.com/git-for-windows/git/releases>

**Meteor**

<https://www.meteor.com/install>
