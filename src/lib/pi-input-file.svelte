
<script lang="ts">
	import Button from "./pi-button.svelte";
	export let name: string;
</script>

<div class="input">
	<label for="{name}"><span><slot /></span></label>
	<input id="{name}" type="file" name="{name}">
	<Button>Upload Your Resume</Button>
</div>

<style lang="scss">
	@import "./global.scss";

	.input {
		display: flex;
		column-gap: 6%;
		width: 100%;

		label {
			background-color: $gold;
			border-bottom: 3px solid $gold;
			display: flex;
			justify-content: flex-end;
			width: 30%;

			span {
				background-color: $bg;
				color: $gold;
				padding-left: 10px;
				padding-right: 5px;
			}
		}

		input {
			display: none;
		}
	}
</style>