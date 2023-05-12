<!-- # REACT_USAGE START # -->

## Usage

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

<!-- TODO: Insert React Vite live demo -->

### Create React App

#### Live Demo

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-create-react-app-64k90)

### NextJS

#### Important Notes

When using this library with NextJS you _have_ to install the
[@lit-labs/nextjs ](https://www.npmjs.com/package/@lit-labs/nextjs) package.
Without this package your SSR rendering will fail! A stackblitz (provided by the
Lit team) showing how to use this package can be found
[here](https://stackblitz.com/edit/nextjs-lit-ssr?file=next.config.js)

#### Live Demo

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-nextjs-ovqfu)

### Sample code

The syntax is kept fairly simple. Here's a basic example of a regular
conversation:

```tsx
<DiscordMessages>
  <DiscordMessage>
    Hey guys, I'm new here! Glad to be able to join you all!
  </DiscordMessage>
  <DiscordMessage author="Dawn" avatar="red">
    Hi, I'm new here too!
  </DiscordMessage>
  <DiscordMessage
    author="Sanctuary"
    avatar="https://i.imgur.com/0TeacfY.png"
    roleColor="#0099ff"
  >
    Hey, <DiscordMention>User</DiscordMention> and{' '}
    <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
  </DiscordMessage>
</DiscordMessages>
```

<!-- # REACT_USAGE END # -->
