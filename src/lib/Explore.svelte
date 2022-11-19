<script>
	export let position = "absolute";
</script>

<div id="scroll-prompt" style="position:{position};">
	<p>Explore</p>
	<svg><use href="image/icons.svg#mouse" /></svg>
</div>

<style lang="scss">
	#scroll-prompt {
		animation: fade-in 1s 1.5s forwards;
		opacity: 0;

		font-family: KeplerStd;
		font-weight: 400;
		font-size: 1.5rem;

		margin: 0 auto;
		position: absolute;
		bottom: 12vh;
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
