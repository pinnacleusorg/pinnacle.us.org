<script lang="ts">
	import type { Hackathon } from "$lib/schema/hackathon";
	import { onMount } from "svelte";
	import CarouselInner from "./CarouselInner.svelte";
	import { PUBLIC_API_ROOT } from "$env/static/public";

	let futureHackathons: Hackathon[] = [];
	let hackathons: Hackathon[] = [];

	onMount(() => {
		if (window.location.hostname === "localhost") {
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

		console.log(PUBLIC_API_ROOT);
		fetch(PUBLIC_API_ROOT + "/hackathons")
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
