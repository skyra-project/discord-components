import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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
			color: color-mix(in oklab, hsl(215 calc(1 * 8.8%) 73.3% / 1) 100%, black 0%);
		}

		.discord-text-input-warning-length {
			display: flex;
			align-items: center;
			font-size: 12px;
			line-height: 1.3333333333333333;
			font-weight: 700;
			text-transform: normal !important;
			letter-spacing: 0.02em;
			color: #b0b5bc;
			gap: 3px;
		}

		.discord-text-input-warning-error-text {
			font-size: 12px;
			font-weight: 500;
			font-style: italic;
			text-transform: none;
		}

		.discord-text-input-warning-bottom-error-text {
			font-size: 12px;
			line-height: 1.3333333333333333;
			font-weight: 400;
		}

		.discord-text-input-required {
			padding-left: 4px;
			color: hsl(359 calc(1 * 87.3%) 59.8% / 1);
		}

		.discord-text-input-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
		}

		.discord-text-input-paragraph {
			width: 100%;
			resize: none;
			box-sizing: border-box;
			height: 83px;
			padding: 8px 38.92px 8px 8px;
			border-radius: 3px;
			border: medium;
			background-color: #1e1f22;
			color: #b0b5bc;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
		}

		.discord-text-input-short {
			width: 100%;
			resize: none;
			box-sizing: border-box;
			height: 40px;
			padding: 8px 38.92px 8px 8px;
			border-radius: 3px;
			border: medium;
			background-color: #1e1f22;
			color: #b0b5bc;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
		}

		input,
		textarea,
		::placeholder {
			font-weight: 400;
			font-size: 16px;
			color: #b0b5bc;
			opacity: 0.8;
		}

		.discord-text-input-paragraph::-webkit-scrollbar {
			width: 8px;
			margin-right: 5px;
			background-color: transparent;
		}

		.discord-text-input-paragraph::-webkit-scrollbar-track {
			background-color: rgba(255, 255, 255, 0.2);
			margin-right: 1em auto;
			border-radius: 10px;
		}

		.discord-text-input-paragraph::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.5);
			margin-right: 1em auto;
		}

		.discord-text-input-textarea-max-length {
			font-size: small;
			position: absolute;
			display: flex;
			color: #b0b5bc;
			right: 0;
			bottom: 0;
			padding-right: 16px;
		}

		:host .discord-text-input-warning-length * {
			color: color-mix(in oklab, hsl(358 calc(1 * 92.9%) 72.4% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-text-input-warning-length * {
			color: color-mix(in oklab, hsl(360 calc(1 * 60.2%) 39.4% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-text-input-short,
		:host([light-theme]) .discord-label-input-text {
			color: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 1) 100%, black 0%);
		}

		:host([light-theme]) .discord-text-input-paragraph,
		:host([light-theme]) .discord-text-input-short {
			background-color: rgb(253, 253, 253);
			border: 1px solid #b0b5bc;
		}

		:host([light-theme]) input,
		:host([light-theme]) textarea,
		:host([light-theme]) ::placeholder {
			font-weight: 400;
			font-size: 16px;
			color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
			opacity: 0.8;
		}

		.discord-text-input-message-needed-input,
		.discord-text-input-message-needed-min-length {
			background-color: white;
			position: absolute;
			align-items: center;
			gap: 5px;
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
			min-width: 50%;
			border: black solid 1px;
			z-index: 25;
		}

		.discord-text-input-message-needed-input::after,
		.discord-text-input-message-needed-min-length::after {
			content: '';
			position: absolute;
			bottom: 100%; /* Positions the arrow above the div */
			left: 0;
			transform: translateX(50%);
			border-width: 10px !important; /* Arrow size */
			border-style: solid !important;
			border-color: transparent transparent white transparent !important; /* Arrow pointing up */
		}

		:host([light-theme]) .discord-text-input-message-needed-input::after,
		:host([light-theme]) .discord-text-input-message-needed-min-length::after {
			border-color: transparent transparent #bfbfbf transparent !important; /* Arrow pointing up */
		}

		.discord-text-input-message-needed-min-length::after {
			transform: translate(500%);
		}

		.discord-text-input-message-needed-min-length {
			left: 50% !important;
			width: max-content;
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
	@property({ reflect: true, attribute: 'min-length', type: Number })
	public accessor minLength = 0;

	/**
	 * The maximal length of input text
	 */
	@property({ reflect: true, attribute: 'max-length', type: Number })
	public accessor maxLength = 4_000;

	/**
	 * The theme of modal
	 */
	@consume({ context: messagesLightTheme, subscribe: true })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	/**
	 * The default value of modal
	 */
	@property({ type: String, reflect: true, attribute: 'default-value' })
	public accessor defaultValue = '';

	@state()
	protected accessor value = '';

	@state()
	public accessor hasWarning = false;

	@state()
	protected accessor calculatedMaxLength: number | null = null;

	@state()
	protected accessor calculatedCharactersCount = 0;

	public override connectedCallback() {
		super.connectedCallback();
		if (this.defaultValue) {
			this.value = this.defaultValue;
			this.calculatedCharactersCount = this.value.length;
		}
	}

	public resetState() {
		this.hasWarning = false;
		this.calculatedMaxLength = null;
		this.calculatedCharactersCount = 0;
		if (this.defaultValue) {
			this.value = this.defaultValue;
		} else {
			this.value = '';
		}
	}

	public override render() {
		this.checkNeededArgument();
		this.checkType();

		return html`
			<div class="discord-input-text">
				<div class=${classMap({ 'discord-text-input-warning-length': this.hasWarning })}>
					<h2 class="discord-label-input-text">
						${this.label.slice(0, 45)}${when(
							this.required && !this.hasWarning,
							() => html`<span class="discord-text-input-required">*</span>`
						)}
					</h2>
					${when(
						this.hasWarning,
						() =>
							html`<span class="discord-text-input-warning-length discord-text-input-warning-error-text">
								- Must be between ${this.minLength} and ${this.maxLength} in length.</span
							>`
					)}
				</div>
				<div class="discord-text-input-container">
					${when(
						this.type === 'paragraph',
						() => html`
							<div class="discord-text-input-container">
								<textarea
									@input=${(event: InputEvent) => this.handleInputChange(event)}
									.required=${this.required}
									.value=${this.value}
									class="discord-text-input-paragraph"
									type="text"
									minlength="${this.minLength}"
									maxlength="${this.maxLength}"
									placeholder="${ifDefined(this.placeholder)}"
									rows="3"
								></textarea>
								<div class="discord-text-input-textarea-max-length">
									<span
										>${when(
											this.valueIsNotNullOrUndefined(this.calculatedMaxLength),
											() => this.calculatedMaxLength,
											() =>
												when(
													this.value,
													() => this.maxLength - this.value.length,
													() => this.maxLength
												)
										)}</span
									>
								</div>
							</div>
						`
					)}
					${when(
						this.type === 'short',
						() =>
							html`<input
								@input=${(event: InputEvent) => this.handleInputChange(event)}
								.required=${this.required}
								.value=${this.value}
								class="discord-text-input-short"
								type="text"
								minlength="${this.minLength}"
								maxlength="${this.maxLength}"
								placeholder="${ifDefined(this.placeholder)}"
								rows="3"
							/>`
					)}
				</div>
				${when(
					this.required,
					() => html`
						<div class="discord-text-input-message-needed-input">
							<div class="icon">
								<div class="exclamation">!</div>
							</div>
							<span>Please fill out this field.</span>
						</div>
					`
				)}
				${when(
					this.valueIsNotNullOrUndefined(this.minLength),
					() => html`
						<div class="discord-text-input-message-needed-min-length">
							<div class="icon">
								<div class="exclamation">!</div>
							</div>
							<span
								>Increase this text to ${this.minLength} characters or more. You are currently using ${this.calculatedCharactersCount}
								characters</span
							>
						</div>
					`
				)}
				<div class=${classMap({ 'discord-text-input-warning-length': this.hasWarning })}>
					<h2 class="discord-text-input-warning-length">
						${when(
							this.hasWarning && this.valueIsNotNullOrUndefined(this.minLength),
							() =>
								html`<span class="discord-text-input-warning-bottom-error-text"
									>Must be ${this.minLength} characters or more in length.</span
								>`
						)}
					</h2>
				</div>
			</div>
		`;
	}

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

	/**
	 * Check if the value is not null or undefined
	 *
	 * @param value - The value to check if it is not null or undefined
	 * @returns If the value is not null or undefined
	 */
	private valueIsNotNullOrUndefined(value: number | null | undefined): value is number {
		return value !== undefined && value !== null;
	}

	private handleInputChange(event: InputEvent) {
		const inputedText = event?.target;

		this.value = inputedText instanceof HTMLTextAreaElement || inputedText instanceof HTMLInputElement ? inputedText.value : '';

		if (inputedText instanceof HTMLTextAreaElement || inputedText instanceof HTMLInputElement) {
			const newLengthValue = inputedText.value.length;

			if (newLengthValue === 0 && this.minLength === 0 && this.valueIsNotNullOrUndefined(this.maxLength) && this.required) {
				this.hasWarning = true;
			} else {
				this.hasWarning = newLengthValue < this.minLength;
			}

			this.calculatedMaxLength = this.maxLength - newLengthValue;
			this.calculatedCharactersCount = newLengthValue;
		}

		const messageNeeded = this.shadowRoot?.querySelector('div.discord-text-input-message-needed-input');
		const messageNeededMinLength = this.shadowRoot?.querySelector('div.discord-text-input-message-needed-min-length');

		if (
			(inputedText as HTMLTextAreaElement).value.length >= this.minLength &&
			messageNeededMinLength instanceof HTMLDivElement &&
			messageNeededMinLength.style.display
		) {
			messageNeededMinLength.style.opacity = '0';
			globalThis.setTimeout(() => {
				messageNeededMinLength.style.display = '';
			}, 1_000);
		}

		if (messageNeeded instanceof HTMLDivElement && messageNeeded.style.display) {
			messageNeeded.style.opacity = '0';
			globalThis.setTimeout(() => {
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
