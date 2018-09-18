# NEM Library code examples

[![npm version](https://badge.fury.io/js/nem-library.svg)](https://badge.fury.io/js/nem-library)
[![Gitter chat](https://badges.gitter.im/nem-library-ts/Lobby.svg)](https://gitter.im/nem-library-ts/)

This repository aims to help developers to learn about [NEM Library][nem-library] concepts with
working use cases.

## Clone this repository

```sh
$> git clone git@github.com:aleixmorgadas/nem-library-examples.git
```

## Install packages and compile the source code

```sh
$> npm install
$> tsc
```

## How to run an example

The examples are placed inside the `concepts` folder and they end with the `.ts` extension.
To run an example, you need to compile first the TypeScript files running `tsc` (TypeScript Compiler).

Then, you are able to run the samples with `node`. Example:

```sh
$> tsc
$> node concepts/account/AccountHttpExample.js
```

Where `AcountHttpExample.js` is the specific example that you want to run.

[nem-library]: https://aleixmorgadas.github.io/nem-library-docs/