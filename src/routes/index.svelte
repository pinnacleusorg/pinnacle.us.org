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

	import { onMount } from "svelte";
	
	function scrollHandler() {
		const paths = document.querySelectorAll(".line-container path");
		(paths as NodeListOf<SVGPathElement>).forEach(path => {
			const h = path.getBoundingClientRect().height;
			const y = path.getBoundingClientRect().y;
			const per = (window.innerHeight*3/5 - y) / h;
			if (per < 0) return;
			const l = path.getTotalLength();
			const o = Math.max(l - (per * l), 0);
			path.style.strokeDashoffset = `${o}`;
		});
	}

	onMount(() => {
		const paths = document.querySelectorAll(".line-container path");
		(paths as NodeListOf<SVGPathElement>).forEach(path => {
			path.style.strokeDasharray = `${path.getTotalLength()}`;
			path.style.strokeDashoffset = `${path.getTotalLength()}`;
		});
	});
</script>

<svelte:head>
	<title>Pinnacle • The Olympics of Hackathons</title>
</svelte:head>

<svelte:window on:scroll="{scrollHandler}" />
<div class="container-wide">
	<Hero />
	<OverflowTriangle />
	<Video />
	<BigNumbers />
	<Description />
	<Carousel />
	<div class="line-container">
		<svg class="line-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.53 656.54"><path d="M319.76 1.76l-142 143 1 335-177 175" fill="none" stroke="#c59d60" stroke-miterlimit="10" stroke-width="4"/></svg>
		<svg class="line-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 321.53 656.54"><path d="M1.77 1.76l142 143-1 335 177 175" fill="none" stroke="#c59d60" stroke-miterlimit="10" stroke-width="4"/></svg>
		<Timeline />
	</div>
	<EngagementDeck />
	<Skyline />
	<Sponsors />
	<Footer showLegal="{true}" />
</div>

<style lang="scss">
	.container-wide {
		padding: 0;
		overflow: hidden;
	}

	.line-container {
		position: relative;
		padding: 0;

		path {
			transition-duration: 0.1s;
		}

		.line-left, .line-right {
			position: absolute;
			top: 0;
			z-index: 10;
			max-width: 20%;
		}

		.line-left {
			left: -10px;
		}
		.line-right {
			right: -10px;
		}
	}
</style>