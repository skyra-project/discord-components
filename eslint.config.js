import common from 'eslint-config-neon/common';
import { configs as eslintPluginLit } from 'eslint-plugin-lit';
import { configs as eslintPluginWc } from 'eslint-plugin-wc';
import browser from 'eslint-config-neon/browser';
import mod from 'eslint-config-neon/module';
import noDeprecated from 'eslint-config-neon/no-deprecated';
import html from 'eslint-plugin-html';
import node from 'eslint-config-neon/node';
import prettier from 'eslint-config-neon/prettier';
import typescript from 'eslint-config-neon/typescript';
import merge from 'lodash.merge';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { fixupPluginRules } from '@eslint/compat';
import { rules as litA11yRules, configs as litA11yConfigs } from 'eslint-plugin-lit-a11y';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	{
		ignores: ['.yarn/**', 'packages/**/dist/', './**/*.js', 'packages/documentation/.astro/**']
	},
	...[...common, ...typescript, ...prettier, ...mod, ...noDeprecated, ...node, ...browser].map((config) =>
		merge(config, {
			files: ['packages/**/*.ts'],
			languageOptions: {
				parserOptions: {
					project: 'tsconfig.eslint.json'
				}
			},
			rules: {
				// eslint-plugin-jsdoc (conflicts with eslint-plugin-tsdoc)
				'jsdoc/no-undefined-types': 'off',

				// Change neon rules that are relevant for this project
				'no-extra-label': 'warn',
				'no-iterator': 'warn',
				'no-label-var': 'warn',
				'no-labels': [
					'warn',
					{
						allowLoop: true,
						allowSwitch: true
					}
				],
				'no-lone-blocks': 'warn',
				'no-loop-func': 'warn',
				'no-mixed-operators': [
					'warn',
					{
						groups: [
							['&', '|', '^', '~', '<<', '>>', '>>>'],
							['==', '!=', '===', '!==', '>', '>=', '<', '<='],
							['&&', '||'],
							['in', 'instanceof']
						],
						allowSamePrecedence: false
					}
				],
				'no-multi-str': 'warn',
				'rest-spread-spacing': ['warn', 'never'],
				'no-restricted-properties': [
					'error',
					{
						object: 'require',
						property: 'ensure',
						message: 'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting'
					},
					{
						object: 'System',
						property: 'import',
						message: 'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting'
					}
				],
				'getter-return': 'warn',
				'no-underscore-dangle': 'off',
				'no-restricted-syntax': [
					'error',
					{
						selector: 'ForInStatement',
						message:
							'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
					},
					{
						selector: 'LabeledStatement',
						message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
					},
					{
						selector: 'WithStatement',
						message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
					}
				],
				'class-methods-use-this': 'off',

				// @typescript-eslint/plugin-eslint
				'@typescript-eslint/member-ordering': 'off',
				'@typescript-eslint/unbound-method': 'off',
				'@typescript-eslint/consistent-type-definitions': 'off',
				'@typescript-eslint/prefer-function-type': 'off',
				'@typescript-eslint/no-unsafe-function-type': 'off'
			}
		})
	),
	// Add HTML linting
	{
		files: ['packages/**/*.html'],
		plugins: { html }
	},
	// Add webcomponents rules
	{
		...eslintPluginWc['flat/recommended'],
		files: ['packages/core/src/**/*.ts']
	},
	// Add Lit rules
	{
		...eslintPluginLit['flat/recommended'],
		files: ['packages/core/src/**/*.ts']
	},
	// Add Lit a11y rules
	{
		files: ['packages/core/src/**/*.ts'],
		plugins: {
			'lit-a11y': {
				rules: fixupPluginRules(litA11yRules)
			}
		},
		rules: litA11yConfigs.recommended.rules
	},
	// Change some of the rules of the plugins
	{
		files: ['packages/core/src/**/*.ts'],
		rules: {
			// eslint-plugin-wc
			'wc/guard-super-call': 'off',

			// eslint-plugin-lit
			'lit/no-template-bind': 'error',
			'lit/no-duplicate-template-bindings': 'error',
			'lit/no-useless-template-literals': 'error',
			'lit/attribute-value-entities': 'error',
			'lit/binding-positions': 'error',
			'lit/no-invalid-html': 'error',
			'lit/no-value-attribute': 'error',
			'lit/no-invalid-escape-sequences': 'error',
			'lit/no-legacy-template-syntax': 'error',
			'lit/no-private-properties': 'error',
			'lit/no-native-attributes': 'error',
			'lit/no-classfield-shadowing': 'error',
			'lit/lifecycle-super': 'error'
		}
	},
	// Disable triple-slash-reference in documentation
	{
		files: ['packages/documentation/src/env.d.ts'],
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off'
		}
	},
	// Enable prettier through ESLint
	eslintPluginPrettierRecommended
];

export default config;
