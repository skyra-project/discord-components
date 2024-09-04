export type SupportedI18nLanguages =
	| 'bg'
	| 'cs'
	| 'da'
	| 'de'
	| 'el'
	| 'en-GB'
	| 'en-US'
	| 'es-419'
	| 'es-ES'
	| 'fi'
	| 'fr'
	| 'hi'
	| 'hr'
	| 'hu'
	| 'id'
	| 'it'
	| 'ja'
	| 'ko'
	| 'lt'
	| 'nl'
	| 'no'
	| 'pl'
	| 'pt-BR'
	| 'ro'
	| 'ru'
	| 'sv-SE'
	| 'th'
	| 'tr'
	| 'uk'
	| 'vi'
	| 'zh-CN'
	| 'zh-TW';

let i18nLanguage: SupportedI18nLanguages = 'en-US';

export function getI18nLanguage() {
	return i18nLanguage;
}

export function setI18nLanguage(lng: SupportedI18nLanguages) {
	i18nLanguage = lng;
}
