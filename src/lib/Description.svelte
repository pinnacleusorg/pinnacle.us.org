<script>
	import { Button } from "@pinnacleusorg/quisp";
</script>

<section class="container-wide component-section-large" id="description">
	<svg
		id="dl-1"
		width="326"
		height="633"
		viewBox="0 0 326 633"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1.60217 631.772L324.232 263.699V0.973633"
			stroke="#C69E60"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>
	<svg
		id="dl-2"
		width="457"
		height="1148"
		viewBox="0 0 457 1148"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M280.97 1.00024L-134 474.292L236 877"
			stroke="#C69E60"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>
	<svg
		id="dl-3"
		width="424"
		height="800"
		viewBox="0 0 424 800"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M569.496 1.04785L1 569.544V799.645"
			stroke="#C69E60"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>
	<svg
		id="dl-4"
		width="336"
		height="743"
		viewBox="0 0 336 743"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1.58704 741.415L742.002 1"
			stroke="#C69E60"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>

	<div class="container inner">
		<div>
			<div class="body">
				<a name="about"><h2>What is Pinnacle?</h2></a>
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
				<Button color="black">Contact</Button>
				<Button color="black-outline">Sponsor</Button>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#description {
		@include background-white;
		position: relative;

		svg {
			display: none;
			position: absolute;
			z-index: 6;

			@media (min-width: 992px) {
				display: unset;
			}
		}

		#dl-1 {
			top: -4rem;
			left: -6rem;
		}

		#dl-2 {
			top: 6rem;
			left: -8rem;
		}

		#dl-3 {
			bottom: -4rem;
			right: 0;
		}
		#dl-4 {
			bottom: 4rem;
			right: 0;
		}

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
			justify-content: flex-end;
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
