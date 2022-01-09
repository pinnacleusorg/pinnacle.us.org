
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
	<textarea id="{name}" type="text" name="{name}" placeholder="{placeholder}" rows="10" required />
</div>

<style lang="scss">
	@import "./global.scss";
	@import "./coverable.scss";

	.input {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		width: 100%;

		.covered-label {
			width: 100%;
			position: relative;
		}

		textarea {
			background: none;
			border: 3px solid $gold;
			color: $gold;
			font-family: inherit;

			flex: 1 1;
			outline: none;

			margin: 0;
			padding: 20px;

			resize: vertical;

			&::placeholder {
				color: transparentize($gold, 0.4);
			}
		}
	}
</style>