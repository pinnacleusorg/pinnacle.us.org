<script lang="ts">
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
	<div class="container inner">
		<img
			src="https://static.pinnacle.us.org/2021/assets/textLogo.png"
			alt="Pinnacle"
			class="label"
		/>
		<p class="byline">The Olympics of Hackathons</p>
	</div>
	<div id="scroll-prompt">
		<p>Explore</p>
		<svg><use xlink:href="icon/icon.svg#mouse" /></svg>
	</div>
</section>

<style lang="scss">
	#hero {
		background-color: var(--pinnacle-bg);
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
			width: 30rem;

			&.label {
				margin-top: 3rem;
				max-width: 12rem;
			}
		}

		p {
			font-weight: lighter;
			letter-spacing: 1.2px;
			max-width: 100%;

			&.byline {
				font-size: 1.5rem;
				margin-top: 1.5rem;
			}
		}

		@media (min-width: 512px) {
			img.label {
				max-width: 20rem;
			}
		}

		@media (min-width: 768px) {
			.inner {
				padding: 0;
			}
			img.label {
				margin-top: 4rem;
				max-width: unset;
			}
			p.byline {
				font-size: 2rem;
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

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		p {
			font-size: 1.5rem;
			margin: 0;
			margin-bottom: -30px;
		}

		svg {
			max-height: 60px;
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
