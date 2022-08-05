<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import Description from "$lib/Description.svelte";
	import FAQ from "$lib/FAQ.svelte";
	import Timeline from "$lib/Schedule.svelte";
	import EngagementDeck from "$lib/EngagementDeck.svelte";
	import Footer from "$lib/Footer.svelte";

	import { onMount } from "svelte";

	let scrolledHeight = 0;
	function scrollHandler() {
		const paths = document.querySelectorAll(".line-container path");
		(paths as NodeListOf<SVGPathElement>).forEach((path) => {
			// Prevent backtracking with a scroll limiter
			if (window.scrollY < scrolledHeight) return;
			else scrolledHeight = window.scrollY;
			// Calculate percentage of the path to show
			const h = path.getBoundingClientRect().height;
			const y = path.getBoundingClientRect().y;
			const per = ((window.innerHeight * 3) / 5 - y) / h;
			// Set dashoffset to appropriate value based on per.
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
		const paths = document.querySelectorAll(".line-container path");
		(paths as NodeListOf<SVGPathElement>).forEach((path) => {
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
	<Hero />
	<Description />
	<Timeline />
	<FAQ />
	<EngagementDeck />
	<Footer showLegal={true} />
</div>

<style lang="scss">
	.container-wide {
		padding: 0;
		overflow: hidden;
	}
</style>
