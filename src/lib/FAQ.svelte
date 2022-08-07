<script>
</script>

<section class="container-wide component-section-large" id="faq">
	<div class="c-bl" />
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

		.c-bl {
			@include background-grey;
			--path: polygon(0 0, calc(100% - 3rem) 0, 100% 100%, 0 100%);
			-webkit-clip-path: var(--path);
			clip-path: var(--path);
			position: absolute;
			bottom: -1px;
			left: 0;
			display: block;
			min-height: 3rem;
			min-width: 35%;
			z-index: 5;
		}
	}

	.inner {
		max-width: $max-inner-width;
		padding: 0 15px;
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
