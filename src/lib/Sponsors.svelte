<script lang="ts">
</script>

<section class="container-wide component-section-large" id="engagement">
	<a name="contact"><h2>Sponsors</h2></a>
	<div class="container inner">
		<div class="bg" />
		<div class="bg-rect" />
		<div class="flex-smart deck">deck content</div>
	</div>
</section>

<style lang="scss">
	#engagement {
		@include background-grey;
		padding-top: 6rem;
		text-align: center;

		h2 {
			margin-bottom: 2rem;
		}

		.inner {
			max-width: $max-inner-width;
			padding: 5rem 2.5rem;
			padding-bottom: 4rem;

			@media (max-width: 768px) {
				margin: 0 3vw;
			}

			position: relative;

			.bg {
				@include background-white;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}

			.bg-rect {
				border: 2px solid $gold;
				position: absolute;
				top: 30px;
				left: 30px;
				right: 30px;
				bottom: 30px;
			}

			.deck {
				position: relative;
				z-index: 5;
			}
		}
	}
</style>
