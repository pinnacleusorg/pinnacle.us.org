<script lang="ts">
	import type { Hackathon } from "$lib/schema/hackathon";
	import { onMount } from "svelte";
	import CarouselInner from "./CarouselInner.svelte";

	const API_ROOT = import.meta.env.VITE_API_ROOT;

	let futureHackathons: Hackathon[] = [];
	let hackathons: Hackathon[] = [];

	onMount(() => {
		console.log(window.location.hostname);
		if (window.location.hostname === "127.0.0.1" || "localhost") {
			futureHackathons = [
				{
					_id: 1,
					internal_title: "internal",
					title: "Pinnacle Internal", // Display Name
					website: "https://pinnacle.us.org", // URL string
					startDate: new Date().toString(), // DateTime string
					isHighschool: false,
					isVisible: true
				}
			];
			return;
		}

		fetch(API_ROOT + "/hackathons")
			.then((res) => res.json())
			.then(
				({ results }: { results: Hackathon[] }) =>
					(hackathons = results.filter((h) => h.isVisible !== false))
			)
			.then(
				() =>
					(hackathons = hackathons.sort((a, b) => {
						return a.internal_title.localeCompare(b.internal_title);
					}))
			)
			.then(() => {
				futureHackathons = hackathons.filter(
					(h) => new Date(h.startDate) > new Date()
				);
				hackathons = hackathons.filter(
					(h) => new Date(h.startDate) < new Date()
				);
			})
			.catch((ex) => console.log("GET hackathons failed: " + ex));
	});
</script>

<CarouselInner {futureHackathons} {hackathons} />
