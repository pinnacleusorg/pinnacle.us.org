
<script lang="ts">
	import { onMount } from "svelte";
	import type { Hackathon } from "../core/schema/hackathon.schema";

	import Header from "../core/components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	import CarouselElement from "../core/components/CarouselElement.svelte";

	let hackathons: Hackathon[] = [];
	let hsHackathons: Hackathon[] = [];
	onMount(() => {
		/* ! TODO: REPLACE THIS CORS PROXY IN PRODUCTION [DEVELOPMENT ONLY] */
		fetch("https://cors.sdbagel.com/https://api.pinnacle.us.org/1.0/hackathons")
			.then(res => res.json())
			.then(res => {
				hackathons = res.results.filter((h: Hackathon) => !h.isHighschool);
				hsHackathons = res.results.filter((h: Hackathon) => h.isHighschool);
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
	<div class="container component-section">
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
	</div>
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