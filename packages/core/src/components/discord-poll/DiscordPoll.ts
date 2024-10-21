import { consume, createContext, provide } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { messagesCompactMode, messagesLightTheme } from '../discord-messages/DiscordMessages.js';

export const multipleAnswersPoll = createContext<boolean>('multiple-answers');
export const pollEnded = createContext<boolean>('ended');
export const pollVoted = createContext<boolean>('voted');

@customElement('discord-poll')
export class DiscordPoll extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		:host {
			display: flex;
			flex-direction: column;
			background-color: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);
			border-radius: 8px;
			padding: 16px;
			width: 100%;
			max-width: 472px;
			min-width: 302px;
			box-sizing: border-box;
			position: relative;
			overflow: hidden;
		}

		.discord-poll-question {
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			margin: 0;
			font-size: 1rem;
			word-break: break-word;
			line-height: 1.25;
			font-weight: 500;
		}

		.discord-poll-select {
			font-size: 0.875rem;
			grid-area: prompt;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%) !important;
		}

		.discord-poll-answers {
			display: grid;
			grid-template-columns: 1fr;
			grid-auto-rows: 1fr;
			grid-gap: 8px;
			gap: 8px;
			margin: 8px 0 16px;
		}

		.discord-poll-footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.discord-poll-footer-votes-time {
			display: flex;
			align-items: center;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
			font-size: 0.875rem;
			line-height: 1.2857142857142858;
			font-weight: 400;
		}

		.discord-poll-footer-time::before {
			content: '∙';
			margin: 0px 0.5rem;
			font-weight: 800;
		}

		.discord-poll-footer-time {
			display: flex;
			align-items: center;
		}

		.discord-poll-footer-hover:hover {
			color: #fff;
			text-decoration: underline;
			cursor: pointer;
		}

		.discord-poll-color-show-results {
			color: #fff !important;
			font-size: 0.875rem;
			font-weight: 600;
		}

		.discord-poll-result-vote {
			display: flex;
			align-items: center;
			gap: 15px;
		}

		:host .discord-poll-button-vote {
			cursor: pointer;
			background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1) !important;
			color: hsl(0 calc(1 * 0%) 100% / 1) !important;
			padding: 9px 16px;
			border: none;
			border-radius: 3px;
			font-weight: 600;
		}

		:host .discord-poll-button-remove-vote {
			cursor: pointer;
			background-color: color-mix(in oklab, hsl(228 calc(1 * 6.7%) 14.7% / 1) 100%, black 0%) !important;
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%) !important;
			padding: 9px 16px;
			border: none;
			border-radius: 3px;
			font-weight: 600;
		}

		:host .discord-poll-button-vote-disabled {
			cursor: no-drop;
			opacity: 0.5;
		}
	`;

	@property({ type: String, attribute: 'question', reflect: true })
	public accessor question: string;

	@property({ type: String, attribute: 'time-end', reflect: true })
	public accessor timeEnd: string = '24h';

	@provide({ context: pollEnded })
	@property({ type: Boolean, attribute: 'ended', reflect: true })
	public accessor pollEnded: boolean = false;

	@provide({ context: multipleAnswersPoll })
	@property({ type: Boolean, reflect: true, attribute: 'multiple-answers' })
	public accessor multipleAnswers = false;

	@provide({ context: pollVoted })
	@property({ type: Boolean, reflect: true, attribute: 'voted' })
	public accessor pollVoted = false;

	/**
	 * Whether to use compact mode or not.
	 */
	@consume({ context: messagesCompactMode })
	@property({ type: Boolean, reflect: true, attribute: 'compact-mode' })
	public accessor compactMode = false;

	/**
	 * Whether to use ligth theme or not.
	 */
	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	public accessor selected: boolean = false;

	private accessor totVotes: number = 0;

	public override connectedCallback() {
		super.connectedCallback();

		new MutationObserver(() => {
			const answer = this.querySelectorAll('discord-poll-answer');
			for (let index = 0; index < answer?.length; index++) {
				if (answer[index].attributes.getNamedItem('selected')) this.selected = true;
				this.totVotes += answer[index].attributes.getNamedItem('votes')?.nodeValue
					? Number(answer[index].attributes.getNamedItem('votes')?.nodeValue)
					: 0;
			}
		});
	}

	protected override render() {
		const textPoll = this.multipleAnswers ? 'Select one answer' : 'Select one or more answers';

		return html`<div>
			<h4 class="discord-poll-question">${this.question}</h4>
			<div class="discord-poll-select">${textPoll}</div>
			<div class="discord-poll-answers">
				<slot></slot>
			</div>
			<div class="discord-poll-footer">
				<div class="discord-poll-footer-votes-time">
					<span class="discord-poll-footer-hover">${this.totVotes} votes</span>
					<div class="discord-poll-footer-time">${this.pollEnded ? 'Poll closed' : `${this.timeEnd} left`}</div>
				</div>
				${when(
					!this.pollEnded && !this.pollVoted,
					() =>
						html`<div class="discord-poll-result-vote">
							<div class="discord-poll-footer-hover discord-poll-color-show-results">Show results</div>
							<button
								type="button"
								class="${classMap({ 'discord-poll-button-vote': true, 'discord-poll-button-vote-disabled': !this.selected })}"
							>
								<div>Vote</div>
							</button>
						</div>`
				)}
				${when(
					!this.pollEnded && this.pollVoted,
					() => html`
						<button type="button" class="discord-poll-button-remove-vote">
							<div>Remove vote</div>
						</button>
					`
				)}
			</div>
		</div> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-poll': DiscordPoll;
	}
}
