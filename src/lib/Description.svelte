<script>
	import BrandButton from "./BrandButton.svelte";
</script>

<section
	class="container-wide component-section-large dark-bg"
	id="description"
>
	<div class="container inner">
		<div class="img">
			<img src="/image/triangle.jpg" alt="" />
		</div>
		<div>
			<a name="about"><h2>What is Pinnacle?</h2></a>
			<div class="body">
				<p>
					Pinnacle invites the winning team from each of the world’s largest 50
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
				<BrandButton href="/" primary>Contact</BrandButton>
				<BrandButton href="/">Sponsor</BrandButton>
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

		img {
			max-width: 100%;
		}

		@media (max-width: 768px) {
			.img {
				display: none;
			}
		}

		@media (max-width: 992px) {
			.img {
				flex: 0.5 1;
			}
		}
	}
</style>
