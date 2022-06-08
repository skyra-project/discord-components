<div align="center">

# Discord Components

**Fake Discord messages for the web**

[![License](https://img.shields.io/github/license/skyra-project/discord-components?logo=github&maxAge=3600&style=flat-square)](https://github.com/skyra-project/discord-components/blob/main/LICENSE.md)
[![Patreon](https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon)](https://donate.skyra.pw/patreon)

[![npm](https://img.shields.io/npm/v/@skyra/discord-components-core?color=crimson&logo=npm&style=flat-square&label=@skyra/discord-components-core)](https://www.npmjs.com/package/@skyra/discord-components-core)
[![npm](https://img.shields.io/npm/v/@skyra/discord-components-react?color=crimson&logo=npm&style=flat-square&label=@skyra/discord-components-react)](https://www.npmjs.com/package/@skyra/discord-components-react)

[![Support Server](https://discord.com/api/guilds/254360814063058944/embed.png?style=banner2)](https://join.skyra.pw)

</div>

---

**_Table of Contents_**

-   [Discord Components](#discord-components)
    -   [Description](#description)
    -   [Features](#features)
    -   [Using the Discord font](#using-the-discord-font)
    -   [Demos](#demos)
        -   [Angular](#angular)
        -   [React](#react)
        -   [Vue](#vue)
        -   [No Framework](#no-framework)
    -   [Screenshots](#screenshots)
        -   [Dark Mode](#dark-mode)
        -   [Light Mode](#light-mode)
    -   [Contributors](#contributors)

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

## Using the Discord font

This library can use the Discord font if you load it into your project. You can do so by including the CSS below:

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

## Demos

### Angular

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-angular-0xz0z)

### React

**Create React App**

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-create-react-app-64k90)

**NextJS**

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-nextjs-ovqfu)

### Vue

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-vue-g1w48)

### No Framework

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/discord-components-static-nhwkl)

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

## Contributors

Please make sure to read the [Contributing Guide][contributing] before making a pull request.

Thank you to all the people who already contributed to Skyra Project!

<a href="https://github.com/skyra-project/discord-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=skyra-project/discord-components" />
</a>

[contributing]: https://github.com/skyra-project/.github/blob/main/.github/CONTRIBUTING.md
[wc-discord-message]: https://github.com/Danktuary/wc-discord-message
[danktuary]: https://github.com/Danktuary
