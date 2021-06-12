
<script lang="ts">
	import Header from "../core/components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Pinnacle • {status}</title>
</svelte:head>

<div class="light-bg flex-column">
	<Header />
	<section class="container component-section flex">
		<a href="/">&lsaquo; Home</a>
		<h2>{status}: {error.message}</h2>
		{#if status === 404}
			<p>We couldn't find that page! Please recheck the URL or go back to our <a href="/">home page</a>.</p>
		{/if}
		<p></p>
		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
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
