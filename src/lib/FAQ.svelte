<script>
	import BrandButton from "./BrandButton.svelte";
</script>

<section
	class="container-wide component-section-large dark-bg"
	id="description"
>
	<div class="container inner">
		<div>
			<h2>Frequently Asked Questions</h2>
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
				Have more questions? Email <a href="/hackathons"
					>kendall@pinnacle.us.org</a
				>!
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	#description {
		position: relative;

		.inner {
			padding: 0 15px;
		}

		.body {
			display: flex;
			flex-direction: column;
			row-gap: 40px;
			font-size: 1.3rem;
			font-weight: lighter;
		}

		details {
			width: 100%;

			summary {
				border-bottom: 3px solid var(--pinnacle-gold);
				cursor: pointer;
				padding: 10px;
			}
		}

		.tag {
			font-size: 1.3rem;
			margin-top: 3rem;
		}
	}
</style>
