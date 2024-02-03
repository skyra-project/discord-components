# Upgrading to v4

In version 4.x of @skyra/discord-components-core, the library has been rewritten
from from [StencilJS](https://stenciljs.com) to [Lit]. This means that this
library now offers proper
[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
instead of the half-way implementation that we were able to offer before. We now
leverage the
[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
to ensure that the styles of the components do not leak out to the rest of the
page and ship the components are proper
[Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

This change means that the components are now more robust and easier to use.
Other changes that were introduced in v4:

- The styling of many components and icons was updated to be more in line with
  Discord's own components.
- An attempt is made to load Discord's font `gg sans`. You need to provide it
  yourself as it's a licensed font, but if it's available under the name of
  `gg sans` then it will be used.
- New mention types were added
  - server-guide
  - channels-and-roles
  - customize-community

## Breaking changes

The most important part of upgrading is obviously the breaking changes that were
introduced. First and foremost the way of importing and ensuring the custom
components can be used has changed. Because [Lit] works with side effect style
imports for defining the custom elements you can simply import the package and
it will register the custom elements for you:

```ts
import '@skyra/discord-components-core';
```

After this you will be able to use the custom elements:

```html
<discord-messages>
  <discord-message author="GitHub Bot"> Hello, world! </discord-message>
</discord-messages>
```

Furthermore, individual components can be imported with subpath imports. For
example:

```ts
import '@skyra/discord-components-core/discord-messages';
import '@skyra/discord-components-core/discord-message';
```

This will _only_ load the `discord-messages`, `discord-message`, and
`discord-author-info` components

If you use TypeScript and a framework such a Vue which uses regular HTML syntax
for its templating then you should also automatically get type hints as the
custom elements are registered with the global interface for possible HTML
elements.

For React users the imports are largely the same as they were in the past, for
example:

```tsx
import {
  DiscordMessages,
  DiscordMessage
} from '@skyra/discord-components-react';
```

### Support for NextJS

For NextJS there are some known limitations:

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

### Default font

A while ago Discord changes their default font from "Whitney" to "gg sans". This
library will load this font first if a `font-family` with name `gg sans` is
found. You will need to provide this font yourself as it's a licensed font and
we cannot distribute it.

### Whitney font

In version 3 this library would automatically load the Whitney font from our
CDN. Starting version 4 this will no longer happen automatically as we had
reports of our CDN causing slow downs for users in distant regions compared to
where our CDN was hosted. If you want to use the Whitney font you will need to
provide it yourself. An example for this can be found in the
[README](./README.md#using-the-discord-font).

### Frameworkless usage

It is no longer possible to use this library simply by importing the unpkg URL.
You have to use a bundler such as [Vite](https://vitejs.dev) or
[Webpack](https://webpack.js.org) to use this library.

### Component changes

#### `discord-inline-code`

The `discord-inline-code` component has been removed in favour of a property on
`discord-code`. To get inline code you now simply use `discord-code` which will
default to inline.

#### `discord-code`

As mentioned above, `discord-code` will default to inline. To get multiline code
blocks set `multiline="true"` as property.

[Lit]: https://lit.dev
