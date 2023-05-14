<div align="center">

# Discord Components

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

- [Discord Components](#discord-components)
  - [Description](#description)
  - [Features](#features)
  - [Usage](#usage)
    - [Using the Discord font](#using-the-discord-font)
    - [Framework Integration](#framework-integration)
      - [Angular](#angular)
        - [Live Demo](#live-demo)
        - [Including the Custom Element Schema](#including-the-custom-element-schema)
        - [Including the web-components](#including-the-web-components)
      - [React](#react)
        - [Vite](#vite)
          - [Live Demo](#live-demo-1)
        - [Create React App](#create-react-app)
          - [Live Demo](#live-demo-2)
        - [NextJS](#nextjs)
          - [Important Notes](#important-notes)
        - [Live Demo](#live-demo-3)
        - [Sample code](#sample-code)
      - [Vue](#vue)
        - [Vite](#vite-1)
          - [Live Demo](#live-demo-4)
          - [Configuration](#configuration)
        - [Nuxt](#nuxt)
          - [Live Demo](#live-demo-5)
          - [Sample Code](#sample-code)
      - [No Framework](#no-framework)
        - [Live Demo](#live-demo-6)
        - [Sample Code](#sample-code-1)
  - [Notes](#notes)
    - [TypeScript module augments](#typescript-module-augments)
    - [Avatar shortcuts](#avatar-shortcuts)
    - [Profile shortcuts](#profile-shortcuts)
    - [Theming](#theming)
    - [Components notes](#components-notes)
      - [discord-messages component](#discord-messages-component)
      - [discord-mention component](#discord-mention-component)
      - [discord-embed component](#discord-embed-component)
      - [discord-embed-fields component](#discord-embed-fields-component)
      - [discord-embed-field component](#discord-embed-field-component)
  - [Screenshots](#screenshots)
    - [Dark Mode](#dark-mode)
    - [Light Mode](#light-mode)
  - [Contributors](#contributors)

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

<!-- # CORE_USAGE START # -->

## Usage

The syntax is kept fairly simple. Here's a basic example of a regular
conversation:

```html
<discord-messages>
  <discord-message
    >Hey guys, I'm new here! Glad to be able to join you all!</discord-message
  >
  <discord-message author="Dawn" avatar="red">
    Hi, I'm new here too!
  </discord-message>
  <discord-message
    author="Favna"
    avatar="https://github.com/favna.png"
    roleColor="#ff0000"
  >
    Hey, <discord-mention>User</discord-mention> and
    <discord-mention>Dawn</discord-mention>. Welcome to our server!
  </discord-message>
</discord-messages>
```

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

### Framework Integration

#### Angular

##### Live Demo

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-angular-0xz0z)

##### Including the Custom Element Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web
components in the HTML markup without the compiler producing errors. This code
should be added into the `AppModule` and in every other modules that use your
custom elements. Here is an example of adding it to `AppModule`:

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom
elements.

##### Including the web-components

Once you have defined the `CUSTOM_ELEMENTS_SCHEMA` you can include the
webcomponents in your components. Here is a simple example:

```ts
import { Component } from '@angular/core';

// Import the webcomponents that will be used in this file
import '@skyra/discord-components-core/discord-messages';
import '@skyra/discord-components-core/discord-message';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

#### React

##### Vite

###### Live Demo

<!-- TODO: Insert React Vite live demo -->

##### Create React App

###### Live Demo

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-create-react-app-64k90)

##### NextJS

###### Important Notes

When using this library with NextJS you _have_ to install the
[@lit-labs/nextjs ](https://www.npmjs.com/package/@lit-labs/nextjs) package.
Without this package your SSR rendering will fail! A stackblitz (provided by the
Lit team) showing how to use this package can be found
[here](https://stackblitz.com/edit/nextjs-lit-ssr?file=next.config.js)

##### Live Demo

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-nextjs-ovqfu)

##### Sample code

See [@skyra/discord-components-react](packages/react/README.md#sample-code)

#### Vue

##### Vite

###### Live Demo

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-vue-g1w48)

###### Configuration

When using Vue 3 with Vite you need to setup Vite to recognise the custom
components. You can do that with the following code in your `vite.config.ts`:

```ts
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const regex = /^discord-/;

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tell Vite to ignore all components defined in the @skyra/discord-components-core package.
          isCustomElement: (tag) => regex.test(tag)
        }
      }
    })
  ]
});
```

##### Nuxt

###### Live Demo

<!-- TODO: Insert Nuxt live demo -->

###### Sample Code

<!-- TODO: Insert Nuxt sample code -->

#### No Framework

##### Live Demo

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-static-nhwkl)

##### Sample Code

If you're want to use the browser build, you can pull it in via unpkg.

```html
<script
  type="module"
  src="https://unpkg.com/@skyra/discord-components-core"
></script>
```

<!-- # CORE_USAGE END # -->

<!-- # CORE_NOTES START # -->

## Notes

### TypeScript module augments

This module uses a custom object on the browser `window` for configuration.
Under normal circumstances by simply importing the package (with
`import @skyra/discord-components-core`) the module augmentations should also be
loaded. If for whatever reason this does not happen, then you can define them
manually yourself. You can do so with the following code snippet:

```ts
import type { DiscordMessageOptions } from '@skyra/discord-components-core';

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
`window.$discordMessage.avatars`.

```ts
window.$discordMessage = {
  avatars: {
    default: 'blue',
    skyra: 'https://github.com/NM-EEA-Y.png',
    djs: require('./assets/discord-avatar-djs.png') // You can use require syntax as well
  }
};
```

### Profile shortcuts

Sometimes you'll want to use the same message data across multiple messages. You
can do so by providing an object of profiles in
`window.$discordMessage.profiles`.

```ts
window.$discordMessage = {
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

And then in your React code:

```tsx
<discord-messages>
  <discord-message profile="skyra">
    Welcome to our server, <discord-mention>Favna</discord-mention>!
  </discord-message>
  <discord-message profile="favna">Hey, glad to be here!</discord-message>
</discord-messages>
```

### Theming

Each of the components accepts the standard HTML properties for passing styling,
such as `class` for passing CSS classes (JSS / CSS / SCSS etc.) or `style` to
pass inline style.

You can also pass your own custom HTML tags, for example set a `data-testid` to
be able to navigate to the component in your unit tests / end-to-end tests

### Components notes

Below are notes for a few specific components.

#### discord-messages component

This is a wrapper for any child `<discord-message>` component. It must be used
in order for messages to display properly.

#### discord-mention component

1. If the default slot is left empty, the mention will be rendered as `'User'`,
   `'Role'`, or `'channel`', depending on the `type` prop given.

2. If you want to customize the color of a `role` type mention then you can pass
   the color as a **hex** code in the `style` property. For example:

```html
<discord-message>
  <discord-mention type="role" style="--discord-mention-color: #70f0b4;"
    >Green</discord-mention
  >
  <discord-mention type="role" style="--discord-mention-color: #ff0000;"
    >Red</discord-mention
  >
</discord-message>
```

#### discord-embed component

An embed that can be attached to the end of your messages. The default slot is
used for the embed's description. The `footer` slot is used for the footer text.

To ensure the embed gets displayed correctly inside your message, be sure to
give it the proper `slot` attribute.

```html
<discord-message>
  Hi, I'm part of the normal message content.
  <discord-embed slot="embeds" color="#ff0000">
    Hi, I'm part of the embed message content.
  </discord-embed>
</discord-message>
```

#### discord-embed-fields component

A wrapper for any child `<discord-embed-fields>` components. Must be used in
order for fields to display properly. To ensure the embed fields gets displayed
correctly inside your embed, be sure to give it the proper `slot` attribute.

```html
<discord-message>
  <discord-embed slot="embeds">
    Hi, I'm part of the embed message content.
    <discord-embed-fields slot="fields">
      <!-- Embed fields go here -->
    </discord-embed-fields>
  </discord-embed>
</discord-message>
```

#### discord-embed-field component

At least 2 consecutive fields need to be marked as inline in order for them to
actually display next to each other. The maximum amount of inline fields is 3,
and drops to 2 if an embed thumbnail is used.

```html
<discord-message>
  <discord-embed slot="embeds">
    Hi, I'm part of the embed message content.
    <discord-embed-fields slot="fields">
      <discord-embed-field fieldTitle="Inline field" inline>
        Field content.
      </discord-embed-field>
      <discord-embed-field fieldTitle="Inline field" inline>
        Field content.
      </discord-embed-field>
    </discord-embed-fields>
  </discord-embed>
</discord-message>
```

<!-- # CORE_NOTES END # -->

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

[contributing]: .github/CONTRIBUTING.md
[wc-discord-message]: https://github.com/Danktuary/wc-discord-message
[danktuary]: https://github.com/Danktuary
