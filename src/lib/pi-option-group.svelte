
<script>
	export let title;
</script>

<h3>{title}</h3>
<div class="subgroup">
	<slot></slot>
</div>

<style lang="scss">
	@import "./global.scss";

	h3 {
		color: $gold;
	}

	.subgroup {
		margin-left: 45px;
		margin-bottom: 5px;

		> :global(*) {
			margin: 0 !important;
			padding: 10px 0 !important;
		}

		> :global(*:first-child) {
			padding-top: 0 !important;
		}

		:global(span) {
			transform-origin: left;
			transform: scale(0.8);
		}
	}
</style>