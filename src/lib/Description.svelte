<script>
	import { Button } from "@pinnacleusorg/quisp";
	import DescriptionLines from "./DescriptionLines.svelte";
</script>

<section class="container-wide component-section-large" id="description">
	<DescriptionLines />
	<div class="container inner">
		<div>
			<div class="body">
				<a name="about"><h2>What is Pinnacle?</h2></a>
				<p>
					Pinnacle invites the winning team from each of the world’s largest 50
					collegiate hackathons and 5 high school hackathons to compete in an
					epic hack-off. Pinnacle will return September 2023.
				</p>
				<p>
					Our participants, who represent the brightest developers, designers,
					and creators in the nation, will receive invitations throughout the
					Pinnacle 2022-2023 hackathon season.
				</p>
				<br />
				<div class="cta">
					<Button color="black" href="#contact">Contact</Button>
					<Button color="black-outline">Sponsor</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#description {
		@include background-white;
		position: relative;

		.inner {
			display: flex;
			align-items: center;
			column-gap: 5vw;
			max-width: $max-inner-width;
		}

		.body {
			max-width: 665px;
			margin: auto;

			@media (max-width: 768px) {
				margin: auto 3vw;
				padding: 0 2.5rem;
			}
		}

		.cta {
			@include background-white;
			display: flex;
			line-height: 1;
			column-gap: 20px;
			position: relative;
			z-index: 10;

			@media (max-width: 768px) {
				flex-direction: column;
				row-gap: 20px;
				margin: 0 50px;
			}
		}

		div {
			flex: 1 1;
		}
	}
</style>
