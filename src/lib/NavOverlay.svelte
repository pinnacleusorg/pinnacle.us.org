<script lang="ts">
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	function closeNav() {
		dispatch("close");
	}
</script>

<nav class="nav-overlay">
	<a href="#about" on:click={closeNav}>About</a>
	<a href="#schedule" on:click={closeNav}>Schedule</a>
	<a href="#faq" on:click={closeNav}>FAQ</a>
	<a href="#contact" on:click={closeNav}>Contact</a>
</nav>

<style lang="scss">
	.nav-overlay {
		@include background-white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		row-gap: 30px;
		font-size: 1.5rem;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
