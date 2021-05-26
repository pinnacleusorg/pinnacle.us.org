
<script lang="ts">
	import type { Hackathon } from "../schema/hackathon.schema";
	export let compact = false;
	export let event: Hackathon;
</script>

<a class="carousel-element {compact ? 'compact':''}" href="{event.website}" target="_blank">
	<img src="/vendor/{event.internal_title}.png" alt="{event.title}">
	<p>{event.title}</p>
</a>

<style lang="scss">
	.carousel-element {
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
		min-width: 100%;
		scroll-snap-align: start;
		scroll-snap-stop: normal;

		img {
			border-radius: 5px;
			margin-top: 3rem;
			margin-bottom: 2rem;
			max-width: 220px;
			width: 100%;
		}

		p {
			margin-top: 10px;
			margin-bottom: 0;
			font-size: 1.6rem;
		}

		&.compact {
			min-width: 20%;

			img {
				max-width: 100px;
			}

			p {
				font-size: 1rem;
				max-width: 100px;
			}
		}

		@media (min-width: 992px) {
			min-width: calc(25% - 15px);

			&.compact {
				min-width: 16%;

				img {
					max-width: 130px;
				}

				p {
					font-size: 1.4rem;
					max-width: 130px;
				}
			}
		}
	}
</style>