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

> [!IMPORTANT]
>
> For further examples on how to use components, please refer to the Stackblitz
> examples linked below. Choose the framework you are using and click on the
> "Open on Stackblitz" button to see the code and how it renders in the browser.

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

### Integrations

#### Angular

##### Important Notes

You need to import the `CUSTOM_ELEMENTS_SCHEMA` from `@angular/core` and add it
to the `schemas` array of your module or component decorator for the module or
component using custom elements. This is to ensure that Angular knows custom
elements are used in this module or component.

```ts
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}
```

##### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/angular)

#### React

##### Important Notes

React is currently the only library among the "big" libraries for frontend
development that does not fully support custom elements / webcomponents yet (see
[this React documentation page for more info](https://react.dev/reference/react-dom/components#custom-html-elements)).
For this reason we ship the package `@skyra/discord-components-react`.

We sincerely hope that this situation will improve in the future, but no one
knows what their plans are.

##### Vite

###### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/react-vite-ts)

##### Create React App

###### Important Notes

Create React App is no longer the recommended way to start with a React app as
per React's own documentation. We very strongly recommend using Vite instead.

##### NextJS

###### Live Demo Pages Directory

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/nextjs-ts)

###### Live Demo App Directory

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/nextjs-app-directory-ts)

###### Known limitations

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

##### Docusaurus

###### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/react-docusaurus-ts)

#### Vue

##### Vite

###### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/vue-vite-ts)

###### Configuration

When using Vue 3 with Vite you need to setup Vite to recognise the custom
components. You can do that with the following code in your `vite.config.ts`:

```ts
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('discord-')
        }
      }
    })
  ]
});
```

##### Nuxt

###### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/nuxt3-ts)

###### Configuration

When using Nuxt 3 you need to setup Vite to recognise the custom components. You
can do that with the following code in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('discord-')
    }
  }
});
```

#### Astro

##### Important Notes

Because it is possible to use different integrations in an Astro project you can
also reference the other examples here. The live demo linked below uses the
[Lit integration for Astro](https://docs.astro.build/en/guides/integrations-guide/lit/)
as well as the
[React integration for Astro](https://docs.astro.build/en/guides/integrations-guide/react/).

##### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/astro)

#### Solid

##### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/solid-vite-ts)

#### Svelte

##### Vite

###### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/svelte-vite-ts)

##### Sveltekit

###### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/sveltekit-ts)

#### Qwik

##### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/qwik-vite-ts)

#### Preact

##### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/preact-vite-ts)

#### HTMX

##### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/htmx-vite-ts)

#### No Framework

##### Important Notes

Note that while it is entirely possible to use this library without a framework,
you will still need a bundler such as [vite](https://vitejs.dev/). This is
because this library exposes ES modules which need to be bundled into a format
that the browser can support. The live demo below uses Vite.

##### Live Demo

[![Open in Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/templates/no-framework-vite)

<!-- # CORE_USAGE END # -->
