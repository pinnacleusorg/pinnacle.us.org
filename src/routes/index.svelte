<script lang="ts">
	import Hero from "../components/Hero.svelte";
	import Video from "../components/Video.svelte";
	import BigNumbers from "../components/BigNumbers.svelte";
	import Description from "../components/Description.svelte";
	import Carousel from "../components/Carousel.svelte";
	import Timeline from "../components/Timeline.svelte";
	import EngagementDeck from "../components/EngagementDeck.svelte";
	import Sponsors from "../components/Sponsors.svelte";
	import Skyline from "../components/Skyline.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
	<title>Pinnacle • The Olympics of Hackathons</title>
</svelte:head>

<div>
	<div id="scroll-prompt">
		<img src="icon/mouse.png" alt="Scroll Down">
	</div>
	<Hero />
	<div class="page-spacer"></div>
	<div class="container-wide light-bg" id="overflow-triangle"></div>
	<Video />
	<BigNumbers />
	<Description />
	<Carousel />
	<Timeline />
	<EngagementDeck />
	<Skyline />
	<Sponsors />
	<Footer showLegal="{true}" />
</div>

<style lang="scss">
	#scroll-prompt {
		animation: fade-in 0.3s 3s forwards;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;

		max-width: 25px;
		width: 5vw;

		margin: 0 auto;
		position: fixed;
		bottom: 40px;
		left: 0;
		right: 0;
		z-index: -2;

		img {
			width: 100%;
		}
	}

	.page-spacer {
		background-color: unset;
		display: block;
		min-height: 100vh;
		position: relative;
		z-index: -3;
	}

	#overflow-triangle {
		box-sizing: border-box;
		clip-path: polygon(50% 0px, 0px 100%, 100% 100%);
		height: 30vh;
		position: relative;

		@media (min-width: 768px) {
			height: 50vh;
			min-height: 800px;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>