<script>
	import Chamfer from "$lib/Chamfer.svelte";
</script>

<section class="container-wide component-section-large" id="schedule">
	<Chamfer color="white" location="top" orientation="right" width={50} />
	<div class="container inner">
		<a name="schedule"><h2>Schedule</h2></a>
		<div class="flex-smart">
			<span class="date">August 2021</span>
			<span class="desc flex">
				<p>
					Winners of qualifying hackathons receive an invitation for Pinnacle
					2021.
				</p>
				<p>
					The 2021-2022 Pinnacle Season begins with new qualifying events in
					August.
				</p>
			</span>
		</div>
		<br />
		<div class="flex-smart">
			<span class="date">September 17-19, 2021</span>
			<span class="desc flex">
				<p>Pinnacle 2021 event takes place.</p>
				<p>
					<a href="https://www.twitch.tv/pinnacleusorg/videos" target="_blank">
						Click here to watch the recordings from the livestream.
					</a>
				</p>
			</span>
		</div>
	</div>
</section>

<style lang="scss">
	#schedule {
		@include background-grey;

		.inner {
			@include background-white;
			max-width: $max-inner-width;
			padding: 5rem 2.5rem;
		}
	}

	h2 {
		text-align: center;
	}

	.flex-smart {
		column-gap: 15%;
	}

	.desc {
		p {
			margin-top: 0;
		}

		a {
			text-decoration: underline;
		}
	}

	.date {
		margin-bottom: 15px;
		min-width: 150px;
		text-align: left;
		font-weight: bold;

		@media (min-width: 768px) {
			width: 35%;
		}
	}
</style>
