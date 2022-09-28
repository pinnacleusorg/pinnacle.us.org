<script lang="ts">
	import { onMount } from "svelte";
	import { cubicInOut } from "svelte/easing";

	import Chamfer from "./Chamfer.svelte";
	import Explore from "./Explore.svelte";
	import HeroLines from "./HeroLines.svelte";
	import Nav from "./Nav.svelte";

	// parallax
	function scrollHandler() {
		const scrollAdj = (window.scrollY / window.innerHeight) * 100;
		if (scrollAdj > 150) return; // Performance (reduce DOM operations)
		let hero = document.querySelector("#hero .inner") as HTMLElement;
		hero.style.marginTop = `calc(-3rem - ${scrollAdj}px)`;
	}

	let time = 0;
	let per = 0;
	onMount(() => {
		// fake scrolled height
		setInterval(() => {
			time += 0.01;
			per = cubicInOut(time);
			animate();
		}, 25);

		// Set each path to be "invisible" with dasharray/dashoffset
		const paths = document.querySelectorAll("path.noanimate");
		(paths as NodeListOf<SVGPathElement>).forEach(path => {
			path.style.display = "block"; // prevents load jitter
			path.style.strokeDasharray = `${path.getTotalLength()}`;
			path.style.strokeDashoffset = `${path.getTotalLength()}`;
		});
	});

	function animate() {
		const paths = document.querySelectorAll("path.noanimate");
		(paths as NodeListOf<SVGPathElement>).forEach(path => {
			// Calculate percentage of the path to show
			const h = path.getBoundingClientRect().height;
			const y = path.getBoundingClientRect().y;
			// four fifths of window height is bottom of shown
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
</script>

<svelte:window on:scroll={scrollHandler} />
<section id="hero">
	<Nav />
	<Chamfer color="white" location="bottom" orientation="left" width={40} />
	<HeroLines />

	<div class="container inner">
		<img src="/image/logo-text.svg" alt="Pinnacle" />
		<a name="hero"><p class="byline">The Olympics of Hackathons</p></a>
	</div>
	<Explore />
</section>

<style lang="scss">
	#hero {
		background-color: $bg;
		display: flex;
		align-items: center;
		font-family: KeplerStd;
		text-align: center;

		height: 100vh;
		position: relative;

		.inner {
			box-sizing: border-box;
			margin-top: -3rem;
			padding: 4rem;
			width: 100%;
			transition: margin-top 0.2s ease-out;
		}

		img {
			display: block;
			margin: auto;
			margin-top: 3rem;
			max-width: 12rem;
			width: 100%;

			@media (min-width: 512px) {
				max-width: 20rem;
			}

			@media (min-width: 768px) {
				margin-top: 4rem;
				max-width: 25rem;
			}
		}

		p {
			letter-spacing: 1.2px;
			max-width: 100%;

			&.byline {
				font-size: 1.5rem;
				margin-top: 1.5rem;
			}
		}

		@media (min-width: 768px) {
			.inner {
				padding: 0;
			}
			p.byline {
				font-size: 1.75rem;
			}
		}
	}
</style>
