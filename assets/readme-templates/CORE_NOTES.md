<!-- # CORE_NOTES START # -->

## Notes

### TypeScript module augments

This library uses a custom object on the browser `window` for configuration.
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
`window.$discordMessage.avatars` or by using the `setConfig` function
(`import { setConfig } from '@skyra/discord-components-core'`).

```ts
window.$discordMessage = {
  avatars: {
    default: 'blue',
    skyra: 'https://github.com/NM-EEA-Y.png',
    djs: require('./assets/discord-avatar-djs.png') // You can use require syntax as well
  }
};
```

```ts
import { setConfig } from '@skyra/discord-components-core';

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
`window.$discordMessage.profiles` or by using the `setConfig` function
(`import { setConfig } from '@skyra/discord-components-core'`).

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

```ts
import { setConfig } from '@skyra/discord-components-core';

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

And then in your code:

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
