
<script lang="ts">
	import { onMount } from "svelte";
	import CarouselInner from "./CarouselInner.svelte";
	import type { Hackathon } from "../core/schema/hackathon.schema";
	
	let hackathons: Hackathon[] = [];

	onMount(() => {
		/* ! TODO: REPLACE THIS CORS PROXY IN PRODUCTION [DEVELOPMENT ONLY] */
		fetch("https://cors.sdbagel.com/https://api.pinnacle.us.org/1.0/hackathons")
			.then(res => res.json())
			.then(res => hackathons = res.results)
			.then(() => hackathons = hackathons.sort((a, b) => 
				{ return a.internal_title.localeCompare(b.internal_title); }))
			.catch(ex => console.log("GET hackathons failed: "+ex));
	});
</script>

<section class="container-wide component-section-large light-bg" id="carousel">
	<div class="container inner flex-column">
		<div class="header-group">
			<h2>Partnered Events</h2>
			<p>The winners of our partnered hackathons qualify for our premiere event.</p>
		</div>
		<CarouselInner hackathons="{hackathons}" />
		<p>Check out our <a href="/hackathons">full list</a> of partnered events.</p>
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