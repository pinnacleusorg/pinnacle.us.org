<script lang="ts">
	import Hero from "../components/Hero.svelte";
	import OverflowTriangle from "../components/OverflowTriangle.svelte";
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
		<svg><use xlink:href="icon/icon.svg#mouse"/></svg>
	</div>
	<Hero />
	<OverflowTriangle />
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

		max-width: 25px;
		width: 5vw;

		margin: 0 auto;
		position: fixed;
		bottom: 40px;
		left: 0;
		right: 0;
		z-index: -2;

		svg {
			width: 100%;
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