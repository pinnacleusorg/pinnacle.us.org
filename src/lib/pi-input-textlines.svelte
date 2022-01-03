
<script lang="ts">
	export let name = "";
	export let placeholder = "";

	let lines: string[] = [];

	function filterizer(v: string, i: number) {
		if (v) return true;
		else if (i != lines.length-1) return true;
		else return false;
	}
</script>

<div class="input">
	<label for="{name}"><span><slot /></span></label>
	<div>
		<input type="text" placeholder="{placeholder}" bind:value="{lines[0]}">
		{#each lines.filter(filterizer) as _, i}
			<input type="text" placeholder="{placeholder}" bind:value="{lines[i + 1]}">
		{/each}
	</div>
	<input type="hidden" id="{name}" name="{name}" value="{lines.join(',')}">
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
			height: max-content;
			width: 30%;

			span {
				background-color: $bg;
				color: $gold;
				padding-left: 10px;
				padding-right: 5px;
			}
		}

		> div {
			display: flex;
			flex-direction: column;
			flex: 1 1;
			row-gap: 30px;
		}

		input {
			background: none;
			border: none;
			border-bottom: 3px solid $gold;
			color: $bg-light;

			flex: 1 1;
			outline: none;

			margin: 0;
			padding: 0 8px;
			padding-bottom: 6px;

			&::placeholder {
				color: transparentize($gold, 0.4);
			}
		}
	}
</style>