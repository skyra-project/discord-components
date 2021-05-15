# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.3-alpha.3](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.2...v2.0.3-alpha.3) (2021-05-15)

### Reverts

-   "chore: re-add prepublishOnly" ([3609469](https://github.com/skyra-project/discord-components/commit/360946963177a61e158b2082b648adab531f4e63))

## [2.0.3-alpha.2](https://github.com/skyra-project/discord-message-components/compare/v2.0.3-alpha.1...v2.0.3-alpha.2) (2021-05-15)

### Bug Fixes

-   **react:** include polyfills again ([43ca559](https://github.com/skyra-project/discord-message-components/commit/43ca5590416559b92a32fb6e9cd1a53c357322a2))

## [2.0.3-alpha.1](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.0...v2.0.3-alpha.1) (2021-05-15)

### Bug Fixes

-   fixed Avatar options ([2b97ca8](https://github.com/skyra-project/discord-components/commit/2b97ca80c89e64ad00ffb7f5660fbeed91bacf24))
-   fixed package bundling ([11d2627](https://github.com/skyra-project/discord-components/commit/11d2627bad707a1997e286a02b3004035dfdb306))
-   styling of components ([#72](https://github.com/skyra-project/discord-components/issues/72)) ([b440c2f](https://github.com/skyra-project/discord-components/commit/b440c2fd0b3c1411c0e96e68b0c599b1b95dfecd))

### Features

-   use whitney font as default font ([d7c9267](https://github.com/skyra-project/discord-components/commit/d7c9267a7680df5a3b8c7dbab5e14f673ada162b))

## [2.0.3-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.0.2...v2.0.3-alpha.0) (2021-03-20)

### Bug Fixes

-   **core:** export options on top level ([d128f13](https://github.com/skyra-project/discord-components/commit/d128f13b69a22f134ef89a5fbdd4ad9db94006d0))
-   **core:** use proper lifecycle for embed ([e17ddb9](https://github.com/skyra-project/discord-components/commit/e17ddb9f413b380cb668a7d6a8554c5df31e05ff))
-   **react:** move core from peer to regular dependencies ([8d1e3ff](https://github.com/skyra-project/discord-components/commit/8d1e3ff85a519b27f5590d9f01e98111de7695ae))
-   change lifecycle hooks to `componentWillRender` so props are recomputed on re-renders ([e19f9c3](https://github.com/skyra-project/discord-components/commit/e19f9c3345ee6e943b5d19e383bb4268d1cbc516))
-   fixed readmes and such ([bdb8846](https://github.com/skyra-project/discord-components/commit/bdb8846db2ded36567ef624ddddedf95f59e549b))

### Reverts

-   Revert "chore: run build for prepublishOnly" ([6b405bc](https://github.com/skyra-project/discord-components/commit/6b405bcb7cd386cd42981ff2946cca261742f73e))

## [2.0.2](https://github.com/skyra-project/discord-components/compare/v2.0.1...v2.0.2) (2020-10-26)

### Bug Fixes

-   **react:** allow peer dependency of React 17 and Core 2 ([ae5fb27](https://github.com/skyra-project/discord-components/commit/ae5fb278643f68714bc646697e97269686517eb3))

## [2.0.1](https://github.com/skyra-project/discord-components/compare/v2.0.0...v2.0.1) (2020-10-07)

### Bug Fixes

-   **core:** fixed date parsing for discord-embed ([515d243](https://github.com/skyra-project/discord-components/commit/515d243aa53b921dae523fb599bea9da4e419c07))

# [2.0.0](https://github.com/skyra-project/discord-components/compare/v1.3.0...v2.0.0) (2020-09-05)

### Features

-   bumped stencil-core to v2 ([59ef71e](https://github.com/skyra-project/discord-components/commit/59ef71e48ac786edb35b7c52523206104796a9f0)), closes [/github.com/ionic-team/stencil/blob/master/CHANGELOG.md#-200-2020-08-31](https://github.com//github.com/ionic-team/stencil/blob/master/CHANGELOG.md/issues/-200-2020-08-31) [#12](https://github.com/skyra-project/discord-components/issues/12)

### BREAKING CHANGES

-   IE11, Edge 16-18, Safari 10 and ES5 builds and support for them is fully removed
    now. Also some files are exported under different names in core. For a full list see

# [1.3.0](https://github.com/skyra-project/discord-components/compare/v1.2.2...v1.3.0) (2020-07-26)

### Features

-   rename master branch to main ([0bc3666](https://github.com/skyra-project/discord-components/commit/0bc36663a83ab55df4ebb96fc9c69d6809008934))

## [1.2.2](https://github.com/skyra-project/discord-components/compare/v1.2.1...v1.2.2) (2020-07-13)

### Bug Fixes

-   **core:** fixed layout of messages ([5def145](https://github.com/skyra-project/discord-components/commit/5def1450c0baae16eedd17fdec5e63f93b16f0f3))

## [1.2.1](https://github.com/skyra-project/discord-components/compare/v1.2.0...v1.2.1) (2020-07-08)

### Bug Fixes

-   **attachments:** remove width/height modifier size ([4aea4bd](https://github.com/skyra-project/discord-components/commit/4aea4bdbb8aca01fae90a3a1f8aa5caa50df3ae6))

# [1.2.0](https://github.com/skyra-project/discord-components/compare/v1.1.4...v1.2.0) (2020-07-07)

### Bug Fixes

-   update highlighted mention styling ([98e4827](https://github.com/skyra-project/discord-components/commit/98e4827f9829b6d0b8d30a78337a40e3d44c9fb5))
-   **embed-field:** set title to white to match Discord revert ([2e6007f](https://github.com/skyra-project/discord-components/commit/2e6007fb724edf389a63a534936d1ed528d1fd6c))

### Features

-   **core:** add discord-attachment component ([adef9b1](https://github.com/skyra-project/discord-components/commit/adef9b121c0ba7061374cbe389560706aa07c76a))

## [1.1.4](https://github.com/skyra-project/discord-components/compare/v1.1.3...v1.1.4) (2020-07-06)

### Bug Fixes

-   **core:** fixed that lib didn't load when not defining window.\$discordMessage ([64293a6](https://github.com/skyra-project/discord-components/commit/64293a6f63ccf3c78f3c8086a0d13d8335d784e1))

## [1.1.3](https://github.com/skyra-project/discord-components/compare/v1.1.2...v1.1.3) (2020-07-06)

### Bug Fixes

-   fixed the unpkg/jsdelivr builds ([d863049](https://github.com/skyra-project/discord-components/commit/d86304962a384f5e7a792fb67db826a389ba6aa5))

## [1.1.2](https://github.com/skyra-project/discord-components/compare/v1.1.1...v1.1.2) (2020-06-27)

### Bug Fixes

-   bump package, regenerate react output ([07af3cc](https://github.com/skyra-project/discord-components/commit/07af3cc4e3ab3df728c4ed91341af2e7a5db3239))

## [1.1.1](https://github.com/skyra-project/discord-components/compare/v1.1.0...v1.1.1) (2020-06-06)

### Bug Fixes

-   bump packages, fixing some stenciljs bugs ([2ac34a9](https://github.com/skyra-project/discord-components/commit/2ac34a9abca911e1abffc9671cb75cb24357335a))

# [1.1.0](https://github.com/skyra-project/discord-components/compare/v1.0.1...v1.1.0) (2020-05-19)

### Bug Fixes

-   **core:** fixed parsing of global profile ([8b31278](https://github.com/skyra-project/discord-components/commit/8b3127857e4bdd0a835e27bd1412f9cbb619b31f))

### Features

-   **core:** allow 3-aside inline embed fields ([ec05f33](https://github.com/skyra-project/discord-components/commit/ec05f3372b8c7b590bf0c2d3526f53b3bd2aec98)), closes [#3](https://github.com/skyra-project/discord-components/issues/3)
-   **embed:** embedding videos ([1678248](https://github.com/skyra-project/discord-components/commit/1678248ffe7413bb6e66437f03fed0d15b135e4e)), closes [#1](https://github.com/skyra-project/discord-components/issues/1)
-   **embed:** provider option ([bf23e66](https://github.com/skyra-project/discord-components/commit/bf23e666555035b80625bccd00f49dfd622f80f9)), closes [#2](https://github.com/skyra-project/discord-components/issues/2)

## [1.0.1](https://github.com/skyra-project/discord-components/compare/v1.0.0...v1.0.1) (2020-05-10)

### Bug Fixes

-   **mention:** fixed discord mentions rendering type ([d94a092](https://github.com/skyra-project/discord-components/commit/d94a092f2e9b4c2cd6b4362e14105f7dfb54b6d9))
-   **message:** add hover background to match Discord ([d2c8f32](https://github.com/skyra-project/discord-components/commit/d2c8f32d5f73eb9d65ac091427628d6c705af6b2))

# [1.0.0](https://github.com/skyra-project/discord-components/compare/v1.0.0-alpha.1...v1.0.0) (2020-05-10)

**Note:** Version bump only for package root

# [1.0.0-alpha.1](https://github.com/skyra-project/discord-components/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2020-05-10)

**Note:** Version bump only for package root

# 1.0.0-alpha.0 (2020-05-10)

### Features

-   create packages ([1ad5856](https://github.com/skyra-project/discord-components/commit/1ad58560916d3988e8dffc58ad97a52828ff5d35))
