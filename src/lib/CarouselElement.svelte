<script lang="ts">
	import type { Hackathon } from "$lib/schema/hackathon";
	export let compact = false;
	export let event: Hackathon;
	export let showDate = false;

	$: src =
		window.location.hostname === "127.0.0.1"
			? "/image/internal.png"
			: `https://static.pinnacle.us.org/2021/vendor/${event.internal_title}.png`;
</script>

<a
	class="element {compact ? 'compact' : ''}"
	href={event.website}
	target="_blank"
	rel="noopener"
>
	<div class="element-grid">
		<img class="event-img" {src} alt={event.title} />
		<p>{event.title}</p>
		{#if showDate}
			<div class="date">{new Date(event.startDate).toLocaleDateString()}</div>
		{/if}
	</div>
</a>

<style lang="scss">
	.element {
		text-decoration: none;
		min-width: 100%;
		width: 100%;

		position: relative;
		overflow: clip;

		scroll-snap-align: start;
		scroll-snap-stop: normal;

		.element-grid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 220px 60px;
			max-width: 280px;
			margin: auto;
			overflow: clip;
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

			margin: 3px auto;
			text-align: center;
		}

		.date {
			color: var(--pinnacle-bg-light);
			font-size: 0.9rem;
			padding: 2px 12px;
			position: absolute;
			top: 0;
			right: 0;
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
