
<script lang="ts">
	import { scroll } from "./scroll";
	export let name = "";
	export let placeholder = "";

	let el: HTMLElement = null;
	$: active = $scroll > (el ? el.getBoundingClientRect().top : 0);
</script>

<div class="input" bind:this="{el}">
	<label class="covered-label" for="{name}">
		<span class="cover" class:activate="{active}"></span>
		<span class="content"><slot /></span>
	</label>
	<input id="{name}" type="text" name="{name}" placeholder="{placeholder}" required>
</div>

<style lang="scss">
	@import "./global.scss";
	@import "./coverable.scss";

	.input {
		display: flex;
		column-gap: 6%;
		width: 100%;

		input {
			background: none;
			border: none;
			border-bottom: 3px solid $gold;
			color: $gold;

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