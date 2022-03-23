<script lang="ts">
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	import { onMount } from "svelte";

	const API_ROOT = import.meta.env.VITE_API_ROOT;

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const userEmail = urlParams.get("email");
		const userName = urlParams.get("name");
		if (userEmail && userName) {
			fetch(API_ROOT + "/contacts", {
				method: "post",
				body: JSON.stringify({
					email: userEmail.trim(),
					name: userName.trim(),
				}),
				headers: new Headers({ "Content-Type": "application/json" }),
			}); // fail silently
		}
	});
</script>

<svelte:head>
	<title>Pinnacle • Mailing List</title>
</svelte:head>

<div class="light-bg">
	<Header />
	<section class="container component-section">
		<a href="/">&lsaquo; Home</a>
		<h2>Welcome to the Mailing List</h2>
		<p>
			You've been enrolled in our mailing list, the best way to stay
			up-to-date with the latest Pinnacle news. We don't send too many
			emails, but if you'd wish to unsubscribe, you may follow the
			unsubscribe link found in the footer of every email we send.
		</p>
	</section>
	<Footer showLegal={false} />
</div>

<style lang="scss">
	a {
		text-decoration: none;
	}

	.container {
		max-width: 900px;
		padding-left: 30px;
		padding-right: 30px;
	}
</style>
