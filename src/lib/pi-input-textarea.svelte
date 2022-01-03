
<script lang="ts">
	export let name = "";
	export let placeholder = "";
</script>

<div class="input">
	<label for="{name}"><span><slot /></span></label>
	<textarea id="{name}" type="text" name="{name}" placeholder="{placeholder}" />
</div>

<style lang="scss">
	@import "./global.scss";

	.input {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		width: 100%;

		label {
			background-color: $gold;
			border-bottom: 3px solid $gold;
			display: flex;
			justify-content: flex-end;

			span {
				background-color: $bg;
				color: $gold;
				padding-left: 10px;
				padding-right: 5px;
			}
		}

		textarea {
			background: none;
			border: 3px solid $gold;
			color: $bg-light;
			font-family: inherit;

			flex: 1 1;
			outline: none;

			margin: 0;
			padding: 20px;

			&::placeholder {
				color: transparentize($gold, 0.4);
			}
		}
	}
</style>