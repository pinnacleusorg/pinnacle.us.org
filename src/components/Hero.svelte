
<script lang="ts">
	function scrollHandler() {
		const scrollAdj = (window.scrollY / window.innerHeight) * 100;
		if (scrollAdj > 150) return; // Performance (reduce DOM operations)
		let hero = document.querySelector("#hero .inner") as HTMLElement;
		hero.style.marginTop = `calc(-3rem - ${scrollAdj}px)`;
	}
</script>

<svelte:window on:scroll="{scrollHandler}" />
<section id="hero">
	<div class="container inner">
		<img src="meta/icon.png" alt="Pinnacle Logo" class="logo"/>
		<img src="image/logo-text.png" alt="Pinnacle" class="label"/>
		<p class="byline">The Olympics of Hackathons</p>
		<p class="dateline">
			<span>September 17-19, 2021</span><br>
			<span>Dallas, Texas</span>
		</p>
	</div>
	<div id="scroll-prompt">
		<svg><use xlink:href="icon/icon.svg#mouse"/></svg>
	</div>
</section>

<style lang="scss">
	#hero {
		background-color: var(--pinnacle-bg);
		color: var(--pinnacle-gold);
		display: flex;
		align-items: center;
		font-family: KeplerStd;
		text-align: center;
		
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -3;

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

			&.logo {
				max-width: 100%;
				width: 5rem;
			}

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

			&.dateline {
				font-size: 18px;
				margin-top: 2.5rem;
			}
		}

		@media (min-width: 512px) {
			img.logo {
				width: 7rem;
			}
			img.label {
				max-width: 20rem;
			}
		}

		@media (min-width: 768px) {
			.inner {
				padding: 0;
			}
			img.logo {
				width: 10rem;
			}
			img.label {
				margin-top: 4rem;
				max-width: unset;
			}
			p.byline {
				font-size: 2rem;
			}
			p.dateline {
				font-size: 24px;
			}
		}
	}

	#scroll-prompt {
		animation: fade-in 0.3s 3s forwards;
		opacity: 0;

		max-width: 25px;
		width: 5vw;

		margin: 0 auto;
		position: fixed;
		bottom: 3vh;
		left: 0;
		right: 0;
		z-index: -2;

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
