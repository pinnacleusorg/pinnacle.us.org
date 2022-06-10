
<script lang="ts">
	import { onMount } from "svelte";
	import type { Hackathon } from "$lib/schema/hackathon";

	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	import CarouselElement from "../components/CarouselElement.svelte";

	const API_ROOT = import.meta.env.VITE_API_ROOT;
	let masterHackathons: Hackathon[] = [];
	let hackathons: Hackathon[] = [];
	let hsHackathons: Hackathon[] = [];
	onMount(() => {
		fetch(API_ROOT+"/hackathons")
			.then(res => res.json())
			.then(res => {
				masterHackathons = res.results.filter((h: Hackathon) => h.isVisible !== false);
				hackathons = masterHackathons.filter((h: Hackathon) => !h.isHighschool);
				hsHackathons = masterHackathons.filter((h: Hackathon) => h.isHighschool);
			})
			.then(() => {
				hackathons = hackathons.sort((a, b) =>
					{ return a.internal_title.localeCompare(b.internal_title); });
				hsHackathons = hsHackathons.sort((a, b) =>
					{ return a.internal_title.localeCompare(b.internal_title); });
			})
			.catch(ex => console.log("GET hackathons failed: "+ex));
	});
</script>

<svelte:head>
	<title>Pinnacle • Partnered Events</title>
</svelte:head>

<div class="light-bg">
	<Header />
	<section class="container component-section">
		<a href="/">&lsaquo; Home</a>
		<h2>Partnered Events</h2>
		<div class="flex-row flex-list flex-wrap">
			{#each hackathons as event}
				<CarouselElement event="{event}" compact="{true}" />
			{/each}
		</div>
		<br><br>
		<h2>High School Events</h2>
		<div class="flex-row flex-list flex-wrap">
			{#each hsHackathons as event}
				<CarouselElement event="{event}" compact="{true}" />
			{/each}
		</div>
	</section>
	<Footer showLegal="{false}" />
</div>

<style lang="scss">
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
