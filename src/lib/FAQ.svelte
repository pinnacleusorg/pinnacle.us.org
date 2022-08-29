<script>
	import Chamfer from "$lib/Chamfer.svelte";
	import ScheduleLines from "./ScheduleLines.svelte";
</script>

<section class="container-wide component-section-large" id="faq">
	<Chamfer color="grey" location="bottom" orientation="left" width={35} line />
	<a name="faq"><h2>Frequently Asked Questions</h2></a>
	<div class="container inner">
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
			Still need help? Email <a href="/hackathons">kendall@pinnacle.us.org </a>!
		</p>
	</div>
</section>

<style lang="scss">
	#faq {
		@include background-grey;
		padding-top: 6rem;
		position: relative;

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
	}
</style>
