<script lang="ts">
	import { onMount } from "svelte";
	import { hackathonsGet } from "$lib/app/api";
	import type { Hackathon } from "$lib/schema/hackathon";

	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	import HackathonCard from "$lib/HackathonCard.svelte";

	let hackathons: Hackathon[] = [];
	let hsHackathons: Hackathon[] = [];
	onMount(() => {
		hackathonsGet()
			.then((res) => {
				hackathons = res.hackathons;
				hsHackathons = res.hsHackathons;
			})
			.catch((ex) => console.error("GET hackathons failed: " + ex));
	});
</script>

<svelte:head>
	<title>Pinnacle • Partnered Events</title>
</svelte:head>

<div class="hackathons">
	<Header />
	<section class="container component-section">
		<a href="/">&lsaquo; Home</a>
		<h2>Partnered Events</h2>
		<div class="flex-row flex-list flex-wrap">
			{#each hackathons as event}
				<HackathonCard {event} compact={true} />
			{/each}
		</div>
		<br /><br />
		<h2>High School Events</h2>
		<div class="flex-row flex-list flex-wrap">
			{#each hsHackathons as event}
				<HackathonCard {event} compact={true} />
			{/each}
		</div>
	</section>
	<Footer showLegal={false} />
</div>

<style lang="scss">
	.hackathons {
		@include background-white;
	}

	h2 {
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	.container {
		max-width: 1000px;
		padding-left: 30px;
		padding-right: 30px;

		> div {
			justify-content: space-around;

			@media (min-width: 768px) {
				justify-content: space-between;
			}
		}
	}
</style>
