import starlight from '@astrojs/starlight';
import { defineConfig, passthroughImageService } from 'astro/config';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import lit from '@astrojs/lit';

import { seoConfig } from './src/utils/seoConfig';

export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		starlight({
			favicon: 'https://discord-components.js.org/favicons/favicon.ico',
			customCss: ['./src/assets/styles.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Expires',
						content: '1y'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Pragma',
						content: '1y'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Content-Type',
						content: 'text/html; charset=UTF-8'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Cache-Control',
						content: '1y'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Page-Enter',
						content: 'RevealTrans(Duration=2.0,Transition=2)'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Page-Exit',
						content: 'RevealTrans(Duration=3.0,Transition=12)'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-capable',
						content: 'yes'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-capable',
						content: 'yes'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-status-bar-style',
						content: 'black'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-title',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'application-name',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'audience',
						content: 'all'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: `favna, ${seoConfig.email}`
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'coverage',
						content: 'Worldwide'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content: seoConfig.description
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'designer',
						content: `favna, ${seoConfig.email}`
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'distribution',
						content: 'Global'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'googlebot',
						content: 'index,follow'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'HandheldFriendly',
						content: 'True'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'identifier-URL',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'discord, library, webcomponents, lit, components, html, documentation'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msapplication-config',
						content: '/browserconfig.xml'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msapplication-TileColor',
						content: '#ffffff'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msapplication-TileImage',
						content: 'https://discord-components.js.org/favicons/mstile-144x144.png'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'owner',
						content: `favna, ${seoConfig.email}`
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'rating',
						content: 'safe for kids'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'reply-to',
						content: seoConfig.email
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'revisit-after',
						content: '7 days'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: 'archive,follow,imageindex,index,odp,snippet,translate'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'shortlink',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'subject',
						content: 'Documentation website for @skyra/discord-components-core'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'summary',
						content: seoConfig.description
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'target',
						content: 'all'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#5865F2'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: seoConfig.twitter.card
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:creator',
						content: seoConfig.twitter.handle
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:site',
						content: seoConfig.twitter.handle
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: seoConfig.image.url
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'url',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: seoConfig.description
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:email',
						content: seoConfig.email
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: seoConfig.image.url
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:alt',
						content: seoConfig.image.alt
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:height',
						content: seoConfig.image.width.toString()
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:width',
						content: seoConfig.image.height.toString()
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:locale',
						content: 'en'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: seoConfig.type
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:url',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'canonical',
						href: seoConfig.baseURL
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						type: 'image/png',
						sizes: '180x180',
						href: 'https://discord-components.js.org/favicons/apple-touch-icon.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: 'https://discord-components.js.org/favicons/favicon-16x16.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: 'https://discord-components.js.org/favicons/favicon-32x32.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '192x192',
						href: 'https://discord-components.js.org/favicons/android-chrome-192x192.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'mask-icon',
						type: 'image/svg',
						href: 'https://discord-components.js.org/favicons/safari-pinned-tab.svg',
						color: '#5865F2'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						type: 'image/ico',
						href: 'https://discord-components.js.org/favicons/favicon.ico'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-startup-image',
						type: 'image/png',
						href: 'https://discord-components.js.org/favicons/apple-startup.png'
					}
				},
				{
					tag: 'script',
					content: `
						globalThis.$discordMessage = {
							profiles: {
								maximillian: {
									author: 'Maximillian Osborn',
									avatar: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avaone.png',
									roleColor: '#f9d61b'
								},
								willard: {
									author: 'Willard Walton',
									avatar: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/avatwo.png',
									roleColor: '#ffb12f'
								},
								skyra: {
									author: 'Skyra',
									avatar: 'https://github.com/NM-EEA-Y.png',
									roleColor: '#1e88e5',
									bot: true,
									verified: true
								},
								favna: {
									author: 'Favna',
									avatar: 'https://github.com/favna.png',
									roleColor: '#a155ab',
									roleIcon: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/booster.png',
									roleName: 'Booster'
								},
								dominik: {
									author: 'Dominik',
									avatar: 'https://github.com/mezotv.png',
									clanIcon: 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/guilds/14.svg',
									clanTag: 'Cute'
								},
								discordjs: {
									author: 'Discord.js Official #announcements',
									avatar: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/discordjs.png',
									roleColor: '#ffffff',
									server: true
								}
							},
							emojis: {
								diamond: {
									name: 'diamond',
									url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/diamond.png'
								},
								dragonite: {
									name: 'dragonite',
									url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/dragonite.png'
								},
								sapphire: {
									name: 'sapphire',
									url: 'https://raw.githubusercontent.com/skyra-project/discord-components-implementations/main/shared/public/sapphire.png'
								}
							}
						};`
				}
			],
			pagination: true,
			logo: {
				src: './src/assets/discord-components-logo.png',
				light: './src/assets/discord-components-logo.png',
				dark: './src/assets/discord-components-logo.png',
				alt: 'logo'
			},
			title: 'Discord Components',
			social: {
				github: 'https://github.com/skyra-project/discord-components',
				twitter: 'https://twitter.com/favna_'
			},
			sidebar: [
				{ items: [], slug: 'api/readme', label: 'README' },
				{ items: [], slug: 'samples' }, //
				typeDocSidebarGroup
			],
			plugins: [
				// Generate the documentation.
				starlightTypeDoc({
					entryPoints: ['../core/src/index.ts'],
					tsconfig: '../core/src/tsconfig.json',
					pagination: true,
					sidebar: {
						label: 'Documenation'
					},
					typeDoc: {
						readme: './src/assets/README.md',
						excludeExternals: true,
						githubPages: true,
						disableSources: true,
						plugin: ['typedoc-plugin-frontmatter', './src/plugins/frontmatter.js']
					}
				})
			]
		}),
		lit()
	],
	image: { service: passthroughImageService() }
});
