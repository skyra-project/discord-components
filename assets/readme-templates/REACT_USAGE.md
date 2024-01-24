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

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/discord-components-vite-react-ts-cfqlyp)

### Create React App

#### Important Notes

Create React App is no longer the recommended way to start with a React app as
per React's own documentation. We very strongly recommend using Vite instead.

### NextJS

#### Important Notes

Support for NextJS can currently not be guaranteed. The package
[@lit-labs/nextjs](https://www.npmjs.com/package/@lit-labs/nextjs) currently
does [not support the app directory](https://github.com/lit/lit/issues/3657) and
with the pages directory there are JSX rendering issues. We recommend following
the GitHub issue linked above as well as Lit in general for progress with NextJS
support. We will update this library if needed, but for now we cannot offer
anything to add proper NextJS support.

## Sample code

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
