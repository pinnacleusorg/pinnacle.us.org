<script lang="ts">
	export let showLegal = false;
</script>

<footer>
	<div class="container-wide inner">
		&copy; 2023 Pinnacle
		{#if showLegal}
			<div class="legalees">
				<span class="small" id="updatedMsg">
					We will never sell or distribute your contact information without your
					consent &bull;
					<a href="/privacy">Our privacy policy</a>
				</span>
			</div>
		{/if}
	</div>
</footer>

<style lang="scss">
	footer {
		@include background-dark;
		letter-spacing: 1.2px;

		position: absolute;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		> div {
			text-align: center;
			padding: 3rem;
		}

		.legalees {
			.small {
				letter-spacing: 0.3px;
				font-size: 70%;
				font-weight: lighter;
			}

			a {
				color: $white;
				text-decoration: underline;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
