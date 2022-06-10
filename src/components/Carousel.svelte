<script lang="ts">
	import { onMount } from "svelte";
	import CarouselInner from "./CarouselInner.svelte";

	const API_ROOT = import.meta.env.VITE_API_ROOT;

	let futureHackathons: any[] = [];
	let hackathons: any[] = [];

	onMount(() => {
		fetch(API_ROOT + "/hackathons")
			.then((res) => res.json())
			.then(
				(res) =>
					(hackathons = res.results.filter((h: any) => h.isVisible !== false))
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

<section class="container-wide component-section-large dark-bg" id="carousel">
	<div class="container inner flex-column">
		<div class="header-group">
			<h2>Partnered Events</h2>
			<p>
				The winners of our partnered hackathons qualify for our premiere event.
			</p>
		</div>
		<CarouselInner {futureHackathons} {hackathons} />
		<p>
			Check out our <a href="/hackathons">full list</a> of partnered events.
		</p>
	</div>
</section>

<style lang="scss">
	#carousel {
		.inner {
			max-width: 90%;
		}

		h2 {
			text-align: center;
		}

		p {
			text-align: center;
			font-size: 1.3rem;
		}
	}
</style>
