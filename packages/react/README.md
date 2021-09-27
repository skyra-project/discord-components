<div align="center">

# @skyra/discord-components-react

**React bindings for [@skyra/discord-components-core](https://github.com/skyra-project/discord-components/tree/main/packages/core)**

[![License](https://img.shields.io/github/license/skyra-project/discord-components?logo=github&maxAge=3600&style=flat-square)](https://github.com/skyra-project/discord-components/blob/main/LICENSE.md)
[![Patreon](https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon)](https://donate.skyra.pw/patreon)

[![npm](https://img.shields.io/npm/v/@skyra/discord-components-react?color=crimson&logo=npm&style=flat-square&label=@skyra/discord-components-react)](https://www.npmjs.com/package/@skyra/discord-components-react)
[![npm](https://img.shields.io/npm/dt/@skyra/discord-components-react.svg?maxAge=3600&logo=npm)](https://www.npmjs.com/package/@skyra/discord-components-react)
[![npm](https://img.shields.io/bundlephobia/min/@skyra/discord-components-react?label=minified&logo=webpack&maxAge=3600)](https://bundlephobia.com/result?p=@skyra/discord-components-react)
[![Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d)](https://stenciljs.com)

[![Support Server](https://discord.com/api/guilds/254360814063058944/embed.png?style=banner2)](https://join.skyra.pw)

</div>

---

**_Table of Contents_**

-   [@skyra/discord-components-react](#skyradiscord-components-react)
    -   [Description](#description)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [Live Demo (Create React App)](#live-demo-create-react-app)
        -   [Live Demo (NextJS)](#live-demo-nextjs)
        *   [Sample code](#sample-code)
    -   [Notes](#notes)
        -   [TypeScript module augments](#typescript-module-augments)
        -   [Avatar shortcuts](#avatar-shortcuts)
        -   [Profile shortcuts](#profile-shortcuts)
        -   [Theming](#theming)
        -   [Components notes](#components-notes)
            -   [DiscordMessages component](#discordmessages-component)
            -   [DiscordMention component](#discordmention-component)
            -   [DiscordEmbed component](#discordembed-component)
            -   [EmbedFields component](#embedfields-component)
            -   [EmbedField component](#embedfield-component)
    -   [Screenshots](#screenshots)
        -   [Dark Mode](#dark-mode)
        -   [Light Mode](#light-mode)
    -   [Contributors ✨](#contributors-%E2%9C%A8)

## Description

Discord message components to easily build and display fake Discord messages on your webpage.

**This is an adaptation of [wc-discord-message] from [Danktuary]**

## Features

-   Design modelled after [Discord](https://discord.com/) itself
-   Comfy and compact mode support
-   Dark and light themes support
-   Set the message author's username, avatar (use defaults or provide your own), role color, and "bot" tag status
-   Display fake user, role, and channel mentions
-   Complete embed support
-   Simple syntax!

## Installation

```bash
yarn add @skyra/discord-components-core @skyra/discord-components-react
# or npm install @skyra/discord-components-core @skyra/discord-components-react
```

## Usage

#### Live Demo (Create React App)

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-create-react-app-64k90)

#### Live Demo (NextJS)

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-nextjs-hdzov)

### Sample code

The syntax is kept fairly simple. Here's a basic example of a regular conversation:

```tsx
<DiscordMessages>
	<DiscordMessage>Hey guys, I'm new here! Glad to be able to join you all!</DiscordMessage>
	<DiscordMessage author="Dawn" avatar="red">
		Hi, I'm new here too!
	</DiscordMessage>
	<DiscordMessage author="Sanctuary" avatar="https://i.imgur.com/0TeacfY.png" roleColor="#0099ff">
		Hey, <DiscordMention>User</DiscordMention> and <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
	</DiscordMessage>
</DiscordMessages>
```

## Notes

### TypeScript module augments

This module uses a custom object on the browser `window` for configuration. In order to this you will need to include the following snippet in your source code when working in TypeScript:

```ts
import type { DiscordMessageOptions } from '@skyra/discord-components-core/dist/types/options';

declare global {
	interface Window {
		$discordMessage: DiscordMessageOptions;
	}
}
```

### Avatar shortcuts

The current avatar shortcut strings available are "blue" (default), "gray", "green", "orange", and "red". These shortcuts map to the following image links:

```json
{
	"blue": "https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png",
	"gray": "https://cdn.discordapp.com/attachments/654503812593090602/665721746569166849/gray.png",
	"green": "https://cdn.discordapp.com/attachments/654503812593090602/665721748431306753/green.png",
	"orange": "https://cdn.discordapp.com/attachments/654503812593090602/665721750201434138/orange.png",
	"red": "https://cdn.discordapp.com/attachments/654503812593090602/665721752277483540/red.png"
}
```

If you want to add to or override the shortcuts, you can set them via `window.$discordMessage.avatars`.

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

Sometimes you'll want to use the same message data across multiple messages. You can do so by providing an object of profiles in `window.$discordMessage.profiles`.

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
<DiscordMessages>
	<DiscordMessage profile="skyra">
		Welcome to our server, <mention>Favna</mention>!
	</DiscordMessage>
	<DiscordMessage profile="favna">Hey, glad to be here!</DiscordMessage>
</DiscordMessages>
```

### Theming

Each of the components accepts the standard HTML properties for passing styling, such as `className` for passing CSS classes (JSS / CSS / SCSS etc.) or `style` to pass inline style.

You can also pass your own custom HTML tags, for example set a `data-qa` to be able to navigate to the component in your unit tests / end-to-end tests

### Components notes

Below are notes for a few certain components. If you want to see what props each component has, check their readme.md file in [the respective folder].

#### DiscordMessages component

This is a wrapper for any child `<DiscordMessage>` component. It must be used in order for messages to display properly.

#### DiscordMention component

If the default slot is left empty, the mention will be rendered as `'User'`, `'Role'`, or `'channel`', depending on the `type` prop given.

#### DiscordEmbed component

An embed that can be attached to the end of your messages. The default slot is used for the embed's description. The `footer` slot is used for the footer text.

To ensure the embed gets displayed correctly inside your message, be sure to give it the proper `slot` attribute.

```tsx
<DiscordMessage>
	Hi, I'm part of the normal message content.
	<DiscordEmbed slot="embeds" color="#0099ff">
		Hi, I'm part of the embed message content.
	</DiscordEmbed>
</DiscordMessage>
```

#### EmbedFields component

A wrapper for any child `<DiscordEmbedField>` components. Must be used in order for fields to display properly. To ensure the embed fields gets displayed correctly inside your embed, be sure to give it the proper `slot` attribute.

```tsx
<DiscordMessage>
  <DiscordEmbed slot="embeds">
    Hi, I'm part of the embed message content.
    <DiscordEmbedFields slot="fields">
      <!-- Embed fields go here -->
    </DiscordEmbedFields>
  </DiscordEmbed>
</DiscordMessage>
```

#### EmbedField component

At least 2 consecutive fields need to be marked as inline in order for them to actually display next to each other. The maximum amount of inline fields is 3, and drops to 2 if an embed thumbnail is used.

```tsx
<DiscordMessage>
	<DiscordEmbed slot="embeds">
		Hi, I'm part of the embed message content.
		<DiscordEmbedFields slot="fields">
			<DiscordEmbedField fieldTitle="Inline field" inline>
				Field content.
			</DiscordEmbedField>
			<DiscordEmbedField fieldTitle="Inline field" inline>
				Field content.
			</DiscordEmbedField>
		</DiscordEmbedFields>
	</DiscordEmbed>
</DiscordMessage>
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/skyra-project/discord-components/commits?author=Favna" title="Code">💻</a> <a href="https://github.com/skyra-project/discord-components/commits?author=Favna" title="Documentation">📖</a> <a href="#example-Favna" title="Examples">💡</a> <a href="#projectManagement-Favna" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#maintenance-dependabot[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://ko-fi.com/crawltogo"><img src="https://avatars.githubusercontent.com/u/20760160?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Noel</b></sub></a><br /><a href="https://github.com/skyra-project/discord-components/commits?author=iCrawl" title="Code">💻</a> <a href="https://github.com/skyra-project/discord-components/issues?q=author%3AiCrawl" title="Bug reports">🐛</a> <a href="#design-iCrawl" title="Design">🎨</a></td>
    <td align="center"><a href="http://snazzah.com"><img src="https://avatars.githubusercontent.com/u/7025343?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Snazzah</b></sub></a><br /><a href="https://github.com/skyra-project/discord-components/commits?author=Snazzah" title="Code">💻</a></td>
    <td align="center"><a href="https://darkguy10.github.io/"><img src="https://avatars.githubusercontent.com/u/62807269?v=4?s=100" width="100px;" alt=""/><br /><sub><b>DarkGuy10</b></sub></a><br /><a href="https://github.com/skyra-project/discord-components/commits?author=DarkGuy10" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- LINK DUMP -->

[wc-discord-message]: https://github.com/Danktuary/wc-discord-message
[danktuary]: https://github.com/Danktuary
[the respective folder]: (https://github.com/skyra-project/discord-components/blob/main/packages/core/src/components/)
