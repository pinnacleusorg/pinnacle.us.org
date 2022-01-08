
<script>
	export let type = "submit";
</script>

<button type="{type}" class="button" on:click>
	<slot />
</button>

<style lang="scss">
	@import "./global.scss";

	.button {
		background-color: transparent;
		border: 3px solid $gold;
		border-radius: 5px;
		color: $gold;
		font-family: inherit;
		margin: -5px 0;
		padding: 8px 50px;

		transition-duration: 0.2s;

		&:hover {
			background-color: $gold;
			color: $bg-light;
		}
	}
</style>