# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0-alpha.38](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.37...v4.0.0-alpha.38) (2025-01-04)

### Bug Fixes

* **deps:** update all non-major dependencies ([#519](https://github.com/skyra-project/discord-components/issues/519)) ([32cb659](https://github.com/skyra-project/discord-components/commit/32cb6594cd1275d62ecc0bd0705ac21212a05b28)) (@renovate[bot])

# [4.0.0-alpha.37](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.36...v4.0.0-alpha.37) (2024-12-01)

### Bug Fixes

* **deps:** update all non-major dependencies ([#505](https://github.com/skyra-project/discord-components/issues/505)) ([00e646f](https://github.com/skyra-project/discord-components/commit/00e646f61c00ce1a12d872d49c5c92e1a9695bb3)) (@renovate[bot])
* **deps:** update all non-major dependencies ([#510](https://github.com/skyra-project/discord-components/issues/510)) ([f499bb7](https://github.com/skyra-project/discord-components/commit/f499bb714060012c9d7786c089413dc340417fd2)) (@renovate[bot])

# [4.0.0-alpha.36](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.35...v4.0.0-alpha.36) (2024-11-02)

### Features

* add polls ([#492](https://github.com/skyra-project/discord-components/issues/492)) ([61a1105](https://github.com/skyra-project/discord-components/commit/61a11055d8eb70795939d29299436af0c07c9f78)) (@eumarciel404)

# [4.0.0-alpha.35](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.34...v4.0.0-alpha.35) (2024-10-27)

### Bug Fixes

* **deps:** update all non-major dependencies ([bd0d80b](https://github.com/skyra-project/discord-components/commit/bd0d80b1a2fa66c7252871eeabfb134d742ab4f1)) (@renovate[bot])
* **deps:** update all non-major dependencies ([061f9f7](https://github.com/skyra-project/discord-components/commit/061f9f74234c32f3140b10e0a3a4d4b62b6e64d9)) (@renovate[bot])
* **deps:** update all non-major dependencies ([#480](https://github.com/skyra-project/discord-components/issues/480)) ([869647b](https://github.com/skyra-project/discord-components/commit/869647ba7662e848acc88ba1c669e64d93a3a38c)) (@renovate[bot])

# [4.0.0-alpha.34](https://github.com/skyra-project/discord-components/compare/v4.0.0-alpha.33...v4.0.0-alpha.34) (2024-08-29)

**Note:** Version bump only for package @skyra/discord-components-react

<div align="center">

# @skyra/discord-components-react

**React bindings for
[@skyra/discord-components-core](https://github.com/skyra-project/discord-components/tree/main/packages/core)**

<!-- # HEADER START # -->

**Web components to easily build and display fake Discord messages on your
webpages**

[![License](https://img.shields.io/github/license/skyra-project/discord-components?logo=github&maxAge=3600&style=flat-square)](https://github.com/skyra-project/discord-components/blob/main/LICENSE.md)
[![Patreon](https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon)](https://donate.skyra.pw/patreon)

_Core Package_

[![npm](https://img.shields.io/npm/v/@skyra/discord-components-core?color=crimson&logo=npm&style=flat-square&label=@skyra/discord-components-core)](https://www.npmjs.com/package/@skyra/discord-components-core)
[![npm](https://img.shields.io/npm/dt/@skyra/discord-components-core.svg?maxAge=3600&logo=npm)](https://www.npmjs.com/package/@skyra/discord-components-core)
[![npm](https://img.shields.io/bundlephobia/min/@skyra/discord-components-core?label=minified&logo=webpack&maxAge=3600)](https://bundlephobia.com/result?p=@skyra/discord-components-core)

_React Bindings_

[![npm](https://img.shields.io/npm/v/@skyra/discord-components-react?color=crimson&logo=npm&style=flat-square&label=@skyra/discord-components-react)](https://www.npmjs.com/package/@skyra/discord-components-react)
[![npm](https://img.shields.io/npm/dt/@skyra/discord-components-react.svg?maxAge=3600&logo=npm)](https://www.npmjs.com/package/@skyra/discord-components-react)
[![npm](https://img.shields.io/bundlephobia/min/@skyra/discord-components-react?label=minified&logo=webpack&maxAge=3600)](https://bundlephobia.com/result?p=@skyra/discord-components-react)

[![Support Server](https://discord.com/api/guilds/254360814063058944/embed.png?style=banner2)](https://join.skyra.pw)

<!-- # HEADER END # -->

</div>

---

**_Table of Contents_**

<!-- # TOC START # -->

- [@skyra/discord-components-react](#skyradiscord-components-react)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Important](#important)
    - [Using the Discord font](#using-the-discord-font)
    - [Vite](#vite)
      - [Live Demo](#live-demo)
    - [Create React App](#create-react-app)
      - [Important Notes](#important-notes)
    - [NextJS](#nextjs)
      - [Live Demo Pages Directory](#live-demo-pages-directory)
      - [Live Demo App Directory](#live-demo-app-directory)
      - [Known limitations](#known-limitations)
    - [Docusaurus](#docusaurus)
      - [Live Demo](#live-demo-1)
  - [Notes](#notes)
    - [TypeScript module augments](#typescript-module-augments)
    - [Avatar shortcuts](#avatar-shortcuts)
    - [Profile shortcuts](#profile-shortcuts)
    - [Theming](#theming)
    - [Components notes](#components-notes)
      - [DiscordMessages component](#discordmessages-component)
      - [DiscordMention component](#discordmention-component)
      - [DiscordEmbed component](#discordembed-component)
      - [EmbedFields component](#embedfields-component)
      - [EmbedField component](#embedfield-component)
  - [Screenshots](#screenshots)
    - [Dark Mode](#dark-mode)
    - [Light Mode](#light-mode)
  - [Contributors](#contributors)

<!-- # TOC END # -->

<!-- # DESCRIPTION START # -->

## Description

Discord message components to easily build and display fake Discord messages on
your webpage.

**This is an adaptation of [wc-discord-message] from [Danktuary]**

<!-- # DESCRIPTION END # -->

<!-- # FEATURES START # -->

## Features

- Design modelled after [Discord](https://discord.com/) itself
- Comfy and compact mode support
- Dark and light themes support
- Set the message author's username, avatar (use defaults or provide your own),
  role color, and "bot" tag status
- Display fake user, role, and channel mentions
- Complete embed support
- Uses [Lit Element][lit] to support all browsers and environments
- Simple syntax!

<!-- # FEATURES END # -->

## Installation

```bash
yarn add @skyra/discord-components-core @skyra/discord-components-react
# or npm install @skyra/discord-components-core @skyra/discord-components-react
```

<!-- # REACT_USAGE START # -->

## Usage

> [!IMPORTANT]
>
> For further examples on how to use components, please refer to the Stackblitz
> examples linked below. Choose the framework you are using and click on the
> "Open in Stackblitz" button to see the code and how it renders in the browser.

### Important

React is currently the only library among the "big" libraries for frontend
development that does not fully support custom elements / webcomponents yet (see
[this React documentation page for more info](https://react.dev/reference/react-dom/components#custom-html-elements)).
For this reason we ship the package `@skyra/discord-components-react`.

We sincerely hope that this situation will improve in the future, but no one
knows what their plans are.

### Using the Discord font

This library can use the Discord font if you load it into your project. You can
do so by including the CSS below:

```css
@font-face {
  font-family: 'Whitney';
  src: url('https://cdn.skyra.pw/whitney-font/v2/Book.woff') format('woff');
  font-weight: 400;
}

@font-face {
  font-family: 'Whitney';
  src: url('https://cdn.skyra.pw/whitney-font/v2/Medium.woff') format('woff');
  font-weight: 500;
}

@font-face {
  font-family: 'Whitney';
  src: url('https://cdn.skyra.pw/whitney-font/v2/Semibold.woff') format('woff');
  font-weight: 600;
}

@font-face {
  font-family: 'Whitney';
  src: url('https://cdn.skyra.pw/whitney-font/v2/Bold.woff') format('woff');
  font-weight: 700;
}
```

### Vite

#### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/react-vite-ts)

### Create React App

#### Important Notes

Create React App is no longer the recommended way to start with a React app as
per React's own documentation. We very strongly recommend using Vite instead.

### NextJS

#### Live Demo Pages Directory

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/nextjs-ts)

#### Live Demo App Directory

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/nextjs-app-directory-ts)

#### Known limitations

1. All the React components will only render on the client, they are bundled
   with the `'use client';` header that NextJS expects for CSR only components.
   This is because there is currently no good way to render webcomponents on the
   server. When
   [@lit-labs/nextjs](https://www.npmjs.com/package/@lit-labs/nextjs) adds
   [support for the app directory](https://github.com/lit/lit/issues/3657) we
   can revisit this limitation.

2. When using the app directory we are not able to get profiles working. We are
   open to suggestions on how to fix this, ideally through a pull request to
   [https://github.com/skyra-project/discord-components-implementations/tree/main/templates/nextjs-ts].

### Docusaurus

#### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/react-docusaurus-ts)

<!-- # REACT_USAGE END # -->

<!-- # REACT_NOTES START # -->

## Notes

### TypeScript module augments

This library uses a custom object on the browser `window` for configuration.
Under normal circumstances by simply importing the package (with
`import @skyra/discord-components-react`) the module augmentations should also
be loaded. If for whatever reason this does not happen, then you can define them
manually yourself. You can do so with the following code snippet:

```ts
import type { DiscordMessageOptions } from '@skyra/discord-components-react';

declare global {
  // eslint-disable-next-line no-var
  var $discordMessage: DiscordMessageOptions | undefined;
}
```

### Avatar shortcuts

The current avatar shortcut strings available are "blue" (default), "gray",
"green", "orange", and "red". These shortcuts map to the following image links:

```json
{
  "blue": "https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png",
  "gray": "https://cdn.discordapp.com/attachments/654503812593090602/665721746569166849/gray.png",
  "green": "https://cdn.discordapp.com/attachments/654503812593090602/665721748431306753/green.png",
  "orange": "https://cdn.discordapp.com/attachments/654503812593090602/665721750201434138/orange.png",
  "red": "https://cdn.discordapp.com/attachments/654503812593090602/665721752277483540/red.png"
}
```

If you want to add to or override the shortcuts, you can set them via
`globalThis.$discordMessage.avatars` or by using the `setConfig` function
(`import { setConfig } from '@skyra/discord-components-react'`).

```ts
globalThis.$discordMessage = {
  avatars: {
    default: 'blue',
    skyra: 'https://github.com/NM-EEA-Y.png',
    djs: require('./assets/discord-avatar-djs.png') // You can use require syntax as well
  }
};
```

```ts
import { setConfig } from '@skyra/discord-components-react';

setConfig({
  avatars: {
    default: 'blue',
    skyra: 'https://github.com/NM-EEA-Y.png',
    djs: require('./assets/discord-avatar-djs.png') // You can use require syntax as well
  }
});
```

### Profile shortcuts

Sometimes you'll want to use the same message data across multiple messages. You
can do so by providing an object of profiles in
`globalThis.$discordMessage.profiles` or by using the `setConfig` function
(`import { setConfig } from '@skyra/discord-components-react'`).

```ts
globalThis.$discordMessage = {
  profiles: {
    skyra: {
      author: 'Skyra',
      avatar: 'https://github.com/NM-EEA-Y.png',
      bot: true,
      verified: true,
      roleColor: '#1e88e5'
    },
    favna: {
      author: 'Favna',
      avatar: 'https://github.com/favna.png',
      roleColor: '#ff0000'
    }
  }
};
```

```ts
import { setConfig } from '@skyra/discord-components-react';

setConfig({
  profiles: {
    skyra: {
      author: 'Skyra',
      avatar: 'https://github.com/NM-EEA-Y.png',
      bot: true,
      verified: true,
      roleColor: '#1e88e5'
    },
    favna: {
      author: 'Favna',
      avatar: 'https://github.com/favna.png',
      roleColor: '#ff0000'
    }
  }
});
```

And then in your React code:

```tsx
<DiscordMessages>
  <DiscordMessage profile="skyra">
    Welcome to our server, <mention>Favna</mention>!
  </DiscordMessage>
  <DiscordMessage profile="favna">Hey, glad to be here!</DiscordMessage>
</DiscordMessages>
```

### Theming

Each of the components accepts the standard HTML properties for passing styling,
such as `className` for passing CSS classes (JSS / CSS / SCSS etc.) or `style`
to pass inline style.

You can also pass your own custom HTML tags, for example set a `data-qa` to be
able to navigate to the component in your unit tests / end-to-end tests

### Components notes

Below are notes for a few certain components. If you want to see what props each
component has, check their readme.md file in [the respective folder].

#### DiscordMessages component

This is a wrapper for any child `<DiscordMessage>` component. It must be used in
order for messages to display properly.

#### DiscordMention component

If the default slot is left empty, the mention will be rendered as `'User'`,
`'Role'`, or `'channel`', depending on the `type` prop given.

#### DiscordEmbed component

An embed that can be attached to the end of your messages. The default slot is
used for the embed's description. The `footer` slot is used for the footer text.

To ensure the embed gets displayed correctly inside your message, be sure to
give it the proper `slot` attribute.

```tsx
<DiscordMessage>
  Hi, I'm part of the normal message content.
  <DiscordEmbed slot="embeds" color="#0099ff">
    Hi, I'm part of the embed message content.
  </DiscordEmbed>
</DiscordMessage>
```

#### EmbedFields component

A wrapper for any child `<DiscordEmbedField>` components. Must be used in order
for fields to display properly. To ensure the embed fields gets displayed
correctly inside your embed, be sure to give it the proper `slot` attribute.

```tsx
<DiscordMessage>
  <DiscordEmbed slot="embeds">
    Hi, I'm part of the embed message content.
    <DiscordEmbedFields slot="fields">
      <!-- Embed fields go here -->
    </DiscordEmbedFields>
  </DiscordEmbed>
</DiscordMessage>
```

#### EmbedField component

At least 2 consecutive fields need to be marked as inline in order for them to
actually display next to each other. The maximum amount of inline fields is 3,
and drops to 2 if an embed thumbnail is used.

```tsx
<DiscordMessage>
  <DiscordEmbed slot="embeds">
    Hi, I'm part of the embed message content.
    <DiscordEmbedFields slot="fields">
      <DiscordEmbedField fieldTitle="Inline field" inline>
        Field content.
      </DiscordEmbedField>
      <DiscordEmbedField fieldTitle="Inline field" inline>
        Field content.
      </DiscordEmbedField>
    </DiscordEmbedFields>
  </DiscordEmbed>
</DiscordMessage>
```

<!-- # REACT_NOTES END # -->

<!-- # SCREENSHOTS START # -->

## Screenshots

### Dark Mode

**_A normal conversation_**

![](https://raw.githubusercontent.com/skyra-project/discord-components/main/assets/dark_mode/normal_conversation.png)

**_Compact mode_**

![](https://raw.githubusercontent.com/skyra-project/discord-components/main/assets/dark_mode/compact_mode.png)

**_With an embed_**

![](https://raw.githubusercontent.com/skyra-project/discord-components/main/assets/dark_mode/with_embed.png)

### Light Mode

**_A normal conversation_**

![](https://raw.githubusercontent.com/skyra-project/discord-components/main/assets/light_mode/normal_conversation.png)

**_Compact mode_**

![](https://raw.githubusercontent.com/skyra-project/discord-components/main/assets/light_mode/compact_mode.png)

**_With an embed_**

![](https://raw.githubusercontent.com/skyra-project/discord-components/main/assets/light_mode/with_embed.png)

<!-- # SCREENSHOTS END # -->

<!-- # CONTRIBUTING START # -->

## Contributors

Please make sure to read the [Contributing Guide][contributing] before making a
pull request.

Thank you to all the people who already contributed to Discord Components!

<a href="https://github.com/skyra-project/discord-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=skyra-project/discord-components" />
</a>

<!-- # CONTRIBUTING END # -->

[contributing]: ../../.github/CONTRIBUTING.md
[wc-discord-message]: https://github.com/Danktuary/wc-discord-message
[danktuary]: https://github.com/Danktuary
[the respective folder]:
  (https://github.com/skyra-project/discord-components/blob/main/packages/core/src/components/)
