<script lang="ts">
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	import { onMount } from "svelte";
	import { contactsSubscribe } from "$lib/app/api";

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const userEmail = urlParams.get("email").trim();
		const userName = urlParams.get("name").trim();
		if (userEmail && userName) contactsSubscribe(userEmail, userName);
	});
</script>

<svelte:head>
	<title>Pinnacle • Mailing List</title>
</svelte:head>

<div>
	<Header />
	<section class="container component-section">
		<a href="/">&lsaquo; Home</a>
		<h2>Welcome to the Mailing List</h2>
		<p>
			You've been enrolled in our mailing list, the best way to stay up-to-date
			with the latest Pinnacle news. We don't send too many emails, but if you'd
			wish to unsubscribe, you may follow the unsubscribe link found in the
			footer of every email we send.
		</p>
	</section>
	<Footer showLegal={false} />
</div>

<style lang="scss">
	div {
		@include background-white;
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
