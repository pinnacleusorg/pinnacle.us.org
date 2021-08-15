<script lang="ts">
	const sponsors = [
		{
			name: "WorldLink",
			logo: "https://static.pinnacle.us.org/2021/sponsor/worldlink.png",
			url: "https://",
			tier: 1
		},
		{
			name: "Stellar Development Foundation",
			logo: "https://static.pinnacle.us.org/2021/sponsor/sdf.png",
			url: "https://",
			tier: 2
		},
		{
			name: "Human Capital",
			logo: "https://static.pinnacle.us.org/2021/sponsor/humancapital.png",
			url: "https://",
			tier: 2
		},
		{
			name: "Magic Leap",
			logo: "https://static.pinnacle.us.org/2021/sponsor/magicleap.png",
			url: "https://",
			tier: 2
		},
		{
			name: "Airbnb",
			logo: "https://static.pinnacle.us.org/2021/sponsor/ebay.png",
			url: "https://",
			tier: 2
		},
		{
			name: "Airbnb",
			logo: "https://static.pinnacle.us.org/2021/sponsor/airbnb.png",
			url: "https://",
			tier: 2
		},
	];
</script>

<section class="container-wide component-section-large dark-bg" id="sponsors">
	<div class="container inner">
		<h2 class="text-center">Sponsors</h2>
		<div class="sponsor-logos">
			{#each sponsors as sponsor}
				<a href={sponsor.url} target="_blank" class="sponsor tier-{sponsor.tier}">
					<img src={sponsor.logo} alt={sponsor.name} />
				</a>
			{/each}
			<div class="sponsor" id="sponsor-ad">
				Interested in being a sponsor?<br />
				Please email us at
				<a href="mailto:sponsor@pinnacle.us.org">sponsor@pinnacle.us.org</a>.
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#sponsors {
		text-align: center;
	}

	.sponsor-logos {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		column-gap: 40px;
		width: calc(100% - 40px);
		padding: 0 20px;
	}

	.sponsor-logos .sponsor {
		margin: 3rem auto;
		width: 90%;
		max-width: 300px;

		@media (min-width: 768px) {
			width: 100%;
		}

		img {
			width: 100%;
		}

		&.tier-1 {
			max-width: 900px;
		}

		&.tier-2 {
			max-width: 250px;
		}
	}

	#sponsor-ad {
		max-width: 100%;
		line-height: 1.5;
		font-size: 1.5rem;
	}
</style>
