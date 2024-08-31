/* eslint-disable import-x/order, unicorn/no-useless-switch-case */
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initLitI18n } from './lit-integration.js';
import { getI18nLanguage, type SupportedI18nLanguages } from './utils.js';

// Languages
import * as enUS from '../locales/en-US/index.js';
import * as nl from '../locales/nl/index.js';

const namespaces = [
	//
	'discord-modal'
];
const languages: SupportedI18nLanguages[] = [
	'bg',
	'cs',
	'da',
	'de',
	'el',
	'en-GB',
	'en-US',
	'es-419',
	'es-ES',
	'fi',
	'fr',
	'hi',
	'hr',
	'hu',
	'id',
	'it',
	'ja',
	'ko',
	'lt',
	'nl',
	'no',
	'pl',
	'pt-BR',
	'ro',
	'ru',
	'sv-SE',
	'th',
	'tr',
	'uk',
	'vi',
	'zh-CN',
	'zh-TW'
];

void i18next
	.use(LanguageDetector)
	.use(initLitI18n)
	.init({
		debug: true,
		fallbackLng: {
			'es-419': ['es-ES', 'en-US'],
			default: ['en-US']
		},
		initImmediate: true,
		returnNull: false,
		returnEmptyString: false,
		returnObjects: true,
		supportedLngs: languages,
		preload: languages,
		ns: namespaces,
		lng: getI18nLanguage(),
		interpolation: {
			escapeValue: false,
			skipOnVariables: false
		}
	});

for (const lng of languages) {
	for (const namespace of namespaces) {
		console.group('adding a namespaced language');
		console.log('adding: ', lng, namespace, Reflect.get(lngToObject(lng), kebabCaseToPascalCase(namespace)));
		console.groupEnd();

		i18next.addResourceBundle(lng, namespace, Reflect.get(lngToObject(lng), kebabCaseToPascalCase(namespace)));
	}
}

function kebabCaseToPascalCase(str: string): string {
	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');
}

function lngToObject(lng: SupportedI18nLanguages): Record<PropertyKey, unknown> {
	switch (lng) {
		case 'nl':
			return nl;
		case 'en-US':
		default:
			return enUS;
	}
}
