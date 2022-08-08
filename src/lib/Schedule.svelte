<script>
	import Chamfer from "$lib/Chamfer.svelte";
</script>

<section class="container-wide component-section-large" id="schedule">
	<Chamfer color="white" location="top" orientation="right" width={55} />
	<svg
		id="sl-1"
		width="107"
		height="1041"
		viewBox="0 0 107 1041"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M105.408 1040.8L105.408 87.6998L0.922985 0.999887"
			stroke="#C69E60"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>
	<svg
		id="sl-2"
		width="323"
		height="482"
		viewBox="0 0 323 482"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.999973 0.799653L366.033 303.7L366.033 481.1"
			stroke="#C69E60"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>
	<svg
		id="sl-3"
		width="265"
		height="428"
		viewBox="0 0 265 428"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1.0872 1.59964L366 304.5L366 427.1"
			stroke="#C69E60"
			stroke-width="2"
			stroke-miterlimit="10"
		/>
	</svg>

	<a name="schedule"><h2>Schedule</h2></a>
	<div class="container inner">
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
		padding-top: 8rem;
		position: relative;

		@media (min-width: 992px) {
			margin-right: 1.5rem;
		}

		&::before,
		&::after {
			display: none;
			content: "";
			position: absolute;
			right: -1.5rem;
			z-index: 6;
			width: 1.5rem;

			@media (min-width: 992px) {
				display: unset;
			}
		}

		&::before {
			@include background-white;
			top: -4rem;
			height: 12rem;
		}
		&::after {
			@include background-gold;
			top: 8rem;
			bottom: calc(-4rem + 1px);
		}

		svg {
			display: none;
			position: absolute;

			@media (min-width: 992px) {
				display: unset;
			}
		}

		#sl-1 {
			top: 8rem;
			right: 2rem;
		}
		#sl-2 {
			right: -6rem;
			bottom: 2rem;
		}
		#sl-3 {
			right: -6rem;
			bottom: -3rem;
		}

		h2 {
			margin-bottom: 3rem;
			text-align: center;
		}

		.inner {
			@include background-white;
			max-width: $max-inner-width;
			padding: 5rem 2.5rem;

			@media (max-width: 768px) {
				margin: 0 7vw;
			}
		}
	}

	.flex-smart {
		column-gap: 15%;
	}

	.desc {
		p {
			margin-top: 0;
			margin-bottom: 1rem;
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
