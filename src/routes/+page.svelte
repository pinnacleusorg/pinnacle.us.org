<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import Description from "$lib/Description.svelte";
	import FAQ from "$lib/FAQ.svelte";
	import Timeline from "$lib/Schedule.svelte";
	import EngagementDeck from "$lib/Engagement.svelte";
	import Footer from "$lib/Footer.svelte";

	import { onMount } from "svelte";
	import Partners from "$lib/Partners.svelte";
	import Sponsors from "$lib/Sponsors.svelte";
	import Parallax from "$lib/Parallax.svelte";

	let scrolledHeight = 0;
	function scrollHandler() {
		const paths = document.querySelectorAll("path:not(.noanimate)");
		(paths as NodeListOf<SVGPathElement>).forEach(path => {
			// Prevent backtracking with a scroll limiter
			if (window.scrollY < scrolledHeight) return;
			else scrolledHeight = window.scrollY;
			// Calculate percentage of the path to show
			const h = path.getBoundingClientRect().height;
			const y = path.getBoundingClientRect().y;
			// four fifths of window height is bottom of shown
			const per = ((window.innerHeight * 4) / 5 - y) / h;
			// Set dashoffset to appropriate value based on %
			const l = path.getTotalLength();
			if (per < 0) {
				path.style.strokeDashoffset = `${l}`;
				return;
			}
			const o = Math.max(l - per * l, 0);
			path.style.strokeDashoffset = `${o}`;
		});
	}

	onMount(() => {
		// Set each path to be "invisible" with dasharray/dashoffset
		const paths = document.querySelectorAll("path:not(.noanimate)");
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

<svelte:window on:scroll={scrollHandler} />
<div class="container-wide">
	<Parallax />
	<Hero />
	<Description />
	<Timeline />
	<Partners />
	<FAQ />
	<EngagementDeck />
	<Footer showLegal={true} />
</div>

<style lang="scss">
	.container-wide {
		padding: 0;
		overflow: hidden;
	}

	@media (max-width: 992px) {
		:global .component-section-large:not(:last-of-type)::after {
			background-color: $gold;
			content: "";
			display: block;

			position: absolute;
			top: calc(100% - 3rem);
			left: 0;
			right: 0;
			z-index: 10;

			margin: 0 auto;
			min-height: 8rem;
			width: 2px;
		}
	}
</style>
