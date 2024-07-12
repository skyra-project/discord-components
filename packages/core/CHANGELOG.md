# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0-alpha.21](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.20...v4.0.0-alpha.21) (2024-07-12)

### Bug Fixes

* **embed-description:** remove `white-space: pre-line` to make sure text stays on the same line ([1e9ea73](https://github.com/skyra-project/discord-components/commit/1e9ea73c1ce293d5952fc44b9780354e7797e187)) (@favna)
* **embed:** resolve the remaining todo, lit covers this functionality automatically yay ([12ed6b4](https://github.com/skyra-project/discord-components/commit/12ed6b4150672fb8195e94f5df129007c72bff8c)) (@favna)
* **file-attachment:** add attribute for bytesUnit ([c23f7d1](https://github.com/skyra-project/discord-components/commit/c23f7d1edeb6f7fd35d2c33e8e280a8cbe9f2b0c)) (@favna)
* **media:** add missing ARIA roles ([75a57db](https://github.com/skyra-project/discord-components/commit/75a57db29af32acfbb79ed5b6ed90c6b76a0493f)) (@favna)
* **tenor-video:** properly match discord gifs and restore autoplay on chromium browsers ([558b851](https://github.com/skyra-project/discord-components/commit/558b851b240613b334dd3186f7fc08cc6ca52533)) (@favna)

### Features

* add `discord-subscript` component ([e1b7db6](https://github.com/skyra-project/discord-components/commit/e1b7db6146685a82437018d815b868b5b59eeac3)) (@favna)
* add audio attachment component ([#411](https://github.com/skyra-project/discord-components/issues/411)) ([d970765](https://github.com/skyra-project/discord-components/commit/d970765b4929c8836c3af191f435b474794ad593)) (@favna)
* add video attachment component ([#413](https://github.com/skyra-project/discord-components/issues/413)) ([b308580](https://github.com/skyra-project/discord-components/commit/b3085802bc7407403bdec707266ea2a239eacfbc)) (@favna)
* **media:** add restart icon and functionality ([584a438](https://github.com/skyra-project/discord-components/commit/584a4383ac5a44a639a09e28bbd34cb1503d80ba)) (@favna)

# [4.0.0-alpha.20](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.19...v4.0.0-alpha.20) (2024-06-15)

### Bug Fixes

* **image-attachment:** fixed incorrect properties and add ifDefined directive ([c2ba255](https://github.com/skyra-project/discord-components/commit/c2ba255efda74065c754976a09973744d789facf)) (@favna)
* use slot for custom image element ([e373c3a](https://github.com/skyra-project/discord-components/commit/e373c3ac438457055f6abaccb98c4bab82c220fd)) (@favna)

### Features

* add file attachment support ([9e4bebd](https://github.com/skyra-project/discord-components/commit/9e4bebd50078ca2b0cc2a1fb1d6c6ae99da4065d)), closes [#258](https://github.com/skyra-project/discord-components/issues/258) (@favna)
* add support for custom image attachments ([dc95f8b](https://github.com/skyra-project/discord-components/commit/dc95f8b2c5726665d9d26180eb83dd89dedc5c88)), closes [#251](https://github.com/skyra-project/discord-components/issues/251) (@favna)

# [4.0.0-alpha.19](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.18...v4.0.0-alpha.19) (2024-06-15)

### Features

* **discord-message:** add `message-body-only` to allow for chained messages from same author ([0381bee](https://github.com/skyra-project/discord-components/commit/0381bee2dfa5b83fb8f9dc7e9c30423defe0bd2c)), closes [#407](https://github.com/skyra-project/discord-components/issues/407) (@favna)

# [4.0.0-alpha.18](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.17...v4.0.0-alpha.18) (2024-04-20)

### Bug Fixes

* change `bot` to `app` following Discord's change of the label ([#394](https://github.com/skyra-project/discord-components/issues/394)) ([ec034d3](https://github.com/skyra-project/discord-components/commit/ec034d3992977a62a2f85865c1e74a4e0dfcd512))
* **deps:** update all non-major dependencies ([77d3451](https://github.com/skyra-project/discord-components/commit/77d345176e30975c4ebed170f8367185e15797a1))
* fixed custom emojis mapping support for Nuxt 3 ([f11c074](https://github.com/skyra-project/discord-components/commit/f11c074adec983b6bc12ea7e81f5da44accc9c8d))
* fixed emojis in embeds and add support for Nuxt 3 ([7965fd3](https://github.com/skyra-project/discord-components/commit/7965fd3c6e7397b4fae4b4e3fe4666823160f1e9))

# [4.0.0-alpha.17](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.16...v4.0.0-alpha.17) (2024-02-18)

### Bug Fixes

* add list-style-image initial to discord-unordered-list ([0c9cd70](https://github.com/skyra-project/discord-components/commit/0c9cd7048fd9891dc9057b719bdd4fa6dfca5877))

### Features

* add `DiscordComponentsError` to signify errors ([b072bea](https://github.com/skyra-project/discord-components/commit/b072beabe04895b7a778724d94b60c7adce7de74))
* add discord-ordered-list ([42f8b49](https://github.com/skyra-project/discord-components/commit/42f8b4901a969a5c988db43974ffa0766a175577))
* add discord-unordered-list and discord-list-item ([71d483d](https://github.com/skyra-project/discord-components/commit/71d483d4bd4a1865c2c9b296a97a70797b3a4b27))

# [4.0.0-alpha.16](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.15...v4.0.0-alpha.16) (2024-02-17)

### Features

* add `deleted` property to `discord-reply` ([d5d4159](https://github.com/skyra-project/discord-components/commit/d5d4159fb088590f7d7bb4c0dead6e1d415aec23)), closes [#371](https://github.com/skyra-project/discord-components/issues/371)

# [4.0.0-alpha.15](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.14...v4.0.0-alpha.15) (2024-02-17)

### Bug Fixes

* **DiscordHeader:** ensure that the level property is a number ([a97a969](https://github.com/skyra-project/discord-components/commit/a97a969ab12aa3470a8d9d48c29493512813422a))

# [4.0.0-alpha.14](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.13...v4.0.0-alpha.14) (2024-02-11)

### Bug Fixes

* fixed import for util ([a4d3be7](https://github.com/skyra-project/discord-components/commit/a4d3be72c7a04720338afc2add04b6bc76eb6112))
* properly code config functions ([b537f97](https://github.com/skyra-project/discord-components/commit/b537f979c4399558fc81946f00870c08b4894b94))

# [4.0.0-alpha.13](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.12...v4.0.0-alpha.13) (2024-02-11)

### Features

* add `getConfig` and `setConfig` methods ([5a26c41](https://github.com/skyra-project/discord-components/commit/5a26c41de03fdc4c2e3434220fd9b2c69b131beb))

# [4.0.0-alpha.12](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.11...v4.0.0-alpha.12) (2024-02-10)

### Bug Fixes

* **code:** remove language class, it aint working chief ([325d188](https://github.com/skyra-project/discord-components/commit/325d1883e028d75482ff2e03341fc0013db53538))

# [4.0.0-alpha.11](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.10...v4.0.0-alpha.11) (2024-02-10)

### Bug Fixes

* only apply embed styling when required ([36b3b7a](https://github.com/skyra-project/discord-components/commit/36b3b7a267f265ebcc865a0efa032ac71a9fb1f0))

# [4.0.0-alpha.10](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.9...v4.0.0-alpha.10) (2024-02-10)

### Features

* **code:** add `language` property for multiline and add a PrismJS language class when set ([c72c9b8](https://github.com/skyra-project/discord-components/commit/c72c9b85c22519f2e1864ff3ea99f59b87141c3d))

# [4.0.0-alpha.9](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.8...v4.0.0-alpha.9) (2024-02-10)

### Bug Fixes

* **link:** remove `font-weight: normal` which prevents weight styled when nested ([caca673](https://github.com/skyra-project/discord-components/commit/caca67322b89ea6f8c23e2573797879da2f43dbd))

# [4.0.0-alpha.8](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.7...v4.0.0-alpha.8) (2024-02-10)

### Bug Fixes

* proper header styling ([d2ccc26](https://github.com/skyra-project/discord-components/commit/d2ccc268fd9c1110f5309bb5d13905ef4df217ee))

# [4.0.0-alpha.7](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.6...v4.0.0-alpha.7) (2024-02-10)

### Bug Fixes

* **button:** call checkType at render ([5ad7ecf](https://github.com/skyra-project/discord-components/commit/5ad7ecf74e24e90c2ed60a9c1af354e1ba327b7b))

### Features

* add discord-header component ([5552c6a](https://github.com/skyra-project/discord-components/commit/5552c6ad443c8250e43245d14537d0752864e609))

# [4.0.0-alpha.6](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.5...v4.0.0-alpha.6) (2024-02-03)

**Note:** Version bump only for package @skyra/discord-components-core

# [4.0.0-alpha.5](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.4...v4.0.0-alpha.5) (2024-02-03)

### Bug Fixes

* **core:** bump transitive dependencies ([366d06e](https://github.com/skyra-project/discord-components/commit/366d06e0b954e5647abb16e67fe840bf078cf1d8))

# [4.0.0-alpha.4](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.3...v4.0.0-alpha.4) (2024-01-28)

### Bug Fixes

* fix reflection and attribute binding of properties for the React bundle ([8512909](https://github.com/skyra-project/discord-components/commit/8512909868f00b5cbda06bd451102a4169e159b2))

# [4.0.0-alpha.3](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.2...v4.0.0-alpha.3) (2024-01-24)

### Bug Fixes

* fixed transitive dependencies ([8ffebe2](https://github.com/skyra-project/discord-components/commit/8ffebe2db78094ca9f461e62d8206bdb6318e756))

# [4.0.0-alpha.2](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2024-01-24)

**Note:** Version bump only for package @skyra/discord-components-core

# [4.0.0-alpha.1](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2024-01-23)

**Note:** Version bump only for package @skyra/discord-components-core

# [4.0.0-alpha.0](https://github.com/skyra-project/discord-components/compare/v3.6.1...v4.0.0-alpha.0) (2024-01-23)

* feat!: rewrite to lit (#367) ([8b31f45](https://github.com/skyra-project/discord-components/commit/8b31f455be0aba1f93e6ed2188a704448b624020)), closes [#367](https://github.com/skyra-project/discord-components/issues/367)

### BREAKING CHANGES

* This project has been rewritten from [StencilJS](https://stenciljs.com) to [Lit](https://lit.dev). See the [Upgrading to v4 document](https://github.com/skyra-project/discord-components/blob/main/packages/core/UPGRADING-TO-V4.md) for more details.

Co-authored-by: TheBv <bv939@web.de>

## [3.6.1](https://github.com/skyra-project/discord-components/compare/v3.6.0...v3.6.1) (2023-08-18)

### Bug Fixes

-   **core:** add types to export mapping ([b2e72d4](https://github.com/skyra-project/discord-components/commit/b2e72d4281f0b471ef8ffed0cc037dbb66522e18))
-   **deps:** update all non-major dependencies ([#318](https://github.com/skyra-project/discord-components/issues/318)) ([2c2f2f4](https://github.com/skyra-project/discord-components/commit/2c2f2f4a9e82949c20b34950ae1854752c6a709b))
-   **deps:** update all non-major dependencies ([#346](https://github.com/skyra-project/discord-components/issues/346)) ([9890111](https://github.com/skyra-project/discord-components/commit/989011165ff39e44bff44915cabc5622974b1b31))
-   **deps:** update all non-major dependencies ([#350](https://github.com/skyra-project/discord-components/issues/350)) ([2c3d827](https://github.com/skyra-project/discord-components/commit/2c3d827a9e39bf6419b0c074573a0923aa5c5eb4))
-   **deps:** update all non-major dependencies ([#352](https://github.com/skyra-project/discord-components/issues/352)) ([1674e2a](https://github.com/skyra-project/discord-components/commit/1674e2ad9275f4bea45cc4b3d60c8e9f3512ea95))
-   **deps:** update dependency @stencil/core to v3 ([#319](https://github.com/skyra-project/discord-components/issues/319)) ([2ed3e53](https://github.com/skyra-project/discord-components/commit/2ed3e53766b7827a9bdb75491a33392df283b381))

# [3.6.0](https://github.com/skyra-project/discord-components/compare/v3.5.0...v3.6.0) (2023-01-23)

### Bug Fixes

-   update @stencil/core dependency ([df07642](https://github.com/skyra-project/discord-components/commit/df07642b48debf1ecbc05cceaeafd5cfed081c9a))

### Features

-   add pin icon to system messages ([#317](https://github.com/skyra-project/discord-components/issues/317)) ([b34d635](https://github.com/skyra-project/discord-components/commit/b34d6357e02467ad4843a64591897e6b5ea99b22))

# [3.5.0](https://github.com/skyra-project/discord-components/compare/v3.4.1...v3.5.0) (2022-12-27)

### Bug Fixes

-   change to bunny font cdn and update font families ([10184ab](https://github.com/skyra-project/discord-components/commit/10184abd60de16977f9e88c595b93a44ac3521a4)), closes [#308](https://github.com/skyra-project/discord-components/issues/308)
-   **deps:** update all non-major dependencies ([#283](https://github.com/skyra-project/discord-components/issues/283)) ([8c225c4](https://github.com/skyra-project/discord-components/commit/8c225c4630b68d58f87d71250cc3aa984e623458))
-   **deps:** update all non-major dependencies ([#290](https://github.com/skyra-project/discord-components/issues/290)) ([185ef07](https://github.com/skyra-project/discord-components/commit/185ef075f614d00e3e5a0f6be375f28bd6496721))
-   **deps:** update all non-major dependencies ([#296](https://github.com/skyra-project/discord-components/issues/296)) ([58a4aa2](https://github.com/skyra-project/discord-components/commit/58a4aa2794d9241d85a7a071a3c46a74d0a3460f))
-   **deps:** update all non-major dependencies ([#302](https://github.com/skyra-project/discord-components/issues/302)) ([7642c51](https://github.com/skyra-project/discord-components/commit/7642c51868c557c0b8145cf26a040e726204a875))
-   **deps:** update all non-major dependencies ([#305](https://github.com/skyra-project/discord-components/issues/305)) ([68ae3f6](https://github.com/skyra-project/discord-components/commit/68ae3f63dc61e06f449805e4829e2eaa30e11541))
-   resolved typo in `ChannelForum` ([#289](https://github.com/skyra-project/discord-components/issues/289)) ([c30908d](https://github.com/skyra-project/discord-components/commit/c30908d5395561e0b77cfebaad7822c98ef8b0fe))

### Features

-   mention for slash commands ([#288](https://github.com/skyra-project/discord-components/issues/288)) ([294d0b5](https://github.com/skyra-project/discord-components/commit/294d0b5c926a96f0759bff5dfd703432cf6791d8))

## [3.4.1](https://github.com/skyra-project/discord-components/compare/v3.4.0...v3.4.1) (2022-08-06)

### Bug Fixes

-   **core:** enable `experimentalImportInjection` to ensure compatibility with Vite/NextJS builds ([053c8eb](https://github.com/skyra-project/discord-components/commit/053c8eb52ecf9cb763afd39441f11fdf81e76e21))
-   **deps:** update all non-major dependencies ([#271](https://github.com/skyra-project/discord-components/issues/271)) ([7896b9c](https://github.com/skyra-project/discord-components/commit/7896b9cfa081cbfa746bf9714db6cac31dfdc9bd))

# [3.4.0](https://github.com/skyra-project/discord-components/compare/v3.3.1...v3.4.0) (2022-05-10)

### Features

-   add forum mention icon ([#244](https://github.com/skyra-project/discord-components/issues/244)) ([eea0ee7](https://github.com/skyra-project/discord-components/commit/eea0ee70698637054f2685ea03179ad9a126f451))
-   add OP tag to profiles (+ author info style fixes) ([#245](https://github.com/skyra-project/discord-components/issues/245)) ([9206d4f](https://github.com/skyra-project/discord-components/commit/9206d4f5e7cca47a3f1c6df4e2854519ff3dada0))
-   add role icons ([#243](https://github.com/skyra-project/discord-components/issues/243)) ([b2a4dd0](https://github.com/skyra-project/discord-components/commit/b2a4dd077a49bfa8a032e13eeea9c871c5c3ebd4))

## [3.3.1](https://github.com/skyra-project/discord-components/compare/v3.3.0...v3.3.1) (2022-04-25)

### Bug Fixes

-   **core:** emit `[@vite-ignore](https://github.com/vite-ignore)` comments on dynamic imports ([ba84b9e](https://github.com/skyra-project/discord-components/commit/ba84b9ec4e8fe81ec452aba4c89b7b481b00ccaa))
-   **deps:** update all non-major dependencies ([#240](https://github.com/skyra-project/discord-components/issues/240)) ([e0e22fe](https://github.com/skyra-project/discord-components/commit/e0e22fe72158f1e9f92d61a5b04c58b7bf546de5))

# [3.3.0](https://github.com/skyra-project/discord-components/compare/v3.2.0...v3.3.0) (2022-04-06)

### Features

-   add `discord-time` component ([#229](https://github.com/skyra-project/discord-components/issues/229)) ([cdf0810](https://github.com/skyra-project/discord-components/commit/cdf08108e9a54e11c75e050ff176a42715aceb49))
-   add ephemeral messages and highlight fixes ([#230](https://github.com/skyra-project/discord-components/issues/230)) ([c5fc8f3](https://github.com/skyra-project/discord-components/commit/c5fc8f39bdecc54ad9daca1eb69115c9402e9da3))

# [3.2.0](https://github.com/skyra-project/discord-components/compare/v3.1.1...v3.2.0) (2022-04-04)

### Bug Fixes

-   **deps:** update all non-major dependencies ([#217](https://github.com/skyra-project/discord-components/issues/217)) ([3c391b6](https://github.com/skyra-project/discord-components/commit/3c391b68a28084ba514d9e5a8c3666fb7d456166))
-   **deps:** update all non-major dependencies ([#225](https://github.com/skyra-project/discord-components/issues/225)) ([87349f3](https://github.com/skyra-project/discord-components/commit/87349f3355c89c9c055ced1be7750f0251085132))

### Features

-   added multiple style specific components ([80ed132](https://github.com/skyra-project/discord-components/commit/80ed1326ea075cbe142cc8bc400d2f54a5bfaf30)), closes [#220](https://github.com/skyra-project/discord-components/issues/220)

## [3.1.1](https://github.com/skyra-project/discord-components/compare/v3.1.0...v3.1.1) (2022-03-10)

### Bug Fixes

-   bump `@stencil/core` dependency ([ecca4d8](https://github.com/skyra-project/discord-components/commit/ecca4d812ae371b57415c09fae7b5c8fa842700c))
-   **deps:** update all non-major dependencies ([#200](https://github.com/skyra-project/discord-components/issues/200)) ([c95dd81](https://github.com/skyra-project/discord-components/commit/c95dd81b03c042e695dd21db3c62c7137a4426f1))
-   **deps:** update all non-major dependencies ([#209](https://github.com/skyra-project/discord-components/issues/209)) ([2c0dd8a](https://github.com/skyra-project/discord-components/commit/2c0dd8a550ef78d23cf969597a3f08d7fb5c65ba))
-   match rebranded syles ([#216](https://github.com/skyra-project/discord-components/issues/216)) ([7ea32a9](https://github.com/skyra-project/discord-components/commit/7ea32a965557953416ad5f66ddbefed4a641c0fe))

# [3.1.0](https://github.com/skyra-project/discord-components/compare/v3.0.1...v3.1.0) (2022-01-12)

### Features

-   **discord-embed-description:** add styles for nested HTML tags ([#195](https://github.com/skyra-project/discord-components/issues/195)) ([6ee7b9f](https://github.com/skyra-project/discord-components/commit/6ee7b9ffea10cfb0ed82a5771b88017060f04711))

## [3.0.1](https://github.com/skyra-project/discord-components/compare/v3.0.0...v3.0.1) (2022-01-08)

**Note:** Version bump only for package @skyra/discord-components-core

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

### Bug Fixes

-   **deps:** update all non-major dependencies ([#184](https://github.com/skyra-project/discord-components/issues/184)) ([792e791](https://github.com/skyra-project/discord-components/commit/792e791bba008eacea279b7802da506e9fb64a68))

### Features

-   **discord-invite:** localization support for invite title and button ([#183](https://github.com/skyra-project/discord-components/issues/183)) ([8fd541b](https://github.com/skyra-project/discord-components/commit/8fd541b60b8157aae26748b5400b647753594578))

## [2.12.1](https://github.com/skyra-project/discord-components/compare/v2.12.0...v2.12.1) (2021-12-06)

### Bug Fixes

-   **deps:** update all non-major dependencies ([#177](https://github.com/skyra-project/discord-components/issues/177)) ([36a4c5d](https://github.com/skyra-project/discord-components/commit/36a4c5d871b08418ff96bcf471035bdb19f73598))
-   **discord-embed:** hide embed description when not provided ([f3f3302](https://github.com/skyra-project/discord-components/commit/f3f33029ca62f4517de8dfc3051855b36d8485db)), closes [#180](https://github.com/skyra-project/discord-components/issues/180)

# [2.12.0](https://github.com/skyra-project/discord-components/compare/v2.11.6...v2.12.0) (2021-11-13)

### Features

-   Add `discord-custom-emoji` component & custom emojis in embed titles ([#168](https://github.com/skyra-project/discord-components/issues/168)) ([61a808e](https://github.com/skyra-project/discord-components/commit/61a808e46f16d3ce9c7ea888e208cd1fcbe30e75)), closes [#163](https://github.com/skyra-project/discord-components/issues/163)

## [2.11.6](https://github.com/skyra-project/discord-components/compare/v2.11.5...v2.11.6) (2021-11-08)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.11.4](https://github.com/skyra-project/discord-components/compare/v2.11.3...v2.11.4) (2021-11-08)

### Bug Fixes

-   **docs:** update nextjs codesandbox link ([4d6382f](https://github.com/skyra-project/discord-components/commit/4d6382fe3538f85cd60ea8aa28e570023b536c98))

## [2.11.3](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.3...v2.11.3) (2021-11-08)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.11.3-alpha.3](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.2...v2.11.3-alpha.3) (2021-11-08)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.11.3-alpha.2](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.1...v2.11.3-alpha.2) (2021-11-08)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.11.3-alpha.1](https://github.com/skyra-project/discord-components/compare/v2.11.3-alpha.0...v2.11.3-alpha.1) (2021-11-08)

### Bug Fixes

-   debump required nodejs engine to 14.0.0 ([310f9bc](https://github.com/skyra-project/discord-components/commit/310f9bc6cdcafe6fd0d7267ffff70539b981b4be))

## [2.11.3-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.11.2...v2.11.3-alpha.0) (2021-11-08)

### Bug Fixes

-   **deps:** update all non-major dependencies ([#158](https://github.com/skyra-project/discord-components/issues/158)) ([069255e](https://github.com/skyra-project/discord-components/commit/069255edf3b42b7549cb8a5382fc8f8899a95ac2))
-   **deps:** update all non-major dependencies ([#166](https://github.com/skyra-project/discord-components/issues/166)) ([8d22036](https://github.com/skyra-project/discord-components/commit/8d22036549cca3f7eb2518ac14deda46902f5d55))

## [2.11.2](https://github.com/skyra-project/discord-components/compare/v2.11.1...v2.11.2) (2021-10-03)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.11.1](https://github.com/skyra-project/discord-components/compare/v2.11.0...v2.11.1) (2021-10-03)

**Note:** Version bump only for package @skyra/discord-components-core

# [2.11.0](https://github.com/skyra-project/discord-components/compare/v2.10.1-alpha.0...v2.11.0) (2021-10-02)

### Features

-   Thread Accessories ([#150](https://github.com/skyra-project/discord-components/issues/150)) ([232f05d](https://github.com/skyra-project/discord-components/commit/232f05d915fef41486150e2db43589e9fc11c742))
-   Use channel icons in mentions ([#151](https://github.com/skyra-project/discord-components/issues/151)) ([b3fe40d](https://github.com/skyra-project/discord-components/commit/b3fe40dfbfce68df531e38908d28efacb21cc61b))

## [2.10.1-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.10.0...v2.10.1-alpha.0) (2021-09-21)

**Note:** Version bump only for package @skyra/discord-components-core

# [2.10.0](https://github.com/skyra-project/discord-components/compare/v2.9.1...v2.10.0) (2021-09-12)

### Features

-   add `discord-tenor-video` component ([#127](https://github.com/skyra-project/discord-components/issues/127)) ([c90dde0](https://github.com/skyra-project/discord-components/commit/c90dde02c23b8c9d25c676249518c60daeaf5d58))

## [2.9.1](https://github.com/skyra-project/discord-components/compare/v2.9.1-alpha.0...v2.9.1) (2021-09-12)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.9.1-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.9.0...v2.9.1-alpha.0) (2021-09-10)

**Note:** Version bump only for package @skyra/discord-components-core

# [2.9.0](https://github.com/skyra-project/discord-components/compare/v2.8.1...v2.9.0) (2021-09-05)

### Features

-   **discord-mention:** add new thread type ([#117](https://github.com/skyra-project/discord-components/issues/117)) ([3719679](https://github.com/skyra-project/discord-components/commit/371967908b60421a67fd72ad3ad5ec4adab932a2))

## [2.8.1](https://github.com/skyra-project/discord-components/compare/v2.8.0...v2.8.1) (2021-08-18)

### Bug Fixes

-   **discord-command:** remove prepending slash in names ([#111](https://github.com/skyra-project/discord-components/issues/111)) ([c86a17e](https://github.com/skyra-project/discord-components/commit/c86a17ea3494fb050914bddbb385e375fea60876))

# [2.8.0](https://github.com/skyra-project/discord-components/compare/v2.7.1...v2.8.0) (2021-08-18)

### Bug Fixes

-   use proper URLs for discord avatars ([#108](https://github.com/skyra-project/discord-components/issues/108)) ([446cdf4](https://github.com/skyra-project/discord-components/commit/446cdf4863d7e027cd2f08c6b9600e07491cfae2))

### Features

-   add component buttons ([#110](https://github.com/skyra-project/discord-components/issues/110)) ([50f78c5](https://github.com/skyra-project/discord-components/commit/50f78c5643277164e791261f8a8af76a8d893015))

## [2.7.1](https://github.com/skyra-project/discord-components/compare/v2.7.0...v2.7.1) (2021-08-07)

**Note:** Version bump only for package @skyra/discord-components-core

# [2.7.0](https://github.com/skyra-project/discord-components/compare/v2.6.0...v2.7.0) (2021-08-07)

### Features

-   add system messages ([#105](https://github.com/skyra-project/discord-components/issues/105)) ([53440f4](https://github.com/skyra-project/discord-components/commit/53440f44cbe30d7458cc9e38f30c7636483b4a7a))

# [2.6.0](https://github.com/skyra-project/discord-components/compare/v2.5.0...v2.6.0) (2021-08-05)

### Bug Fixes

-   specify string union type for DiscordMention#type prop ([3b8204e](https://github.com/skyra-project/discord-components/commit/3b8204e11bdbe41b17bd2963f6afa11d6e903511))

### Features

-   add replies (+ style changes) ([#103](https://github.com/skyra-project/discord-components/issues/103)) ([065e452](https://github.com/skyra-project/discord-components/commit/065e452f9d0386dfd1b426793aca4c7f07c9c0ae))

# [2.5.0](https://github.com/skyra-project/discord-components/compare/v2.4.0...v2.5.0) (2021-08-04)

### Features

-   add locked type for mentions ([#102](https://github.com/skyra-project/discord-components/issues/102)) ([e70a5bb](https://github.com/skyra-project/discord-components/commit/e70a5bb242ed695352e5088f6434574dd3614678))

# [2.4.0](https://github.com/skyra-project/discord-components/compare/v2.3.0...v2.4.0) (2021-07-25)

### Features

-   add option to make reactions non-interactive ([b5f61b0](https://github.com/skyra-project/discord-components/commit/b5f61b07ffbd5d4e547b0e8324117ad582fc6295))

# [2.3.0](https://github.com/skyra-project/discord-components/compare/v2.2.0...v2.3.0) (2021-07-25)

### Features

-   add click event handler to reactions ([7686af8](https://github.com/skyra-project/discord-components/commit/7686af8653233b234315e3932e4e38c13448a6b9))
-   add reactions ([#96](https://github.com/skyra-project/discord-components/issues/96)) ([3bb19a6](https://github.com/skyra-project/discord-components/commit/3bb19a69912b9666f922c36eabe6fb959b4fc495))
-   add voice type to mentions ([#97](https://github.com/skyra-project/discord-components/issues/97)) ([9b9fcb2](https://github.com/skyra-project/discord-components/commit/9b9fcb298933405e287ded6b3df27a7f4a60c3ff))

# [2.2.0](https://github.com/skyra-project/discord-components/compare/v2.1.1...v2.2.0) (2021-07-22)

### Features

-   add invite and attachments container components ([#94](https://github.com/skyra-project/discord-components/issues/94)) ([3b782a0](https://github.com/skyra-project/discord-components/commit/3b782a0147a46ce8779bd7387786a07fdc94f5ac))

## [2.1.1](https://github.com/skyra-project/discord-components/compare/v2.1.0...v2.1.1) (2021-07-10)

### Bug Fixes

-   **readme:** update urls and add nextJS demo ([551f9e7](https://github.com/skyra-project/discord-components/commit/551f9e763a48b0854450054404476e6d641a77d3))

# [2.1.0](https://github.com/skyra-project/discord-components/compare/v2.0.9...v2.1.0) (2021-06-26)

### Features

-   add support for server crosspost webhook messages ([a02ec25](https://github.com/skyra-project/discord-components/commit/a02ec254f6804ea76282d081a674c838a87ef396)), closes [#88](https://github.com/skyra-project/discord-components/issues/88)

## [2.0.9](https://github.com/skyra-project/discord-components/compare/v2.0.8...v2.0.9) (2021-06-21)

### Bug Fixes

-   **css:** update to discord rebrand colors ([fe03134](https://github.com/skyra-project/discord-components/commit/fe031344284f0e1674813dfcbc9e43a33b1b78fd))

## [2.0.8](https://github.com/skyra-project/discord-components/compare/v2.0.7...v2.0.8) (2021-06-21)

### Bug Fixes

-   **docs:** add live demo for "No Framework" ([b58242f](https://github.com/skyra-project/discord-components/commit/b58242f39b7f3d316616c844ed922aa0c4834034))
-   **docs:** remove default font from ToC ([82a1281](https://github.com/skyra-project/discord-components/commit/82a1281e84c51287ad01282d399c1be530d8ab2d))

## [2.0.7](https://github.com/skyra-project/discord-components/compare/v2.0.7-alpha.0...v2.0.7) (2021-05-20)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.0.7-alpha.0](https://github.com/skyra-project/discord-components/compare/v2.0.6...v2.0.7-alpha.0) (2021-05-19)

### Bug Fixes

-   **core:** specify exports for loader ([b94604f](https://github.com/skyra-project/discord-components/commit/b94604f374ef2944786469401d1505888f6ccc05))

## [2.0.6](https://github.com/skyra-project/discord-components/compare/v2.0.5...v2.0.6) (2021-05-19)

### Bug Fixes

-   specify sideEffects and fix `es2015` and `es2017` file paths ([b759b3c](https://github.com/skyra-project/discord-components/commit/b759b3c4ca9e505b49592d4152f1b5ada4876cc5))

## [2.0.5](https://github.com/skyra-project/discord-components/compare/v2.0.4...v2.0.5) (2021-05-15)

### Bug Fixes

-   **core:** update mention colours to match Discord May 2021 redesign ([a7c7a84](https://github.com/skyra-project/discord-components/commit/a7c7a847082738aeb2405340e79a738ade3563db))

## [2.0.4](https://github.com/skyra-project/discord-components/compare/v2.0.3...v2.0.4) (2021-05-15)

### Bug Fixes

-   change links from discord-message-components to discord-components ([5a8e1e1](https://github.com/skyra-project/discord-components/commit/5a8e1e1e0b3a34020a91f0dae9464141195d8fab))

## [2.0.3](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.3...v2.0.3) (2021-05-15)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.0.3-alpha.3](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.2...v2.0.3-alpha.3) (2021-05-15)

**Note:** Version bump only for package @skyra/discord-components-core

## [2.0.3-alpha.2](https://github.com/skyra-project/discord-components/compare/v2.0.3-alpha.1...v2.0.3-alpha.2) (2021-05-15)

### Bug Fixes

-   **react:** include polyfills again ([43ca559](https://github.com/skyra-project/discord-components/commit/43ca5590416559b92a32fb6e9cd1a53c357322a2))

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
-   change lifecycle hooks to `componentWillRender` so props are recomputed on re-renders ([e19f9c3](https://github.com/skyra-project/discord-components/commit/e19f9c3345ee6e943b5d19e383bb4268d1cbc516))
-   fixed readmes and such ([bdb8846](https://github.com/skyra-project/discord-components/commit/bdb8846db2ded36567ef624ddddedf95f59e549b))

## [2.0.2](https://github.com/skyra-project/discord-components/compare/v2.0.1...v2.0.2) (2020-10-26)

**Note:** Version bump only for package @skyra/discord-components-core

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

**Note:** Version bump only for package @skyra/discord-components-core

# [1.0.0-alpha.1](https://github.com/skyra-project/discord-components/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2020-05-10)

**Note:** Version bump only for package @skyra/discord-components-core

# 1.0.0-alpha.0 (2020-05-10)

### Features

-   create packages ([1ad5856](https://github.com/skyra-project/discord-components/commit/1ad58560916d3988e8dffc58ad97a52828ff5d35))
