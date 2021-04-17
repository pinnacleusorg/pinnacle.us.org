<script lang="ts">
	import Hero from "../components/Hero.svelte";
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="ultrawide-capture">
	<div class="linesCanvas-outside" id="initialCanvas">
		<div class="linesCanvas-inside"></div>
	</div>
	<div class="linesCanvas-outside" id="mainCanvas">
		<div class="linesCanvas-inside"></div>
	</div>
	<div id="scrollDown-container">
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
	.ultrawide-capture {
		max-width: 1680px;
		margin: auto;
	}
	
	/* Mouse overlay */
	#scrollDown-container {
		width: 5vw;
		height: 5vw;
		max-width: 25px;
		position: fixed;
		bottom: 40px;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -2;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		/* bad performance issues with blending this appropriately */
		/* mix-blend-mode: difference; */
	}
	#scrollDown-container img {
		width: 100%;
	}
</style>