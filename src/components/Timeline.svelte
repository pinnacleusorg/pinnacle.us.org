
<div class="container-wide component-section light-bg">
	<div class="container inner" id="timeline">
		<h2>Timeline</h2>
		<div class="flex-smart">
			<span class="timeline-date">August 2021</span>
			<span class="timeline-desc flex">
				<p>Winners of qualifying hackathons receive an invitation for Pinnacle 2021.</p>
				<p>The 2021-2022 Pinnacle Season begins with new qualifying events in August.</p>
			</span>
		</div>
		<div class="flex-smart">
			<span class="timeline-date">September 17-19, 2021</span>
			<span class="timeline-desc flex">Watch the world's best hackers face off at Pinnacle, live from Dallas.</span>
		</div>
	</div>
</div>

<style lang="scss">
	#timeline {
		font-size: 28px;
		font-weight: lighter;
		max-width: 700px;
		padding: 0 10%;

		h2 {
			text-align: center;
		}

		> div {
			margin-top: 8%;
		}
	}
	
	.timeline-desc {
		color: var(--pinnacle-gold);
		font-size: 1.3rem;
		margin-left: 10%;

		p {
			margin-top: 0;
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