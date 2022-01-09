
<script lang="ts">
	import { fade } from "svelte/transition";
	import { scroll } from "./scroll";
	export let name = "";
	export let placeholder = "";

	let lines: string[] = [];

	function filterizer(v: string, i: number) {
		if (v) return true;
		else return false;
	}

  let el: HTMLElement = null;
  $: active = $scroll > (el ? el.getBoundingClientRect().top : 0);
</script>

<div class="input" bind:this="{el}">
	<label class="covered-label" for="{name}">
		<span class="cover" class:activate="{active}"></span>
		<span class="content"><slot /></span>
	</label>
	<div>
		<input type="text" placeholder="{placeholder}" bind:value="{lines[0]}" required>
		{#each lines.filter(filterizer) as _, i}
			<input type="text" placeholder="{placeholder}" bind:value="{lines[i + 1]}" transition:fade>
		{/each}
	</div>
	<input type="hidden" id="{name}" name="{name}" value="{lines.join(',')}">
</div>

<style lang="scss">
	@import "./global.scss";
	@import "./coverable.scss";

	.input {
		display: flex;
		column-gap: 6%;
		width: 100%;

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