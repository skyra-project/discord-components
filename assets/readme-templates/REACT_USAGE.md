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

### Internationalization

This package uses [i18next](https://www.i18next.com/) for internationalization.
We load i18next into Lit using [lit-i18n](https://github.com/colscott/lit-i18n)
and we also add the
[i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)
plugin to attempt to detect the user's browser language.

#### Initialization

i18next will be initialized by importing any component internally.
Alternatively, if you want to initialize it yourself (i.e. in your application
entrypoint) you can do so with the following code:

```ts
import '@skyra/discord-components-react';
```

#### Setting the language manually

We expose the function `setI18nLanguage` which can be used to manually set the
language of i18next. You can use one of the following:

```ts
import { setI18nLanguage } from '@skyra/discord-components-react';
```

#### Integrating with `react-i18next`

If you want to integrate this with
[`react-i18next`](https://github.com/i18next/react-i18next), you can simply
initialize i18next as shown above, then import either `useTranslation` or
`Trans` from `react-i18next` and use them as you would normally.

#### Supported languages

The list of languages supported are matched to the list of languages the Discord
client supports. The list is as follows:

- `bg`: Bulgarian
- `cs`: Czech
- `da`: Danish
- `de`: German
- `el`: Greek
- `en-GB`: English (British)
- `en-US`: English (American)
- `es-419`: Spanish (Latin America)
- `es-ES`: Spanish (Spain)
- `fi`: Finnish
- `fr`: French
- `hi`: Hindi
- `hr`: Croatian
- `hu`: Hungarian
- `id`: Indonesian
- `it`: Italian
- `ja`: Japanese
- `ko`: Korean
- `lt`: Lithuanian
- `nl`: Dutch
- `no`: Norwegian
- `pl`: Polish
- `pt-BR`: Portuguese (Brazil)
- `ro`: Romanian
- `ru`: Russian
- `sv-SE`: Swedish
- `th`: Thai
- `tr`: Turkish
- `uk`: Ukrainian
- `vi`: Vietnamese
- `zh-CN`: Chinese (Simplified)
- `zh-TW`: Chinese (Traditional)

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
