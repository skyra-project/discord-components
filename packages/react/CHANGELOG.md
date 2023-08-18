# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.6.1](https://github.com/skyra-project/discord-components/compare/v3.6.0...v3.6.1) (2023-08-18)

### Bug Fixes

-   **deps:** update all non-major dependencies ([#318](https://github.com/skyra-project/discord-components/issues/318)) ([2c2f2f4](https://github.com/skyra-project/discord-components/commit/2c2f2f4a9e82949c20b34950ae1854752c6a709b))
-   **deps:** update all non-major dependencies ([#352](https://github.com/skyra-project/discord-components/issues/352)) ([1674e2a](https://github.com/skyra-project/discord-components/commit/1674e2ad9275f4bea45cc4b3d60c8e9f3512ea95))
-   **react:** add types to export mapping ([bba1772](https://github.com/skyra-project/discord-components/commit/bba17727447104fcb01757afd1912c2ad630ac8b))
-   update generated react code ([1d3161b](https://github.com/skyra-project/discord-components/commit/1d3161bf6a436ed9a6c63c953189a208d29c5717))

# [3.6.0](https://github.com/skyra-project/discord-components/compare/v3.5.0...v3.6.0) (2023-01-23)

### Bug Fixes

-   update @stencil/core dependency ([df07642](https://github.com/skyra-project/discord-components/commit/df07642b48debf1ecbc05cceaeafd5cfed081c9a))

# [3.5.0](https://github.com/skyra-project/discord-components/compare/v3.4.1...v3.5.0) (2022-12-27)

**Note:** Version bump only for package @skyra/discord-components-react

## [3.4.1](https://github.com/skyra-project/discord-components/compare/v3.4.0...v3.4.1) (2022-08-06)

**Note:** Version bump only for package @skyra/discord-components-react

# [3.4.0](https://github.com/skyra-project/discord-components/compare/v3.3.1...v3.4.0) (2022-05-10)

**Note:** Version bump only for package @skyra/discord-components-react

## [3.3.1](https://github.com/skyra-project/discord-components/compare/v3.3.0...v3.3.1) (2022-04-25)

### Bug Fixes

-   **core:** emit `[@vite-ignore](https://github.com/vite-ignore)` comments on dynamic imports ([ba84b9e](https://github.com/skyra-project/discord-components/commit/ba84b9ec4e8fe81ec452aba4c89b7b481b00ccaa))
-   **deps:** update all non-major dependencies ([#240](https://github.com/skyra-project/discord-components/issues/240)) ([e0e22fe](https://github.com/skyra-project/discord-components/commit/e0e22fe72158f1e9f92d61a5b04c58b7bf546de5))

# [3.3.0](https://github.com/skyra-project/discord-components/compare/v3.2.0...v3.3.0) (2022-04-06)

### Features

-   add `discord-time` component ([#229](https://github.com/skyra-project/discord-components/issues/229)) ([cdf0810](https://github.com/skyra-project/discord-components/commit/cdf08108e9a54e11c75e050ff176a42715aceb49))

# [3.2.0](https://github.com/skyra-project/discord-components/compare/v3.1.1...v3.2.0) (2022-04-04)

### Features

-   add new components to react bundle ([3055336](https://github.com/skyra-project/discord-components/commit/3055336043d0e80c106f13ca05377759383ec36a))

## [3.1.1](https://github.com/skyra-project/discord-components/compare/v3.1.0...v3.1.1) (2022-03-10)

### Bug Fixes

-   rebuild react code ([e1d3766](https://github.com/skyra-project/discord-components/commit/e1d3766a1179ea70d41920ccf34786b27e96b6a7))

# [3.1.0](https://github.com/skyra-project/discord-components/compare/v3.0.1...v3.1.0) (2022-01-12)

**Note:** Version bump only for package @skyra/discord-components-react

## [3.0.1](https://github.com/skyra-project/discord-components/compare/v3.0.0...v3.0.1) (2022-01-08)

### Bug Fixes

-   **react:** use createElement named import for better compatibility with Vite ([1d770da](https://github.com/skyra-project/discord-components/commit/1d770daa291ce9222428d228ed7a7f8f9fad6ee8))

# [3.0.0](https://github.com/skyra-project/discord-components/compare/v2.13.0...v3.0.0) (2022-01-08)

### Bug Fixes

-   fixed embed description and footer disappearing when dynamically editing title ([bdec29c](https://github.com/skyra-project/discord-components/commit/bdec29c1999969a2ea0cf1198d3eb1986a80d674))

### BREAKING CHANGES

-   `discord-embed` no longer takes the properties `footer-image` and `timestamp`, they are moved to the `discord-embed-footer` component.
-   The embed description now has to go into its own component, `discord-embed-description`

```diff
<discord-embed slot="embeds">
-  Custom emojis in the embed description:
+  <discord-embed-description slot="description">Custom emojis in the embed description:</discord-embed-description>
</discord-embed>
```

-   The embed footer now has to go into its own component, `discord-embed-footer`

```diff
- <discord-embed slot="embeds" footer-image="/static/sapphire.png" timestamp="03/20/2021">
+ <discord-embed slot="embeds">
{ /* other embed components */ }
-  <span slot="footer">Open source libraries to aid in the creation of Discord bots</span>
+  <discord-embed-footer slot="footer" footer-image="/static/sapphire.png" timestamp="03/20/2021">
+    Open source libraries to aid in the creation of Discord bots
+  </discord-embed-footer>
</discord-embed>
```

# [2.13.0](https://github.com/skyra-project/discord-components/compare/v2.12.1...v2.13.0) (2021-12-22)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.12.1](https://github.com/skyra-project/discord-components/compare/v2.12.0...v2.12.1) (2021-12-06)

**Note:** Version bump only for package @skyra/discord-components-react

# [2.12.0](https://github.com/skyra-project/discord-components/compare/v2.11.6...v2.12.0) (2021-11-13)

### Features

-   Add `discord-custom-emoji` component & custom emojis in embed titles ([#168](https://github.com/skyra-project/discord-components/issues/168)) ([61a808e](https://github.com/skyra-project/discord-components/commit/61a808e46f16d3ce9c7ea888e208cd1fcbe30e75)), closes [#163](https://github.com/skyra-project/discord-components/issues/163)

## [2.11.6](https://github.com/skyra-project/discord-components/compare/v2.11.5...v2.11.6) (2021-11-08)

### Bug Fixes

-   **react:** fix ESM loading ([8a43f53](https://github.com/skyra-project/discord-components/commit/8a43f5367b48d086bdd46c52d393547bc6209170))

## [2.11.5](https://github.com/skyra-project/discord-components/compare/v2.11.4...v2.11.5) (2021-11-08)

### Bug Fixes

-   **react:** only output ESM bundle ([cf9da04](https://github.com/skyra-project/discord-components/commit/cf9da04318fc5013f8637f01bd4c733b617ad074))

## [2.11.4](https://github.com/skyra-project/discord-components/compare/v2.11.3...v2.11.4) (2021-11-08)

### Bug Fixes

-   **docs:** update nextjs codesandbox link ([4d6382f](https://github.com/skyra-project/discord-components/commit/4d6382fe3538f85cd60ea8aa28e570023b536c98))

## [2.11.3](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.3...v2.11.3) (2021-11-08)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.11.3-alpha.3](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.2...v2.11.3-alpha.3) (2021-11-08)

### Bug Fixes

-   **react:** add dependency on tslib ([cc0b85e](https://github.com/skyra-project/discord-components/commit/cc0b85e23434611302bc1494aa2a76273912f6d1))

## [2.11.3-alpha.2](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.1...v2.11.3-alpha.2) (2021-11-08)

### Bug Fixes

-   **react:** no longer use esbuild for bundling ([d03ed4d](https://github.com/skyra-project/discord-components/commit/d03ed4d170493380d724d24268b195c1f4e4d71d))

## [2.11.3-alpha.1](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.0...v2.11.3-alpha.1) (2021-11-08)

### Bug Fixes

-   debump required nodejs engine to 14.0.0 ([310f9bc](https://github.com/skyra-project/discord-components/commit/310f9bc6cdcafe6fd0d7267ffff70539b981b4be))

## [2.11.3-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.11.2...v2.11.3-alpha.0) (2021-11-08)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.11.2](https://github.com/skyra-project/discord-components/compare/v2.11.1...v2.11.2) (2021-10-03)

### Bug Fixes

-   re-fix react bundle. The output file _has_ to be mjs for this to all work ([946652b](https://github.com/skyra-project/discord-components/commit/946652bb6166e1cf06c681e3fb410ef92975914b))

### Reverts

-   Revert "fix(react): fixed output targets" ([129f14f](https://github.com/skyra-project/discord-components/commit/129f14f8aa2f335a7b37f2d2f068ea87623fce49))

## [2.11.1](https://github.com/skyra-project/discord-components/compare/v2.11.0...v2.11.1) (2021-10-03)

### Bug Fixes

-   **react:** fixed output targets ([ba9faf1](https://github.com/skyra-project/discord-components/commit/ba9faf1ba0c04e89eba3e15341879cbc7dd65369))

# [2.11.0](https://github.com/skyra-project/discord-components/compare/v2.10.1-alpha.0...v2.11.0) (2021-10-02)

### Features

-   Thread Accessories ([#150](https://github.com/skyra-project/discord-components/issues/150)) ([232f05d](https://github.com/skyra-project/discord-components/commit/232f05d915fef41486150e2db43589e9fc11c742))

## [2.10.1-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.10.0...v2.10.1-alpha.0) (2021-09-21)

### Bug Fixes

-   output react bundle as `.js` to fix a Webpack issue, not loading named imports of `.mjs` files ([bc166f6](https://github.com/skyra-project/discord-components/commit/bc166f6c80b1b0b491144c179bf1a1cc30b6d1b5))

# [2.10.0](https://github.com/skyra-project/discord-components/compare/v2.9.1...v2.10.0) (2021-09-12)

### Features

-   add `discord-tenor-video` component ([#127](https://github.com/skyra-project/discord-components/issues/127)) ([c90dde0](https://github.com/skyra-project/discord-components/commit/c90dde02c23b8c9d25c676249518c60daeaf5d58))

## [2.9.1](https://github.com/skyra-project/discord-components/compare/v2.9.1-alpha.0...v2.9.1) (2021-09-12)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.9.1-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.9.0...v2.9.1-alpha.0) (2021-09-10)

**Note:** Version bump only for package @skyra/discord-components-react

# [2.9.0](https://github.com/skyra-project/discord-components/compare/v2.8.1...v2.9.0) (2021-09-05)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.8.1](https://github.com/skyra-project/discord-components/compare/v2.8.0...v2.8.1) (2021-08-18)

**Note:** Version bump only for package @skyra/discord-components-react

# [2.8.0](https://github.com/skyra-project/discord-components/compare/v2.7.1...v2.8.0) (2021-08-18)

### Features

-   add component buttons ([#110](https://github.com/skyra-project/discord-components/issues/110)) ([50f78c5](https://github.com/skyra-project/discord-components/commit/50f78c5643277164e791261f8a8af76a8d893015))

## [2.7.1](https://github.com/skyra-project/discord-components/compare/v2.7.0...v2.7.1) (2021-08-07)

### Bug Fixes

-   **react:** minify build output ([932aaf8](https://github.com/skyra-project/discord-components/commit/932aaf875afb493c818487fd07f8c642e3935a02))

# [2.7.0](https://github.com/skyra-project/discord-components/compare/v2.6.0...v2.7.0) (2021-08-07)

### Features

-   add system messages ([#105](https://github.com/skyra-project/discord-components/issues/105)) ([53440f4](https://github.com/skyra-project/discord-components/commit/53440f44cbe30d7458cc9e38f30c7636483b4a7a))

# [2.6.0](https://github.com/skyra-project/discord-components/compare/v2.5.0...v2.6.0) (2021-08-05)

### Features

-   add replies (+ style changes) ([#103](https://github.com/skyra-project/discord-components/issues/103)) ([065e452](https://github.com/skyra-project/discord-components/commit/065e452f9d0386dfd1b426793aca4c7f07c9c0ae))

# [2.5.0](https://github.com/skyra-project/discord-components/compare/v2.4.0...v2.5.0) (2021-08-04)

**Note:** Version bump only for package @skyra/discord-components-react

# [2.4.0](https://github.com/skyra-project/discord-components/compare/v2.3.0...v2.4.0) (2021-07-25)

**Note:** Version bump only for package @skyra/discord-components-react

# [2.3.0](https://github.com/skyra-project/discord-components/compare/v2.2.0...v2.3.0) (2021-07-25)

### Features

-   add reactions ([#96](https://github.com/skyra-project/discord-components/issues/96)) ([3bb19a6](https://github.com/skyra-project/discord-components/commit/3bb19a69912b9666f922c36eabe6fb959b4fc495))

# [2.2.0](https://github.com/skyra-project/discord-components/compare/v2.1.1...v2.2.0) (2021-07-22)

### Features

-   add invite and attachments container components ([#94](https://github.com/skyra-project/discord-components/issues/94)) ([3b782a0](https://github.com/skyra-project/discord-components/commit/3b782a0147a46ce8779bd7387786a07fdc94f5ac))

## [2.1.1](https://github.com/skyra-project/discord-components/compare/v2.1.0...v2.1.1) (2021-07-10)

### Bug Fixes

-   **readme:** update urls and add nextJS demo ([551f9e7](https://github.com/skyra-project/discord-components/commit/551f9e763a48b0854450054404476e6d641a77d3))

# [2.1.0](https://github.com/skyra-project/discord-components/compare/v2.0.9...v2.1.0) (2021-06-26)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.0.9](https://github.com/skyra-project/discord-components/compare/v2.0.8...v2.0.9) (2021-06-21)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.0.8](https://github.com/skyra-project/discord-components/compare/v2.0.7...v2.0.8) (2021-06-21)

### Bug Fixes

-   **docs:** remove default font from ToC ([82a1281](https://github.com/skyra-project/discord-components/commit/82a1281e84c51287ad01282d399c1be530d8ab2d))

## [2.0.6](https://github.com/skyra-project/discord-components/compare/v2.0.5...v2.0.6) (2021-05-19)

### Bug Fixes

-   specify sideEffects and fix `es2015` and `es2017` file paths ([b759b3c](https://github.com/skyra-project/discord-components/commit/b759b3c4ca9e505b49592d4152f1b5ada4876cc5))

## [2.0.5](https://github.com/skyra-project/discord-components/compare/v2.0.4...v2.0.5) (2021-05-15)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.0.4](https://github.com/skyra-project/discord-components/compare/v2.0.3...v2.0.4) (2021-05-15)

### Bug Fixes

-   change links from discord-message-components to discord-components ([5a8e1e1](https://github.com/skyra-project/discord-components/commit/5a8e1e1e0b3a34020a91f0dae9464141195d8fab))

## [2.0.3](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.3...v2.0.3) (2021-05-15)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.0.3-alpha.3](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.2...v2.0.3-alpha.3) (2021-05-15)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.0.3-alpha.2](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.1...v2.0.3-alpha.2) (2021-05-15)

**Note:** Version bump only for package @skyra/discord-components-react

## [2.0.3-alpha.1](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.0...v2.0.3-alpha.1) (2021-05-15)

### Bug Fixes

-   fixed package bundling ([11d2627](https://github.com/skyra-project/discord-components/commit/11d2627bad707a1997e286a02b3004035dfdb306))

### Features

-   use whitney font as default font ([d7c9267](https://github.com/skyra-project/discord-components/commit/d7c9267a7680df5a3b8c7dbab5e14f673ada162b))

## [2.0.3-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.0.2...v2.0.3-alpha.0) (2021-03-20)

### Bug Fixes

-   **react:** move core from peer to regular dependencies ([8d1e3ff](https://github.com/skyra-project/discord-components/commit/8d1e3ff85a519b27f5590d9f01e98111de7695ae))
-   fixed readmes and such ([bdb8846](https://github.com/skyra-project/discord-components/commit/bdb8846db2ded36567ef624ddddedf95f59e549b))

## [2.0.2](https://github.com/skyra-project/discord-components/compare/v2.0.1...v2.0.2) (2020-10-26)

### Bug Fixes

-   **react:** allow peer dependency of React 17 and Core 2 ([ae5fb27](https://github.com/skyra-project/discord-components/commit/ae5fb278643f68714bc646697e97269686517eb3))

## [2.0.1](https://github.com/skyra-project/discord-components/compare/v2.0.0...v2.0.1) (2020-10-07)

**Note:** Version bump only for package @skyra/discord-components-react

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

**Note:** Version bump only for package @skyra/discord-components-react

## [1.2.1](https://github.com/skyra-project/discord-components/compare/v1.2.0...v1.2.1) (2020-07-08)

**Note:** Version bump only for package @skyra/discord-components-react

# [1.2.0](https://github.com/skyra-project/discord-components/compare/v1.1.4...v1.2.0) (2020-07-07)

**Note:** Version bump only for package @skyra/discord-components-react

## [1.1.4](https://github.com/skyra-project/discord-components/compare/v1.1.3...v1.1.4) (2020-07-06)

**Note:** Version bump only for package @skyra/discord-components-react

## [1.1.3](https://github.com/skyra-project/discord-components/compare/v1.1.2...v1.1.3) (2020-07-06)

**Note:** Version bump only for package @skyra/discord-components-react

## [1.1.2](https://github.com/skyra-project/discord-components/compare/v1.1.1...v1.1.2) (2020-06-27)

### Bug Fixes

-   bump package, regenerate react output ([07af3cc](https://github.com/skyra-project/discord-components/commit/07af3cc4e3ab3df728c4ed91341af2e7a5db3239))

## [1.1.1](https://github.com/skyra-project/discord-components/compare/v1.1.0...v1.1.1) (2020-06-06)

### Bug Fixes

-   bump packages, fixing some stenciljs bugs ([2ac34a9](https://github.com/skyra-project/discord-components/commit/2ac34a9abca911e1abffc9671cb75cb24357335a))

# [1.1.0](https://github.com/skyra-project/discord-components/compare/v1.0.1...v1.1.0) (2020-05-19)

**Note:** Version bump only for package @skyra/discord-components-react

## [1.0.1](https://github.com/skyra-project/discord-components/compare/v1.0.0...v1.0.1) (2020-05-10)

**Note:** Version bump only for package @skyra/discord-components-react

# [1.0.0](https://github.com/skyra-project/discord-components/compare/v1.0.0-alpha.1...v1.0.0) (2020-05-10)

**Note:** Version bump only for package @skyra/discord-components-react

# [1.0.0-alpha.1](https://github.com/skyra-project/discord-components/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2020-05-10)

**Note:** Version bump only for package @skyra/discord-components-react

# 1.0.0-alpha.0 (2020-05-10)

### Features

-   create packages ([1ad5856](https://github.com/skyra-project/discord-components/commit/1ad58560916d3988e8dffc58ad97a52828ff5d35))
