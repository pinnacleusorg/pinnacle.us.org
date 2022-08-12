<script>
	import Chamfer from "$lib/Chamfer.svelte";
</script>

<section class="container-wide component-section-large" id="faq">
	<Chamfer color="grey" location="top" orientation="right" width={35} line>
		<div id="sl-1" />
	</Chamfer>
	<Chamfer color="grey" location="bottom" orientation="left" width={35} line />
	<div class="container inner">
		<div>
			<a name="faq"><h2>Frequently Asked Questions</h2></a>
			<br />
			<div class="body">
				<details>
					<summary>How do I join?</summary>
					<p>Just win!</p>
				</details>
				<details>
					<summary>How do I become a sponsor?</summary>
					<p>Just win as a sponsor!</p>
				</details>
				<details>
					<summary>How do I become a join (again)?</summary>
					<p>Just win more!</p>
				</details>
				<details>
					<summary>How do I become a join (after that)?</summary>
					<p>Just win EVEN more!</p>
				</details>
			</div>
			<br />
			<p class="tag">
				Still need help? Email <a href="/hackathons"
					>kendall@pinnacle.us.org
				</a>!
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	#faq {
		@include background-white;
		padding-top: 11rem;
		padding-bottom: 11rem;

		@media (max-width: 768px) {
			padding-top: 7rem;
			padding-bottom: 9rem;
		}

		#sl-1 {
			@include background-gold;
			display: none;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			z-index: 10;
			min-height: 2.5rem;
			min-width: 100%;

			@media (min-width: 992px) {
				display: unset;
			}
		}

		.inner {
			max-width: $max-inner-width;
			padding: 0 15px;

			@media (max-width: 768px) {
				margin: 0 7vw;
			}
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		font-weight: lighter;
	}

	details {
		width: 100%;

		summary {
			border-bottom: 3px solid $gold;
			cursor: pointer;
			padding: 10px;
		}
	}

	.tag {
		margin-top: 2rem;
		text-align: center;
	}
</style>
