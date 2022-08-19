<script lang="ts">
	import Header from "$lib/Header.svelte";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Pinnacle • {$page.status}</title>
</svelte:head>

<div class="flex-column">
	<Header />
	<section class="container component-section flex">
		<a href="/">&lsaquo; Home</a>
		<h2>{$page.status}: {$page.error.message}</h2>
		<p>Please recheck the URL or go back to our <a href="/">home page</a>.</p>
	</section>
</div>

<style lang="scss">
	div {
		@include background-white;
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
