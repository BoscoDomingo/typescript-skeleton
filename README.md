# TypeScript | Node.js Bootstrap (template)

This repository is intended to serve as a starting point if you want to bootstrap a quick TypeScript project, a basic local playground.

⚠️ It is meant for simple use cases where you don't need the extra complexity, just a barebones, simple Node.js app and the Node REPL isn't enough.

This has its shortcomings:
  - No proper DI framework/container/tool
  - No [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) structuring (I strongly suggest a Hexagonal Architecture + DDD approach)
    - Coupling of infrastructure and application layers unless you separate them yourself

If these issues don't matter for your intended use, or you know how to fix them, this will be a fast way to run a quick script or program.

If you're looking for a more scalable strategy, check out my friend @AlexHHPS and I's [TypeScript DDD template](https://github.com/AlexHHPS/typescript-ddd-hexagonal-ddd)
or if you want a simple API, check out my [TypeScript API Template](https://github.com/BoscoDomingo/typescript-api-skeleton)

---

## Features

- [TypeScript](https://www.typescriptlang.org/)
  - Find other `tsconfig.json` options [here](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Pure DI](https://blog.ploeh.dk/2014/06/10/pure-di/). If you prefer using containers, check out:
  - [tsyringe](https://github.com/microsoft/tsyringe)
  - [typescript-ioc](https://www.npmjs.com/package/typescript-ioc)
  - [TypeDI](https://github.com/typestack/typedi)
  - [NestJS](https://nestjs.com/)
  - [InversifyJS](https://inversify.io/)
  - [Awilix](https://github.com/jeffijoe/awilix)
  - If you prefer mocking dependencies (no DI) use [proxyquire](https://www.npmjs.com/package/proxyquire)
- [Biome](https://biomejs.dev/) for formatting and linting.
- [Node Test Runner](https://nodejs.org/api/test.html) for testing.
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and formatting+linting on push

## Local dev

You'll need to duplicate the `.env.example` file and rename it to `.env` and to `.env.test` first.

| Action               | Command      | Description                                      |
| -------------------- | ------------ | ------------------------------------------------ |
| Install dependencies | `pnpm i`     | Installs the necessary dependencies              |
| Compile              | `pnpm build` | Transpiles TS into JS                            |
| Run                  | `pnpm start` | Runs the compiled JS                             |
| Dev                  | `pnpm dev`   | Runs the TypeScript code and watches for changes |

## Testing (Node Test Runner)

| Action | Command     | Description        |
| ------ | ----------- | ------------------ |
| Test   | `pnpm test` | Runs all the tests |

## Formatting (Biome)
| Action | Command       | Description                             |
| ------ | ------------- | --------------------------------------- |
| Format | `pnpm format` | Ensures code follows style guides       |
| Lint   | `pnpm lint`   | Runs the linter and points out mistakes |