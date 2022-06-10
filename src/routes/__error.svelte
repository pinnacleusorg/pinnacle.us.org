<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script lang="ts">
	import Header from "$lib/Header.svelte";

	export let title: string;
</script>

<svelte:head>
	<title>Pinnacle • {title}</title>
</svelte:head>

<div class="light-bg flex-column">
	<Header />
	<section class="container component-section flex">
		<a href="/">&lsaquo; Home</a>
		<h2>{title}</h2>
		<p>Please recheck the URL or go back to our <a href="/">home page</a>.</p>
	</section>
</div>

<style lang="scss">
	div {
		min-height: 100vh;
	}

	section {
		width: 100%;
	}

	a {
		text-decoration: none;
	}

	.container {
		max-width: 900px;
		padding-left: 30px;
		padding-right: 30px;
	}
</style>
