<div align="center">
<p>
<h1> @skyra/discord-components-react </h1>
<h3> React bindings for @skyra/discord-components-core </h3>
</p>
<p>
	<a href="https://github.com/skyra-project/discord-components/blob/main/LICENSE.md">
	<img src="https://img.shields.io/github/license/skyra-project/discord-components?logo=github&maxAge=3600&style=flat-square" alt="NPM version" />
	</a>
</p>
<p>
<a href="https://www.npmjs.com/package/@skyra/discord-components-react">
<img src="https://img.shields.io/npm/v/@skyra/discord-components-react.svg?maxAge=3600&logo=npm&style=flat-square" alt="NPM version" />
</a>
	
<a href="https://www.npmjs.com/package/@skyra/discord-components-react">
<img src="https://img.shields.io/npm/dt/@skyra/discord-components-react.svg?maxAge=3600&logo=npm&style=flat-square" alt="NPM downloads" />
</a>
</p>
<p>
<a href="https://bundlephobia.com/result?p=@skyra/discord-components-react">
<img src="https://img.shields.io/bundlephobia/min/@skyra/discord-components-react?label=minified&logo=webpack&maxAge=3600&style=flat-square" alt="Minified Size">
</a>

<a href="https://bundlephobia.com/result?p=@skyra/discord-components-react">
<img src="https://img.shields.io/bundlephobia/minzip/@skyra/discord-components-react?label=minzipped&logo=webpack&maxAge=3600&style=flat-square" alt="Minzipped Size">
</a>
</p>

<a href="https://depfu.com/github/skyra-project/discord-components?project_id=11733">
<img src="https://badges.depfu.com/badges/2be62b7690111eea9aef95f7c8ca07fa/count.svg" alt="Depfu" />
</a>

<a href="https://donate.skyra.pw/patreon">
<img src="https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon" alt="Patreon" />
</a>

<a href="https://stenciljs.com/">
<img src="https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square" Alt="Stencil" />
</a>
</div>

**This is an adoptation of [wc-discord-message] from [Danktuary].**

## Features

-   Design modeled after [Discord](https://discordapp.com/) itself
-   Comfy and compact mode support
-   Dark and light themes support
-   Set the message author's username, avatar (use defaults or provide your own), role color, and "bot" tag status
-   Display fake user, role, and channel mentions
-   Complete embed support
-   Simple syntax!

## Preview

![@skyra/discord-components-core preview](https://i.imgur.com/xHL8Xyx.png)

<details><summary> Code for this preview </summary>

```tsx
<DiscordMessages>
	<DiscordMessage>Hey guys, I'm new here! Glad to be able to join you all!</DiscordMessage>
	<DiscordMessage author="Dawn" avatar="red">
		Hi, I'm new here too!
	</DiscordMessage>
	<DiscordMessage author="Sanctuary" avatar="https://i.imgur.com/0TeacfY.png" roleColor="#0099ff">
		Hey, <DiscordMention>User</DiscordMention> and <DiscordMention>Dawn</DiscordMention>. Welcome to our server! Be sure to read through the{' '}
		<DiscordMention type="channel">rules</DiscordMention>. You can ping{' '}
		<DiscordMention type="role" color="#70f0b4">
			Support
		</DiscordMention>{' '}
		if you need help.
	</DiscordMessage>
	<DiscordMessage author="Twelve" avatar="https://i.imgur.com/Mc0F0Hf.png" roleColor="#70f0b4">
		Hello everyone! How's it going?
	</DiscordMessage>
	<DiscordMessage author="User">
		Thank you <DiscordMention highlight>Sanctuary</DiscordMention>!
	</DiscordMessage>
	<DiscordMessage author="Yotsuba" avatar="https://i.imgur.com/amw0MGJ.png">
		I'm doing well, <DiscordMention>Twelve</DiscordMention>. What about yourself?
	</DiscordMessage>
	<DiscordMessage author="Twelve" avatar="https://i.imgur.com/Mc0F0Hf.png" roleColor="#70f0b4">
		!8ball How am I doing today?
	</DiscordMessage>
	<DiscordMessage author="Rinon" avatar="https://i.imgur.com/axQ9wJl.png" roleColor="violet" bot>
		Yes.
	</DiscordMessage>
</DiscordMessages>
```

</details>

&nbsp;

Check out the [live demo](https://skyra-discord-components.netlify.app/) for further examples.

## Installation

```bash
yarn add @skyra/discord-components-core @skyra/discord-components-react
# or npm install @skyra/discord-components-core @skyra/discord-components-react
```

## Usage

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

### Default font

By default, this package uses the Google Fonts CDN to pull in the Roboto font. This isn't the same font Discord uses, so if you want to provide your own, you can override the CSS.

```css
/* index.css */
.discord-messages {
	font-family: 'Your Font', sans-serif;
}
```

In order to load the Discord font add the following code:

```css
/* Whitney font face to match Discord */
@font-face {
	font-family: Whitney;
	font-style: light;
	font-weight: 300;
	src: url(https://discord.com/assets/6c6374bad0b0b6d204d8d6dc4a18d820.woff) format('woff');
}
@font-face {
	font-family: Whitney;
	font-style: normal;
	font-weight: 500;
	src: url(https://discord.com/assets/e8acd7d9bf6207f99350ca9f9e23b168.woff) format('woff');
}
@font-face {
	font-family: Whitney;
	font-style: medium;
	font-weight: 600;
	src: url(https://discord.com/assets/3bdef1251a424500c1b3a78dea9b7e57.woff) format('woff');
}
@font-face {
	font-family: WhitneyMedium;
	font-style: medium;
	font-weight: 600;
	src: url(https://discord.com/assets/be0060dafb7a0e31d2a1ca17c0708636.woff) format('woff');
}
@font-face {
	font-family: Whitney;
	font-style: bold;
	font-weight: 700;
	src: url(https://discord.com/assets/8e12fb4f14d9c4592eb8ec9f22337b04.woff) format('woff');
}

/* Setting default CSS for Discord messages */
.discord-message,
.discord-messages {
	font-family: Whitney, Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

### TypeScript module augments

This module uses a custom object on the browser `window` for configuration. In order to this you will need to include the following snippet in your source code when working in TypeScript:

```ts
declare global {
	type DiscordMessageAvatars = Record<string, string> &
		Partial<{
			blue: string;
			gray: string;
			green: string;
			orange: string;
			red: string;
		}>;

	type DiscordMessageProfile = Partial<{
		author: string;
		avatar: string;
		bot: boolean;
		verified: boolean;
		roleColor: string;
	}>;

	interface Window {
		$discordMessage: Partial<{
			avatars: DiscordMessageAvatars;
			profiles: Record<string, DiscordMessageProfile>;
			defaultTheme: string;
			defaultMode: string;
			defaultBackground: 'discord' | 'none';
		}>;
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/skyra-project/discord-components/commits?author=Favna" title="Code">💻</a> <a href="https://github.com/skyra-project/discord-components/commits?author=Favna" title="Documentation">📖</a> <a href="#example-Favna" title="Examples">💡</a> <a href="#projectManagement-Favna" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- LINK DUMP -->

[wc-discord-message]: https://github.com/Danktuary/wc-discord-message
[danktuary]: https://github.com/Danktuary
[rollup]: https://rollupjs.org/
[@stencil/react-output-target]: https://www.npmjs.com/package/@stencil/react-output-target
[the respective folder]: (https://github.com/skyra-project/discord-components/blob/main/packages/core/src/components/)
