
<script lang="ts">
	import type { Hackathon } from "../schema/hackathon.schema";
	export let event: Hackathon;
</script>

<a class="carousel-element" href="{event.website}" target="_blank">
	<img src="/vendor/{event.internal_title}.png" alt="{event.title}">
	<span class="spacer"></span>
	<span>{event.title}</span>
</a>

<style lang="scss">
	.carousel-element {
		display: flex;
		flex-direction: column;
		text-align: center;
		min-width: 100%;
		scroll-snap-align: start;
		scroll-snap-stop: normal;

		img {
			border-radius: 5px;
			margin: auto;
			margin-top: 3rem;
			margin-bottom: 2rem;
			max-width: 220px;
			width: 100%;
		}

		span {
			display: block;
			font-size: 1.6rem;
		}

		@media (min-width: 992px) {
			min-width: calc(25% - 15px);
		}
	}
</style>