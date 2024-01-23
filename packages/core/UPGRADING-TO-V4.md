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

[Lit]: https://lit.dev
