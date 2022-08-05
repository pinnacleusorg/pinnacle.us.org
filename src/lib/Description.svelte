<script>
	import { Button } from "@pinnacleusorg/quisp";
</script>

<section
	class="container-wide component-section-large light-bg"
	id="description"
>
	<div class="container inner">
		<div>
			<a name="about"><h2>What is Pinnacle?</h2></a>
			<div class="body">
				<p>
					Pinnacle invites the winning team from each of the world's largest 50
					collegiate hackathons and 5 high school hackathons to compete in an
					epic hack-off. Pinnacle 2021 took place on September 17-19, 2021 in
					Dallas, TX.
				</p>
				<p>
					Our participants, who represent the brightest developers, designers,
					and creators in the nation, received invitations throughout the
					Pinnacle 2020-2021 hackathon season. While the Pinnacle 2020-2021
					season has ended, the Pinnacle 2021-2022 season will be announced
					soon.
				</p>
			</div>
			<br />
			<div class="cta">
				<Button>Contact</Button>
				<Button>Sponsor</Button>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#description {
		position: relative;

		.inner {
			display: flex;
			align-items: center;
			column-gap: 5vw;
			max-width: 850px;
			padding: 0 15px;
		}

		.body {
			display: block;
			font-size: 1.3rem;
			font-weight: lighter;
		}

		.cta {
			display: flex;
			column-gap: 20px;
		}

		div {
			flex: 1 1;
		}
	}
</style>
