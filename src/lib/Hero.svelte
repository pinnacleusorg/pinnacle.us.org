<script lang="ts">
	import Chamfer from "./Chamfer.svelte";
	import Nav from "./Nav.svelte";

	function scrollHandler() {
		const scrollAdj = (window.scrollY / window.innerHeight) * 100;
		if (scrollAdj > 150) return; // Performance (reduce DOM operations)
		let hero = document.querySelector("#hero .inner") as HTMLElement;
		hero.style.marginTop = `calc(-3rem - ${scrollAdj}px)`;
	}
</script>

<svelte:window on:scroll={scrollHandler} />
<Nav />
<section id="hero">
	<Chamfer color="white" location="bottom" orientation="left" width={40} />
	<svg
		id="hl-1"
		viewBox="0 0 101 101"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M101 1.00002L1 1L0.999983 101"
			stroke="#C79D5E"
			stroke-width="2px"
		/>
	</svg>
	<svg
		id="hl-2"
		viewBox="0 0 401 401"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0 400L400 400L400 0" stroke="#C79D5E" stroke-width="2" />
	</svg>
	<svg
		id="hl-3"
		viewBox="0 0 101 101"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M101 1.00001L1 1L0.999991 101" stroke="#C79D5E" stroke-width="2" />
	</svg>

	<div class="container inner">
		<img src="/image/logo-text.svg" alt="Pinnacle" />
		<p class="byline">The Olympics of Hackathons</p>
	</div>
	<div id="scroll-prompt">
		<p>Explore</p>
		<svg><use xlink:href="image/icons.svg#mouse" /></svg>
	</div>
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

		#hl-1 {
			position: absolute;
			top: calc(7vh + 100px);
			left: 7vw;
			width: 101px;

			@media (max-width: 768px) {
				display: none;
			}
		}

		#hl-2 {
			position: absolute;
			bottom: 3.5rem;
			right: 7vw;
			width: 401px;

			@media (max-width: 768px) {
				width: 200px;
			}
		}

		#hl-3 {
			position: absolute;
			bottom: calc(3.5rem - 50px);
			right: calc(7vw - 50px);
			width: 101px;

			@media (max-width: 768px) {
				bottom: calc(3.5rem - 25px);
				right: calc(7vw - 25px);
				width: 50px;
			}
		}

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

	#scroll-prompt {
		animation: fade-in 1s 1.5s forwards;
		opacity: 0;

		margin: 0 auto;
		position: absolute;
		bottom: 5vh;
		left: 0;
		right: 0;
		z-index: 5;

		display: grid;
		place-items: center;

		p {
			margin: 0;
			margin-bottom: -30px;
		}

		svg {
			max-height: 50px;
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
