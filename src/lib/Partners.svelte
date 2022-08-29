<script>
	import { Button } from "@pinnacleusorg/quisp";
	import Chamfer from "$lib/Chamfer.svelte";
	import Carousel from "./Carousel.svelte";
</script>

<section class="container-wide component-section-large" id="partners">
	<Chamfer color="grey" location="top" orientation="right" width={35} line>
		<div id="sl-1" />
	</Chamfer>
	<Chamfer color="grey" location="bottom" orientation="left" width={35} line />
	<div class="container inner">
		<div>
			<a name="partners"><h2>Partnered Events</h2></a>
			<p>
				The winners of our partnered hackathons qualify for our premier event.
			</p>
			<br />
			<div class="body">
				<Carousel />
				<Button color="black">See full list</Button>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#partners {
		@include background-white;
		padding-top: 11rem;
		padding-bottom: 11rem;
		text-align: center;

		@media (max-width: 768px) {
			padding-top: 7rem;
			padding-bottom: 9rem;
		}

		#sl-1 {
			@include background-gold;
			display: none;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			z-index: 10;
			min-height: 2.5rem;
			min-width: 100%;

			@media (min-width: 992px) {
				display: unset;
			}
		}

		.inner {
			max-width: 90%;
			padding: 0 15px;

			@media (max-width: 768px) {
				margin: 0 7vw;
			}
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 30px;
		font-weight: lighter;
	}
</style>
