<script>
	import Chamfer from "$lib/Chamfer.svelte";
	import ScheduleLines from "./ScheduleLines.svelte";
</script>

<section class="container-wide component-section-large" id="schedule">
	<Chamfer color="white" location="top" orientation="right" width={55} />
	<ScheduleLines />

	<a name="schedule"><h2>Schedule</h2></a>
	<div class="container inner">
		<div class="visual-separator" />
		<br />
		<div class="flex-smart">
			<span class="date">Starting August 2022</span>
			<span class="desc flex">
				<p>The Pinnacle qualifying season begins.</p>
				<p>
					Winners of qualifying hackathons will begin receiving invitations for
					Pinnacle 2023.
				</p>
			</span>
		</div>
		<div class="visual-separator" />
		<br />
		<div class="flex-smart">
			<span class="date">End of Year 2023</span>
			<span class="desc flex">
				<p>
					Winners from all around the world fly to Pinnacle 2023 to compete at
					the highest level.
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
