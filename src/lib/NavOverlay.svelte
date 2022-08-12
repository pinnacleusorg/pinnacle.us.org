<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { fade, fly } from "svelte/transition";
	const dispatch = createEventDispatcher();

	function closeNav() {
		dispatch("close");
	}
</script>

<nav class="nav-overlay" transition:fade={{ duration: 200 }}>
	<a
		href="#about"
		on:click={closeNav}
		transition:fade={{ duration: 250, delay: 100 }}>About</a
	>
	<a
		href="#schedule"
		on:click={closeNav}
		transition:fade={{ duration: 250, delay: 250 }}>Schedule</a
	>
	<a
		href="#faq"
		on:click={closeNav}
		transition:fade={{ duration: 250, delay: 400 }}>FAQ</a
	>
	<a
		href="#contact"
		on:click={closeNav}
		transition:fade={{ duration: 250, delay: 550 }}>Contact</a
	>
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
