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
	
	let scrolledHeight = 0;
	function scrollHandler() {
		const paths = document.querySelectorAll(".line-container path");
		(paths as NodeListOf<SVGPathElement>).forEach(path => {
			// Prevent backtracking with a scroll limiter
			if (window.scrollY < scrolledHeight) return;
			else scrolledHeight = window.scrollY;
			// Calculate percentage of the path to show
			const h = path.getBoundingClientRect().height;
			const y = path.getBoundingClientRect().y;
			const per = (window.innerHeight*3/5 - y) / h;
			// Set dashoffset to appropriate value based on per.
			const l = path.getTotalLength();
			if (per < 0) {
				path.style.strokeDashoffset = `${l}`;
				return;
			}
			const o = Math.max(l - (per * l), 0);
			path.style.strokeDashoffset = `${o}`;
		});
	}

	onMount(() => {
		// Set each path to be "invisible" with dasharray/dashoffset
		const paths = document.querySelectorAll(".line-container path");
		(paths as NodeListOf<SVGPathElement>).forEach(path => {
			path.style.display = "block"; // prevents load jitter
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
	<div class="line-container offset">
		<svg class="line-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.95 2343"><g fill="none" stroke="#c59d60" stroke-miterlimit="10" stroke-width="4"><path d="M1 112.75l172 169q-.12 835.88-.25 1671.75L3.25 2123"/><path d="M90 0v2255l-90 88"/></g></svg>
		<svg class="line-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.95 2343"><g fill="none" stroke="#c59d60" stroke-miterlimit="10" stroke-width="4"><path d="M317 112.75l-172 169q.13 835.88.25 1671.75L314.7 2123"/><path d="M228 0v2255l90 88"/></g></svg>
	</div>
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
		display: none;
		position: relative;
		padding: 0;

		path {
			display: none;
			transition-duration: 0.1s;
			transition-timing-function: ease-out;
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

		&.offset {
			.line-left, .line-right {
				top: -900px;
			}
		}

		@media (min-width: 992px) {
			display: block;
		}
	}
</style>