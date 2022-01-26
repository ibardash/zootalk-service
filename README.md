# Zootalk Service

A service built for demonstration of a chat app backend developed using GraphQL and Apollo.

Demonstration is prepared for Lexicon Digital Tech Guild.

> ⚠️ **Warning**: This is not an example of production-ready service.

## Table of contents

- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Code Formatting](#code-formatting)
  - [Testing](#testing)
- [Building and running the project](#building-and-running-the-project)

## Development

### Prerequisites

To build and run the project you might need to install the following tools:

- Node - [Installation Instructions](https://nodejs.org/en/download/package-manager/)
- Yarn - [Installation Instructions](https://classic.yarnpkg.com/en/docs/install)
- Docker - [Installation Instructions](https://docs.docker.com/engine/install/)

### Installation

```sh
yarn install
```

### Code Formatting

To check if code style and formatting is correct, run:

```
yarn lint
```

To fix auto-fixable problems, run:

```
yarn format
```

### Testing

To run all tests use the command below. Use optional `:watch` flag to run test in the watch mode.

```sh
yarn test
yarn test:watch
```

## Building and running the project

To start the development server locally with hot reloading on code changes run the command below. The server listens on http://localhost:4000 by default. To change the port, configure `PORT` environment variable.

```
yarn serve
```

To start the development server locally in Docker, run:

```
yarn start
```
