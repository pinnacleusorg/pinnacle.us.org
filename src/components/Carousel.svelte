
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

<div class="container-wide component-section-large light-bg" id="carousel">
	<div class="container inner flex-column">
		<h2>Partnered Events</h2>
		<p class="carousel-subtitle">The winners of our partnered hackathons qualify for our premiere event.</p>
		<CarouselInner hackathons="{hackathons}" />
		<p class="carousel-subtitle">Check out our <a href="/hackathons">full list</a> of partnered events.</p>
	</div>
</div>

<style lang="scss">
	#carousel {
		h2 {
			text-align: center;
			margin-top: 1rem;
			margin-bottom: 0.5rem;
			padding-bottom: 0;
		}
		
		.inner {
			max-width: 90%;
			margin: auto;
		}
	}

	.carousel-subtitle {
		text-align: center;
		font-size: 1.3rem;
		margin: 0;
	}

	@media (max-width: 992px) {
		#carousel h2 {
			padding-bottom: 0.8rem;
		}
	}
</style>