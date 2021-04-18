<script lang="ts">
	import Hero from "../components/Hero.svelte";
	import BigNumbers from "../components/BigNumbers.svelte";
	import Description from "../components/Description.svelte";
</script>

<svelte:head>
	<title>Pinnacle • The Olympics of Hackathons</title>
</svelte:head>

<div class="container-wide">
	<div id="scroll-prompt">
		<img src="icon/mouse.png" alt="Scroll Down">
	</div>
	<Hero />
	<div class="page-spacer"></div>
	<div class="container-wide light-bg" id="pre-description"></div>

	<!-- components/eyecatchers -->
	<BigNumbers />
	<Description />

	<!--
	<%- include('components/carousel') %>
	<%- include('components/schedule') %>
	<%- include('components/sponsors') %>
	<%- include('partials/footer-body', {showLegal: true}) %>
	-->
	<div id="count-display">
		Counter <span id="counter">0</span>/3
	</div>
</div>

<style lang="scss">
	#scroll-prompt {
		animation: fade-in 0.3s 3s forwards;
		opacity: 0;
		transform: translate(-50%, -50%);
		transition: opacity 0.5s ease-in-out;

		height: 5vw;
		max-width: 25px;
		width: 5vw;

		position: fixed;
		bottom: 40px;
		left: 50%;
		z-index: -2;

		img {
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

	.page-spacer {
		background-color: unset;
		display: block;
		min-height: 100vh;
		position: relative;
		z-index: -3;
	}

	#pre-description {
		clip-path: polygon(50% 0px, 0px 100%, 100% 100%);
		height: 60vh;
	}

  #pre-description, #schedule {
		min-height: 800px;
		position: relative;
  }
</style>