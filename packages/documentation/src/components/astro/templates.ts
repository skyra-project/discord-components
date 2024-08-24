import angular from './images/angular.svg';
import astro from './images/astro.svg';
import docusaurus from './images/docusaurus.svg';
import htmx from './images/htmx.svg';
import nextjs from './images/nextjs.svg';
import nuxt from './images/nuxt.svg';
import preact from './images/preact.svg';
import qwik from './images/qwik.svg';
import react from './images/react.svg';
import solid from './images/solid.svg';
import svelte from './images/svelte.svg';
import sveltekit from './images/sveltekit.svg';
import vite from './images/vite.svg';
import vue from './images/vue.svg';

interface Template {
	color: 'blue' | 'green' | 'grey' | 'purple' | 'red' | 'yellow';
	image: ImageMetadata;
	templateName: string;
	title: string;
	tooltipText: string;
}

export const templates: Template[] = [
	{
		title: 'Angular',
		image: angular,
		templateName: 'angular',
		color: 'red',
		tooltipText: 'Angular'
	},
	{
		title: 'Astro',
		image: astro,
		templateName: 'astro',
		color: 'purple',
		tooltipText: 'Astro (with Lit and React)'
	},
	{
		title: 'HTMX',
		image: htmx,
		templateName: 'htmx-vite-ts',
		color: 'blue',
		tooltipText: 'HTMX'
	},
	{
		title: 'NextJS App Directory',
		image: nextjs,
		templateName: 'nextjs-app-directory-ts',
		color: 'grey',
		tooltipText: 'NextJS (App Directory)'
	},
	{
		title: 'NextJS Pages Directory',
		image: nextjs,
		templateName: 'nextjs-ts',
		color: 'grey',
		tooltipText: 'NextJS (Pages Directory)'
	},
	{
		title: 'Vite',
		image: vite,
		templateName: 'no-framework-vite',
		color: 'purple',
		tooltipText: 'Without any framework, only Vite as a build tool'
	},
	{
		title: 'Nuxt',
		image: nuxt,
		templateName: 'nuxt3-ts',
		color: 'green',
		tooltipText: 'Nuxt 3'
	},
	{
		title: 'Preact',
		image: preact,
		templateName: 'preact-vite-ts',
		color: 'purple',
		tooltipText: 'Preact'
	},
	{
		title: 'Qwik',
		image: qwik,
		templateName: 'qwik-vite-ts',
		color: 'blue',
		tooltipText: 'Qwik'
	},
	{
		title: 'Docusaurus',
		image: docusaurus,
		templateName: 'react-docusaurus-ts',
		color: 'green',
		tooltipText: 'Docusaurus (React)'
	},
	{
		title: 'React',
		image: react,
		templateName: 'react-vite-ts',
		color: 'blue',
		tooltipText: 'React'
	},
	{
		title: 'Solid',
		image: solid,
		templateName: 'solid-vite-ts',
		color: 'blue',
		tooltipText: 'Solid'
	},
	{
		title: 'Svelte',
		image: svelte,
		templateName: 'svelte-vite-ts',
		color: 'red',
		tooltipText: 'Svelte'
	},
	{
		title: 'Sveltekit',
		image: sveltekit,
		templateName: 'sveltekit-ts',
		color: 'red',
		tooltipText: 'Sveltekit'
	},
	{
		title: 'Vue',
		image: vue,
		templateName: 'vue-vite-ts',
		color: 'green',
		tooltipText: 'Vue'
	}
];
