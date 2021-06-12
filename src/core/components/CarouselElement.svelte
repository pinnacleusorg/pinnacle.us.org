
<script lang="ts">
	import type { Hackathon } from "../schema/hackathon.schema";
	export let compact = false;
	export let event: Hackathon;
	export let showDate = false;
</script>

<a class="element {compact ? 'compact':''}" href="{event.website}" target="_blank" rel="noopener">
	<div class="element-grid">
		<img class="event-img" src="https://static.pinnacle.us.org/2021/vendor/{event.internal_title}.png" alt="{event.title}">
		<p>{event.title}</p>
		{#if showDate}
			<div class="date">
				<img src="/image/button-bg.svg" alt="bg" aria-hidden="true">
				<span>{new Date(event.startDate).toLocaleDateString()}</span>
			</div>
		{/if}
	</div>
</a>

<style lang="scss">
	.element {
		text-decoration: none;
		min-width: 100%;
		width: 100%;

		position: relative;

		scroll-snap-align: start;
		scroll-snap-stop: normal;

		.element-grid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 220px 60px;
			max-width: 280px;
			margin: auto;
		}

		.event-img {
			grid-column: 1 / 1;
			grid-row: 1 / 1;

			border-radius: 5px;
			max-width: 90%;
			max-height: 90%;
			margin: auto;
		}

		p {
			grid-column: 1 / 1;
			grid-row: 2 / 2;

			margin: auto;
			font-size: 1.5rem;
			text-align: center;
		}

		.date {
			color: var(--pinnacle-bg-light);
			font-size: 0.9rem;
			padding: 2px 12px;
			position: absolute;
			top: 0;
			right: 0;

			img {
				position: absolute;
				top: 0;
				right: 0;
				width: 80px;
				z-index: 0;
			}

			span {
				position: absolute;
				top: 0;
				right: 0;
				padding: 3.5px 10px;
				width: 60px;
				text-align: center;
				z-index: 1;
			}
		}

		&:hover .date {
			color: var(--pinnacle-bg-light);
		}

		&.compact {
			min-width: calc(20% - 20px);
			width: unset;

			.element-grid {
				grid-template-rows: 140px 60px;
			}

			.event-img {
				max-width: 140px;
				max-height: 140px;
			}

			p {
				font-size: 1rem;
				max-width: 100px;
			}
		}

		@media (min-width: 992px) {
			min-width: calc(25% - 15px);

			&.compact {
				p {
					font-size: 1.2rem;
					max-width: 130px;
				}
			}
		}
	}
</style>
