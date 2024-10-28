import { consume } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { DiscordComponentsError } from '../../util.js';
import { messagesCompactMode, messagesLightTheme } from '../discord-messages/DiscordMessages.js';
import { multipleAnswersPoll, pollEnded, pollVoted, showResults } from '../discord-poll/DiscordPoll.js';
import VerifiedTick from '../svgs/VerifiedTick.js';

@customElement('discord-poll-answer')
export class DiscordPollAnswer extends LitElement {
	/**
	 * @internal
	 */
	public static override readonly styles = css`
		.discord-answer-container {
			display: flex;
			cursor: pointer;
		}

		.discord-answer-emoji {
			width: 24px;
			height: 24px;
			margin-right: 2px;
			border-radius: 3px;
		}

		.discord-checkbox-div-multiple-answer {
			flex-shrink: 0;
			width: 20px;
			height: 20px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 3px;
			background-color: transparent;
			border: 2px solid color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
		}

		.discord-checkbox-div-multiple-answer-selected {
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 3px;
			background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1);
		}

		.discord-checkbox-div-answer-selected-ended-winner {
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: seagreen;
		}

		.discord-checkbox-div-answer-selected-ended-no-winner {
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: white;
			color: black !important;
		}

		.discord-checkbox-div-answer-selected-voted {
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: hsl(235 calc(1 * 85.6%) 64.7% / 1);
		}

		.discord-checkbox-div-answer {
			flex-shrink: 0;
			width: 20px;
			height: 20px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			background-color: transparent;
			border: 2px solid color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
		}

		.discord-checkbox-div-answer-selected {
			margin: 2px;
			width: 10px;
			height: 10px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 99px;
			border: 2px solid transparent;
			background-color: color-mix(in oklab, hsl(235 calc(1 * 86.1%) 77.5% / 1) 100%, black 0%);
		}

		.discord-answer-hidden {
			display: none;
		}

		.discord-answer-flex {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		.discord-answer-selected {
			outline: 1px solid color-mix(in oklab, hsl(235 calc(1 * 86.1%) 77.5% / 1) 100%, black 0%) !important;
		}

		.discord-answer-selected-ended {
			outline: 1px solid hsl(145 calc(1 * 65%) 39.2% / 1) !important;
		}

		.discord-answer {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			min-height: 50px;
			padding: 8px 16px;
			box-sizing: border-box;
			background-color: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 0.3) 100%, hsl(0 0% 0% / 0.3) 0%);
			border-radius: 8px;
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			word-break: break-word;
			overflow: hidden;
			outline: 1px solid transparent;
			z-index: 1;
			transition:
				background-color 170ms ease,
				outline-color 170ms ease;
		}

		:host([light-theme]) .discord-answer {
			background-color: color-mix(in oklab, hsl(223 calc(1 * 5.8%) 52.9% / 0.08) 100%, hsl(0 0% 0% / 0.08) 0%) !important;
		}

		:host([light-theme]) .discord-background-color-default {
			background-color: color-mix(in oklab, hsl(223 calc(1 * 5.8%) 52.9% / 0.2) 100%, hsl(0 0% 0% / 0.2) 0%) !important;
		}

		:host([light-theme]) .discord-awnswer-title,
		:host([light-theme]) .discord-quantity-votes,
		:host([light-theme]) .discord-percentage-votes {
			color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-checkbox-div-answer,
		:host([light-theme]) .discord-checkbox-div-multiple-answer {
			border-color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%) !important;
		}

		:host([light-theme]) .discord-checkbox-div-answer-selected-ended-no-winner {
			background-color: color-mix(in oklab, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%, black 0%);
			color: white !important;
		}

		.discord-answer-no-margin {
			margin: 0;
		}

		.discord-quantity-votes:hover {
			cursor: pointer;
			text-decoration: underline;
		}

		.discord-answer-backdround-color {
			content: '';
			position: absolute;
			height: 100%;
			left: 0;
			z-index: -1;
		}

		.discord-background-color-winner {
			background-color: color-mix(in oklab, hsl(145 calc(1 * 65%) 39.2% / 0.2) 100%, hsl(0 0% 0% / 0.2) 0%);
		}

		.discord-background-color-default {
			background-color: color-mix(in oklab, hsl(228 calc(1 * 6%) 32.5% / 0.48) 100%, hsl(0 0% 0% / 0.48) 0%);
		}

		.discord-background-color-selected {
			background-color: color-mix(in oklab, hsl(235 calc(1 * 85.6%) 64.7% / 0.2) 100%, hsl(0 0% 0% / 0.2) 0%);
		}
	`;

	@property({ type: String, attribute: 'emoji', reflect: true })
	public accessor emoji: string;

	@property({ type: String, attribute: 'answer', reflect: true })
	public accessor answer: string;

	@property({ type: Number, attribute: 'votes', reflect: true })
	public accessor votes: number = 0;

	@property({ type: Boolean, attribute: 'selected', reflect: true })
	public accessor selected: boolean = false;

	/**
	 * Whether to use compact mode or not.
	 */
	@consume({ context: messagesCompactMode })
	public accessor compactMode = false;

	@consume({ context: multipleAnswersPoll })
	public accessor multipleAnswers = false;

	@consume({ context: pollEnded })
	public accessor pollEnded = false;

	@consume({ context: pollVoted })
	public accessor pollVoted = false;

	@consume({ context: showResults })
	public accessor showResult = false;

	/**
	 * Whether to use ligth theme or not.
	 */
	@consume({ context: messagesLightTheme })
	@property({ type: Boolean, reflect: true, attribute: 'light-theme' })
	public accessor lightTheme = false;

	private accessor totalVotesPoll = 0;

	private accessor percentageVoted: number;

	private accessor arrayAnswers: Array<{answer: string, value: number}> = [];

	private accessor winners: string[] = [];

	public override connectedCallback() {
		super.connectedCallback();

		const answer: any = this.parentElement?.getElementsByTagName('discord-poll-answer');

		// get teh number total of votes
		if (answer) {
			for (let index = 0; index < answer?.length; index++) {
				const resolvedNumber = answer[index].attributes.getNamedItem('votes')
					? Number(answer[index].attributes.getNamedItem('votes')?.nodeValue)
					: 0;
				this.arrayAnswers.push({ answer: answer[index].attributes.getNamedItem('answer')?.nodeValue, value: resolvedNumber });
				this.arrayAnswers =  this.arrayAnswers.toSorted((a, b) => b.value - a.value);
				this.totalVotesPoll += resolvedNumber;
			}
		}

		for (let index = 0; index < this.arrayAnswers?.length; index++) {
			if (!this.winners.includes(this.arrayAnswers[index].answer)) {
				this.winners.push(this.arrayAnswers[index].answer);
			}

			if (this.arrayAnswers[index + 1]) {
				if (this.arrayAnswers[index].value === this.arrayAnswers[index + 1].value) {
					if (!this.winners.includes(this.arrayAnswers[index + 1].answer)) {
						this.winners.push(this.arrayAnswers[index + 1].answer);
					}
				} else {
					break;
				}
			}
		}

		// Chek if is single vote and is has more one selected
		if (this.parentElement?.getAttribute('multiple-answers') !== '') {
			let selectedCount = 0;

			if (answer) {
				for (const element of answer) if (element.selected) selectedCount++;
			}

			if (selectedCount > 1) {
				throw new DiscordComponentsError('<discord-poll> single vote was selected more than 1 answer');
			}
		}

		this.percentageVoted = (this.votes / this.totalVotesPoll) * 100;

	}

	protected override render() {
		this.percentageVoted =
			this.percentageVoted.toPrecision(3).split('.')[1] === '0'
				? Number(this.percentageVoted.toPrecision(3).split('.')[0])
				: Number(this.percentageVoted.toPrecision(3));

		return html`
			<label>
				<div class="${classMap({ 'discord-answer-container': !this.pollVoted && !this.pollEnded && !this.showResult })}">
					<div
						class="${classMap({
							'discord-answer': true,
							'discord-answer-selected': this.selected && !this.pollEnded && !this.showResult,
							'discord-answer-selected-ended': this.pollEnded && this.winners.includes(this.answer)
						})}"
					>
						<div
							class=${classMap({
								'discord-answer-backdround-color': true,
								'discord-background-color-selected': !this.pollEnded && this.selected && this.pollVoted,
								'discord-background-color-winner': this.pollEnded && this.winners.includes(this.answer),
								'discord-background-color-default':
									(this.pollEnded && !this.winners.includes(this.answer)) ||
									(!this.pollEnded && !this.selected && this.pollVoted) ||
									this.showResult
							})}
							style="width:${this.percentageVoted}%;"
						></div>
						<div class="discord-answer-flex">
							${when(this.emoji, () => html`<img class="discord-answer-emoji" src="${this.emoji}" alt="emoji" />`)}
							<div class="discord-awnswer-title">${this.answer}</div>
						</div>
						<div class="discord-answer-flex">
							${when(
								this.pollVoted || this.pollEnded || this.showResult,
								() =>
									html`<h5 class="discord-answer-no-margin discord-quantity-votes">
										${this.votes} ${this.votes > 1 || this.votes === 0 ? 'votes' : 'vote'}
									</h5>`
							)}
							${when(
								this.pollVoted || this.pollEnded || this.showResult,
								() => html`<h4 class="discord-answer-no-margin discord-percentage-votes">${this.percentageVoted}%</h4>`
							)}
							${when(
								this.selected && !this.showResult,
								() =>
									when(
										this.multipleAnswers,
										() =>
											when(
												this.pollEnded,
												() =>
													when(
														this.winners.includes(this.answer),
														() =>
															html`<div class="discord-checkbox-div-answer-selected-ended-winner">
																${VerifiedTick({ style: 'width:24px;height:24px;' })}
															</div>`,
														() =>
															html`<div class="discord-checkbox-div-answer-selected-ended-no-winner">
																${VerifiedTick({ style: 'width:24px;height:24px;' })}
															</div>`
													),
												() =>
													when(
														!this.pollVoted,
														() =>
															html`<div class="discord-checkbox-div-multiple-answer-selected">
																${VerifiedTick({ style: 'width:24px;height:24px;' })}
															</div>`,
														() =>
															html`<div class="discord-checkbox-div-answer-selected-voted">
																${VerifiedTick({ style: 'width:24px;height:24px;' })}
															</div>`
													)
											),
										() =>
											when(
												this.pollEnded,
												() =>
													html`<div class="discord-checkbox-div-answer-selected-ended-winner">
														${VerifiedTick({ style: 'width:24px;height:24px;' })}
													</div>`,
												() =>
													when(
														!this.pollVoted,
														() => html`
															<div class="discord-checkbox-div-answer">
																<div class="discord-checkbox-div-answer-selected"></div>
															</div>
														`,
														() =>
															html`<div class="discord-checkbox-div-answer-selected-voted">
																${VerifiedTick({ style: 'width:24px;height:24px;' })}
															</div>`
													)
											)
									),
								() =>
									when(
										!this.pollEnded && !this.pollVoted && !this.showResult,
										() =>
											html`<div
												class="${classMap({
													'discord-checkbox-div-multiple-answer': this.multipleAnswers,
													'discord-checkbox-div-answer': !this.multipleAnswers
												})}"
											></div>`
									)
							)}
						</div>
					</div>
					<span class="discord-answer-hidden"><input type="checkbox" @click=${() => this._onClick()} /></span>
				</div>
			</label>
		`;
	}

	@eventOptions({ once: false, capture: true, passive: true })
	protected _onClick() {
		if (this.pollEnded || this.pollVoted) return;

		const answer = this.parentElement;
		const buttonVote = answer?.shadowRoot?.querySelector('button.discord-poll-button-vote');
		const pollAnswers = answer?.getElementsByTagName('discord-poll-answer');

		if (this.selected) {
			this.selected = false;

			if (buttonVote) {
				if (answer?.getAttribute('multiple-answers') === '') {
					let selecteds = 0;
					if (pollAnswers) {
						for (const pollAnswer of pollAnswers) {
							if (pollAnswer.selected) selecteds++;
						}
					}

					if (selecteds > 0) {
						buttonVote.className = 'discord-poll-button-vote';
						return;
					}
				}

				buttonVote.className = 'discord-poll-button-vote discord-poll-button-vote-disabled';
			}

			return;
		}

		if (answer?.getAttribute('multiple-answers') !== '' && pollAnswers) {
			for (const pollAnswer of pollAnswers) {
				pollAnswer.selected = false;
			}
		}

		if (buttonVote) buttonVote.className = 'discord-poll-button-vote';

		this.selected = true;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-poll-answer': DiscordPollAnswer;
	}
}
