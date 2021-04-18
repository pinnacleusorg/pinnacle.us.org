<script lang="ts">
	import Hero from "../components/Hero.svelte";
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container-wide">
	<div id="scroll-prompt">
		<img src="icon/mouse.png" alt="Scroll Down">
	</div>
	<Hero />

	<!--
	<%- include('components/eyecatchers') %>
	<%- include('components/big-numbers') %>
	<%- include('components/description') %>
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
</style>