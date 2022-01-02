
<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<section id="hero" transition:fade>
	<div class="container inner">
		<img src="https://static.pinnacle.us.org/2021/meta/icon.png" alt="Pinnacle Logo" class="logo"/>
		<img src="https://static.pinnacle.us.org/2021/assets/textLogo.png" alt="Pinnacle" class="label"/>
		<p class="byline">Team Application</p>
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

		.inner {
			box-sizing: border-box;
			margin-top: -3rem;
			padding: 4rem;
			width: 100%;
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
		}

		@media (min-width: 512px) {
			img.logo {
				width: 7rem;
			}
			img.label {
				max-width: 20rem;
			}
			p.byline {
				margin-top: 3rem;
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
				margin-top: 4rem;
				font-size: 2rem;
			}
		}
	}
</style>
