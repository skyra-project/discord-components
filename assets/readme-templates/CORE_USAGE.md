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

### Integrations

#### Angular

##### Live Demo

[![Edit on Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/angular)

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

##### Important

React is currently the only library among the "big" libraries for frontend
development that does not fully support custom elements / webcomponents yet (see
[this React documentation page for more info](https://react.dev/reference/react-dom/components#custom-html-elements)).
For this reason we ship the package `@skyra/discord-components-react`.

We sincerely hope that this situation will improve in the future, but no one
knows what their plans are.

##### Sample code

See [@skyra/discord-components-react](packages/react/README.md#sample-code)

##### Vite

###### Live Demo

[![Edit on Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/react-vite-ts)

##### Create React App

###### Important Notes

Create React App is no longer the recommended way to start with a React app as
per React's own documentation. We very strongly recommend using Vite instead.

### NextJS

#### Live Demo Pages Directory

[![Edit on Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/nextjs-ts)

#### Live Demo App Directory

[![Edit on Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/nextjs-app-directory-ts)

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
   [https://github.com/skyra-project/discord-components-implementations/tree/main/nextjs-ts].

#### Vue

##### Vite

###### Live Demo

[![Edit on Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/vue-vite-ts)

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

##### Important Notes

Note that while it is entirely possible to use this library without a framework,
you will still need a bundler such as [vite](https://vitejs.dev/). This is
because this library exposes ES modules which need to be bundled into a format
that the browser can support. The live demo below uses Vite.

##### Live Demo

[![Edit on Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/skyra-project/discord-components-implementations/tree/main/no-framework-vite)

<!-- # CORE_USAGE END # -->
