
<script lang="ts">
	import type { Hackathon } from "../core/schema/hackathon.schema";
	export let hackathons: Hackathon[];

	function scrollCarousel(direction: number): void {
		const c = document.querySelector("#carouselContainer");
		c.scrollBy(direction * c.getBoundingClientRect().width/25, 0);
	}
</script>

<div class="carousel">
	<button class="carousel-nav reverse" on:click="{() => {scrollCarousel(-1);}}">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
		</svg>
	</button>
	<div class="carousel-inner flex-row flex-list" id="carouselContainer">
		{#each hackathons as event}
			<a class="carousel-element" href="{event.website}" target="_blank">
				<img src="vendor/{event.internal_title}.png" alt="{event.title}">
				<span class="spacer"></span>
				<span>{event.title}</span>
			</a>
		{/each}
	</div>
	<button class="carousel-nav" on:click="{() => {scrollCarousel(1);}}">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
		</svg>
	</button>
</div>

<style lang="scss">
	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		margin-bottom: 3rem;
	}

	.carousel-nav {
		background: none;
		border: none;
		font-size: 3rem;

		width: 80px;
		outline: none;
		overflow: visible;
		-webkit-appearance: none;
		transform: scale(1.0);
		transition: transform 0.5s ease;

		&.reverse {
			transform: scale(-1.0);
		}
		
		svg {
			width: 80%;
		}
	}

	.carousel-inner {
		display: flex;
		flex-wrap: nowrap;
		max-width: 100%;
		width: 100%;

		overflow: auto;
		scroll-behavior: smooth;
		-ms-scroll-snap-type: x proximity;
		scroll-snap-type: x proximity;

		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}

		.carousel-element {
			display: flex;
			flex-direction: column;
			text-align: center;
			min-width: calc(25% - 15px);
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
		}
	}

	@media (min-width: 512px) {
		.carousel {
			margin-bottom: 5rem;
		}
	}

	@media (max-width: 1050px) {
		.carousel-inner .carousel-element {
			min-width: 100%;
		}
	}
</style>