
<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		document.addEventListener("scroll", () => {
			const scrollAdj = (window.scrollY / window.innerHeight) * 100;
			if (scrollAdj > 150) return; // Performance (reduce DOM operations)
			let hero = document.querySelector("#hero .inner") as HTMLElement;
			hero.style.marginTop = `calc(-3rem - ${scrollAdj}px)`;
		});
	});
</script>

<div id="hero">
	<div class="container inner">
		<img src="meta/icon.png" alt="Pinnacle Logo" class="logo"/>
		<img src="image/logo-text.png" alt="Pinnacle" class="label"/>
		<p class="byline">The Olympics of Hackathons</p>
		<p class="dateline">
			<span>September 17-19, 2021</span><br>
			<span>Dallas, Texas</span>
		</p>
	</div>
</div>

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
			.logo {
				width: 7rem;
			}
			.label {
				max-width: 20rem;
			}
		}

		@media (min-width: 768px) {
			.inner {
				padding: 0;
			}
			.logo {
				width: 10rem;
			}
			.label {
				margin-top: 4rem;
				max-width: unset;
			}
			.byline {
				font-size: 2rem;
			}
			.dateline {
				font-size: 24px;
			}
		}
	}
</style>
