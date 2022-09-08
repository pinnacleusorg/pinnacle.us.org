<script lang="ts">
	import type { Hackathon } from "$lib/schema/hackathon";
	export let compact = false;
	export let event: Hackathon;

	$: src =
		window.location.hostname === "localhost"
			? "/image/internal.png"
			: `https://static.pinnacle.us.org/2023/partner/${event.internal_title}.png`;
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
			color: $bg;
			grid-column: 1 / 1;
			grid-row: 2 / 2;

			margin: 3px auto;
			text-align: center;
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
