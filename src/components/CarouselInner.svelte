
<script lang="ts">
	import CarouselElement from "../core/components/CarouselElement.svelte";
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
	<div class="flex-row flex-list" id="carouselContainer">
		{#each hackathons as event}
			<CarouselElement event="{event}" />
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

	#carouselContainer {
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
	}

	@media (min-width: 512px) {
		.carousel {
			margin-bottom: 5rem;
		}
	}
</style>