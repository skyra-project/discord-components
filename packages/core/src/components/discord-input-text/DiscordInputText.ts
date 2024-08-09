import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { DiscordComponentsError } from '../../util.js';
import { messagesLightTheme } from '../discord-messages/DiscordMessages.js';

@customElement('discord-input-text')
export class DiscordInputText extends LitElement {
	public static override readonly styles = css`
		.discord-input-text {
			width: 100%;
			margin-bottom: 1em;
		}

		.discord-label-input-text {
			margin-bottom: 8px;
			font-size: 12px;
			line-height: 1.3333333333333333;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.02em;
			color: #b0b5bc;
		}

		.discord-warn-length {
			display: flex;
			align-items: center;
			font-size: 12px;
			line-height: 1.3333333333333333;
			font-weight: 700;
			text-transform: normal !important;
			letter-spacing: 0.02em;
			color: #b0b5bc;
		}

		.discord-input-text-required {
			padding-left: 4px;
			color: red !important; /* Here need danger color discord */
		}

		.discord-input-text-container {
			width: 100%;
			display: flex;
			flex: collmun;
			position: relative;
		}

		.discord-paragraph-input-text {
			width: 100%;
			resize: none;
			box-sizing: border-box;
			height: 83px;
			padding: 8px 38.92px 8px 8px;
			border-radius: 3px;
			border: 1px solid #b0b5bc;
			background-color: #1e1f22;
			color: #b0b5bc;
		}

		.discord-short-input-text {
			width: 100%;
			resize: none;
			box-sizing: border-box;
			height: 40px;
			padding: 8px 38.92px 8px 8px;
			border-radius: 3px;
			border: 1px solid #b0b5bc;
			background-color: #1e1f22;
			color: #b0b5bc;
		}

		input,
		textarea,
		::placeholder {
			font-weight: 400;
			font-size: 16px;
			color: #b0b5bc;
			opacity: 0.8;
		}

		.discord-paragraph-input-text::-webkit-scrollbar {
			width: 8px;
			margin-right: 5px;
			background-color: transparent;
		}

		.discord-paragraph-input-text::-webkit-scrollbar-track {
			background-color: rgba(255, 255, 255, 0.2);
			margin-right: 1em auto;
			border-radius: 10px;
		}

		.discord-paragraph-input-text::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.5);
			margin-right: 1em auto;
		}

		.discord-max-length-textarea {
			font-size: small;
			position: absolute;
			display: flex;
			color: #b0b5bc;
			right: 0;
			bottom: 0;
			padding-right: 16px;
		}

		:host .discord-warn-length * {
			color: #ed9ea0 !important;
		}

		:host([light-theme]) .discord-warn-length * {
			color: #ed9ea0 !important;
		}

		:host([light-theme]) .discord-short-input-text,
		:host([light-theme]) .discord-label-input-text {
			color: #42464b;
		}

		:host([light-theme]) .discord-paragraph-input-text,
		:host([light-theme]) .discord-short-input-text {
			background-color: rgba(204, 204, 204, 0.5);
		}

		:host([light-theme]) input,
		:host([light-theme]) textarea,
		:host([light-theme]) ::placeholder {
			font-weight: 400;
			font-size: 16px;
			color: #42464b;
			opacity: 0.8;
		}

		.discord-message-needed-input {
			background-color: white;
			position: absolute;
			align-items: center;
			gap: 5px;
			z-index: 10;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0;
			display: none;
			transition: 0.5s;
			color: black;
			border-radius: 5px;
			text-align: center;
			font-family: system-ui;
			pointer-events: none;
			padding: 10px;
		}

		.discord-message-needed-input::after {
			content: '';
			position: absolute;
			bottom: 100%; /* Posiciona a seta acima da div */
			left: 0;
			transform: translateX(50%);
			border-width: 10px; /* Tamanho da seta */
			border-style: solid;
			border-color: transparent transparent #ffffff transparent; /* Seta apontando para cima */
		}

		.icon {
			width: 25px;
			height: 25px;
			background-color: darkorange;
			border-radius: 5px;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-weight: bold;
			font-size: 18px;
			line-height: 1;
			text-align: center;
		}

		.exclamation {
			display: flex;
			flex-direction: column;
			align-items: center;
			line-height: 1;
		}
	`;

	/**
	 * The type of input text
	 */
	@property({ reflect: true, attribute: 'type', type: String })
	public accessor type: 'paragraph' | 'short' = 'paragraph';

	/**
	 * if the input text is required
	 */
	@property({ reflect: true, attribute: 'required', type: Boolean })
	public accessor required: boolean = false;

	/**
	 * The label of input text
	 */
	@property({ reflect: true, attribute: 'label', type: String })
	public accessor label: string;

	/**
	 * The place of input text
	 */
	@property({ reflect: true, attribute: 'placeholder', type: String })
	public accessor placeholder: string;

	/**
	 * The minimal length of input text
	 */
	@property({ reflect: true, attribute: 'min_length', type: Number })
	public accessor min_length: number;

	/**
	 * The maximal length of input text
	 */
	@property({ reflect: true, attribute: 'max_length', type: Number })
	public accessor max_length: number = 4_000;

	/**
	 * The pre-field of input text
	 */
	@property({ reflect: true, attribute: 'value', type: String })
	public accessor value: string;

	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	@property({ type: Number })
	private accessor _maxLengthCalc: number;

	@property({ type: Boolean })
	private accessor _warn: boolean = false;

	private readonly validInputTextTypes = new Set(['short', 'paragraph']);

	private checkNeededArgument() {
		if (!this.label) {
			throw new DiscordComponentsError('Label is required to input text');
		} else if (!this.type) {
			throw new DiscordComponentsError('Type is required to input text');
		}
	}

	private checkType() {
		if (typeof this.type !== 'string') {
			throw new TypeError('DiscordInputText `type` prop must be a string.');
		} else if (!this.validInputTextTypes.has(this.type)) {
			throw new RangeError("DiscordInputText `type` prop must be one of: 'short', 'paragraph'");
		}
	}

	public override render() {
		this.checkNeededArgument();
		this.checkType();

		return html`
			<div class="discord-input-text">
				<div class=${classMap({ 'discord-warn-length': this._warn })}>
					<h2 class="discord-label-input-text">
						${this.label.slice(0, 45)}${when(
							this.required && !this._warn,
							() => html`<span class="discord-input-text-required">*</span>`
						)}
					</h2>
					${when(
						this._warn,
						() =>
							html`<span class="discord-warn-length">
								- Must contain between ${this.min_length} and ${this.max_length} characters</span
							>`
					)}
				</div>
				<div class="discord-input-text-container">
					${when(
						this.type === 'paragraph' && !this.required,
						() => html`
							<div class="discord-input-text-container">
								<textarea
									@input=${(event: InputEvent) => this.changeMaxWords(event)}
									class="discord-paragraph-input-text"
									type="text"
									aria-labelledby=":r20:"
									area-invalid="true"
									minlength="${this.min_length}"
									maxlength="${this.max_length}"
									placeholder="${ifDefined(this.placeholder)}"
									rows="3"
								>
${this.value}</textarea
								>
								<div class="discord-max-length-textarea">
									<span
										>${this._maxLengthCalc
											? this._maxLengthCalc
											: this.value
												? this.max_length - this.value.length
												: this.max_length}</span
									>
								</div>
							</div>
						`
					)}
					${when(
						this.type === 'paragraph' && this.required,
						() => html`
							<div class="discord-input-text-container">
								<textarea
									@input=${(event: InputEvent) => this.changeMaxWords(event)}
									class="discord-paragraph-input-text"
									type="text"
									aria-labelledby=":r20:"
									area-invalid="true"
									minlength="${this.min_length}"
									maxlength="${this.max_length}"
									placeholder="${ifDefined(this.placeholder)}"
									rows="3"
									required
								>
${this.value}</textarea
								>
								<div class="discord-max-length-textarea">
									<span
										>${this._maxLengthCalc
											? this._maxLengthCalc
											: this.value
												? this.max_length - this.value.length
												: this.max_length}</span
									>
								</div>
							</div>
						`
					)}
					${when(
						this.type === 'short' && !this.required,
						() => html`
                        <input
                        @input=${(event: InputEvent) => this.changeMaxWords(event)}
                        class="discord-short-input-text"
                        type="text"
                        aria-labelledby=":r20:"
                        area-invalid="true"
                        minlength="${this.min_length}"
                        maxlength="${this.max_length}"
                        placeholder="${ifDefined(this.placeholder)}"
                        rows="3"
                        ${this.required ? 'required' : ''}>${this.value}</input>
                        `
					)}
					${when(
						this.type === 'short' && this.required,
						() => html`
                        <input
                        @input=${(event: InputEvent) => this.changeMaxWords(event)}
                        class="discord-short-input-text"
                        type="text"
                        aria-labelledby=":r20:"
                        area-invalid="true"
                        minlength="${this.min_length}"
                        maxlength="${this.max_length}"
                        placeholder="${ifDefined(this.placeholder)}"
                        rows="3"
                        required
                        ${this.required ? 'required' : ''}>${this.value}</input>
                        `
					)}
				</div>
				<div class=${classMap({ 'discord-warn-length': this._warn })}>
					<h2 class="discord-warn-length">
						${when(this._warn, () => html`<span>Must contain ${this.min_length} characters of length or more</span>`)}
					</h2>
				</div>
				<div class="discord-message-needed-input">
					<div class="icon">
						<div class="exclamation">!</div>
					</div>
					<span>Fill in this field.</span>
				</div>
			</div>
		`;
	}

	private changeMaxWords(event: InputEvent) {
		const inputedText: any = event.target!;

		if (inputedText.value.length < this.min_length) {
			this._warn = true;
		} else {
			this._warn = false;
		}

		this._maxLengthCalc = this.max_length - inputedText.value.length;

		const messageNeeded: any = this.shadowRoot?.querySelector('div.discord-message-needed-input');

		if (messageNeeded.style.display) {
			messageNeeded.style.opacity = 0;
			window.setTimeout(() => {
				messageNeeded.style.display = '';
			}, 1_000);
		}
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-input-text': DiscordInputText;
	}
}
