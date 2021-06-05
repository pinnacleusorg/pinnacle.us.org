
<script lang="ts">
	import type { Hackathon } from "../schema/hackathon.schema";
	export let compact = false;
	export let event: Hackathon;
</script>

<a class="element {compact ? 'compact':''}" href="{event.website}" target="_blank">
	<div class="element-grid">
		<img src="/vendor/{event.internal_title}.png" alt="{event.title}">
		<p>{event.title}</p>
	</div>
</a>

<style lang="scss">
	.element {
		min-width: 100%;
		width: 100%;

		scroll-snap-align: start;
		scroll-snap-stop: normal;

		.element-grid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 220px 60px;
			max-width: 280px;
			margin: auto;
		}

		img {
			grid-column: 1 / 1;
			grid-row: 1 / 1;

			border-radius: 5px;
			max-width: 100%;
			max-height: 100%;
			margin: auto;
		}

		p {
			grid-column: 1 / 1;
			grid-row: 2 / 2;

			margin: auto;
			font-size: 1.6rem;
			text-align: center;
		}

		&.compact {
			min-width: calc(20% - 20px);
			width: unset;

			.element-grid {
				grid-template-rows: 140px 60px;
			}

			p {
				font-size: 1rem;
				max-width: 100px;
			}
		}

		@media (min-width: 992px) {
			min-width: calc(25% - 15px);

			&.compact {
				img {
					max-width: 130px;
				}

				p {
					font-size: 1.2rem;
					max-width: 130px;
				}
			}
		}
	}
</style>