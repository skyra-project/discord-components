const email = 'contact@skyra.pw';
const title = 'Discord Components';

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: 'https://discord-components.js.org/',
	description: 'Web components to easily build and display fake Discord messages on your webpages',
	email,
	type: 'website',
	image: {
		url: 'https://discord-components.js.org/favicons/opengraph.png',
		alt: 'OpenGraph image',
		width: 1_024,
		height: 512
	},
	siteName: title,
	twitter: {
		card: 'summary_large_image',
		handle: '@favna_'
	}
};
