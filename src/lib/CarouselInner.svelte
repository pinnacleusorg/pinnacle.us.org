<script lang="ts">
	import CarouselElement from "$lib/CarouselElement.svelte";
	import type { Hackathon } from "$lib/schema/hackathon";
	export let futureHackathons: Hackathon[];
	export let hackathons: Hackathon[];

	function scrollCarousel(direction: number): void {
		const c = document.querySelector("#carouselContainer");
		c.scrollBy(direction * c.getBoundingClientRect().width, 0);
	}
</script>

<div class="carousel">
	<button
		class="carousel-nav reverse"
		on:click={() => {
			scrollCarousel(-1);
		}}
		title="Scroll Left"
	>
		<svg><use xlink:href="icon/icon.svg#arrow" /></svg>
	</button>
	<div class="flex-row flex-list" id="carouselContainer">
		{#each futureHackathons as event}
			<CarouselElement {event} showDate={true} />
		{/each}
		{#each hackathons as event}
			<CarouselElement {event} />
		{/each}
	</div>
	<button
		class="carousel-nav"
		on:click={() => {
			scrollCarousel(1);
		}}
		title="Scroll Right"
	>
		<svg><use xlink:href="icon/icon.svg#arrow" /></svg>
	</button>
</div>

<style lang="scss">
	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel-nav {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 3rem;

		width: 80px;
		outline: none;
		overflow: visible;
		-webkit-appearance: none;
		transform: scale(1);
		transition: transform 0.5s ease;

		&.reverse {
			transform: scale(-1);
		}

		svg {
			width: 80%;
		}

		&:active {
			transform: scale(1.05);
			transition-duration: 0.1s;

			&.reverse {
				transform: scale(-1.05);
			}
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
</style>
