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

	<svg
		class="mobile"
		width="214"
		height="134"
		viewBox="0 0 214 134"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M35.3141 133.18L132.607 19.1133L189.589 19.1133"
			stroke="#C69E60"
			stroke-miterlimit="10"
		/>
		<path
			d="M77.3271 115.029L174.62 0.999998L214 1"
			stroke="#C69E60"
			stroke-miterlimit="10"
		/>
		<path
			d="M193.989 62.1191L-112.152 62.1191L-140 94.7688"
			stroke="#C69E60"
			stroke-miterlimit="10"
		/>
	</svg>

	<a name="schedule"><h2>Schedule</h2></a>
	<div class="container inner">
		<div class="visual-separator" />
		<br />
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
		<div class="visual-separator" />
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
		padding-top: 6rem;
		position: relative;

		@media (min-width: 992px) {
			margin-right: 1.5rem;
		}

		@media (min-width: 992px) {
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
		}

		svg:not(.mobile) {
			display: none;
			position: absolute;

			@media (min-width: 992px) {
				display: unset;
			}
		}

		svg.mobile {
			position: absolute;
			top: 11rem;
			left: -8rem;
			height: 15rem;
			width: 20rem;

			@media (min-width: 768px) {
				display: none;
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
			margin-bottom: 2rem;
			text-align: center;
		}

		.inner {
			@include background-white;
			max-width: $max-inner-width;
			padding: 5rem 2.5rem;

			@media (max-width: 768px) {
				margin: 0 3vw;
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

	@media (max-width: 768px) {
		.desc,
		.date {
			text-align: center;
		}
	}

	.visual-separator {
		background-color: $gold;
		width: 2px;
		height: 6rem;
		margin: 1rem auto;
		position: relative;

		&::after,
		&::before {
			border-radius: 50%;
			content: "";
			position: absolute;
			top: 100%;
			left: -30px;
			right: -30px;
			margin: auto;
		}

		&::before {
			background-color: $gold;
			height: 16px;
			width: 16px;
		}

		&::after {
			background-color: $white;
			height: 12px;
			width: 12px;
			transform: translateY(2px);
		}

		&:first-child {
			margin-top: -6rem;
		}

		@media (min-width: 768px) {
			display: none;
		}
	}
</style>
