<div align="center">

# Discord Components

**Fake Discord messages for the web**

[![License](https://img.shields.io/github/license/skyra-project/discord-components?logo=github&maxAge=3600&style=flat-square)](https://github.com/skyra-project/discord-components/blob/main/LICENSE.md)
[![Patreon](https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon)](https://donate.skyra.pw/patreon)

[![npm](https://img.shields.io/npm/v/@skyra/discord-components-core?color=crimson&logo=npm&style=flat-square&label=@skyra/discord-components-core)](https://www.npmjs.com/package/@skyra/discord-components-core)
[![npm](https://img.shields.io/npm/v/@skyra/discord-components-react?color=crimson&logo=npm&style=flat-square&label=@skyra/discord-components-react)](https://www.npmjs.com/package/@skyra/discord-components-react)

[![Support Server](https://discord.com/api/guilds/254360814063058944/embed.png?style=banner2)](https://join.skyra.pw)

</div>

---

**_Table of Contents_**

- [Discord Components](#discord-components)
  - [Description](#description)
  - [Features](#features)
  - [Using the Discord font](#using-the-discord-font)
  - [Demos](#demos)
    - [Angular](#angular)
    - [React](#react)
    - [Vue](#vue)
    - [No Framework](#no-framework)
  - [Screenshots](#screenshots)
    - [Dark Mode](#dark-mode)
    - [Light Mode](#light-mode)
  - [Contributors](#contributors)

## Description

Discord message components to easily build and display fake Discord messages on
your webpage.

**This is an adaptation of [wc-discord-message] from [Danktuary]**

## Features

- Design modelled after [Discord](https://discord.com/) itself
- Comfy and compact mode support
- Dark and light themes support
- Set the message author's username, avatar (use defaults or provide your own),
  role color, and "bot" tag status
- Display fake user, role, and channel mentions
- Complete embed support
- Simple syntax!

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

## Contributors

Please make sure to read the [Contributing Guide][contributing] before making a
pull request.

Thank you to all the people who already contributed to Discord Components!

<a href="https://github.com/skyra-project/discord-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=skyra-project/discord-components" />
</a>

[contributing]: .github/CONTRIBUTING.md
[wc-discord-message]: https://github.com/Danktuary/wc-discord-message
[danktuary]: https://github.com/Danktuary
