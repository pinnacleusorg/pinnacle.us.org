<script lang="ts">
	const sponsors = [
		{
			name: "WorldLink",
			logo: "https://static.pinnacle.us.org/2021/sponsor/worldlink.png",
			url: "https://worldlink-us.com/",
			tier: 1
		},
		{
			name: "Stellar Development Foundation",
			logo: "https://static.pinnacle.us.org/2021/sponsor/sdf.png",
			url: "https://www.stellar.org/",
			tier: 2
		},
		{
			name: "Cisco",
			logo: "https://static.pinnacle.us.org/2021/sponsor/cisco.png",
			url: "https://www.cisco.com/",
			tier: 2
		},
		{
			name: "Wayfair",
			logo: "https://static.pinnacle.us.org/2021/sponsor/wayfair.png",
			url: "https://www.wayfair.com/",
			tier: 2
		},
		{
			name: "Human Capital",
			logo: "https://static.pinnacle.us.org/2021/sponsor/humancapital.png",
			url: "https://human.capital/",
			tier: 2
		},
		{
			name: "Twilio",
			logo: "https://static.pinnacle.us.org/2021/sponsor/twilio.png",
			url: "https://www.twilio.com/",
			tier: 2
		},
		{
			name: "Level",
			logo: "https://static.pinnacle.us.org/2021/sponsor/level.png",
			url: "https://level.co",
			tier: 2
		},
		{
			name: "eBay",
			logo: "https://static.pinnacle.us.org/2021/sponsor/ebay.png",
			url: "https://ebay.com",
			tier: 2
		},
		{
			name: "HRT",
			logo: "https://static.pinnacle.us.org/2021/sponsor/hrt.png",
			url: "https://hudsonrivertrading.com",
			tier: 2
		},
		{
			name: "Airbnb",
			logo: "https://static.pinnacle.us.org/2021/sponsor/airbnb.png",
			url: "https://www.airbnb.com/",
			tier: 2
		},
		{
			name: "Dorm Room Fund",
			logo: "https://static.pinnacle.us.org/2021/sponsor/drf.png",
			url: "https://www.dormroomfund.com",
			tier: 2
		},
		{
			name: "Google Cloud",
			logo: "https://static.pinnacle.us.org/2021/sponsor/gcp.png",
			url: "https://cloud.google.com",
			tier: 2
		},
		{
			name: "Lulzbot",
			logo: "https://static.pinnacle.us.org/2021/sponsor/lulzbot.png",
			url: "https://www.lulzbot.com",
			tier: 2
		},
		{
			name: "Arduino",
			logo: "https://static.pinnacle.us.org/2021/sponsor/arduino.png",
			url: "https://www.arduino.cc",
			tier: 2
		},
		{
			name: "Magic Leap",
			logo: "https://static.pinnacle.us.org/2021/sponsor/magicleap.png",
			url: "https://www.magicleap.com/",
			tier: 2
		}
	];
</script>

<section class="container-wide component-section-large dark-bg" id="sponsors">
	<div class="container">
		<h2 class="text-center">Sponsors</h2>
		<div class="sponsor-logos">
			{#each sponsors as sponsor}
				<a href={sponsor.url} target="_blank" class="sponsor">
					<img src={sponsor.logo} alt={sponsor.name} />
				</a>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	#sponsors {
		text-align: center;
	}

	.sponsor-logos {
		display: flex;
		align-items: center;
		column-gap: 40px;
		width: calc(100% - 40px);
		padding: 0 20px;
		overflow-x: scroll;
	}

	.sponsor-logos .sponsor {
		img {
			min-width: 100%;
			max-width: 200px;
		}
	}
</style>
