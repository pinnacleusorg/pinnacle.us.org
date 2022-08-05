<section class="container-wide component-section dark-bg">
	<div class="container inner" id="timeline">
		<a name="schedule"><h2>Schedule</h2></a>
		<div class="flex-smart">
			<span class="timeline-date">August 2021</span>
			<span class="timeline-desc flex">
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
		<div class="flex-smart">
			<span class="timeline-date">September 17-19, 2021</span>
			<span class="timeline-desc flex">
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
	#timeline {
		font-size: 28px;
		font-weight: lighter;
		max-width: 850px;
		padding: 0 10%;

		h2 {
			text-align: center;
		}

		> div {
			margin-top: 8%;
		}
	}

	.timeline-desc {
		color: $white;
		font-size: 1.3rem;
		margin-left: 10%;

		p {
			margin-top: 0;
		}

		a {
			text-decoration: underline;
		}
	}

	.timeline-date {
		margin-bottom: 15px;
		min-width: 150px;
		text-align: left;
		font-size: 0.8em;
		font-weight: bold;

		@media (min-width: 768px) {
			width: 35%;
		}
	}
</style>
