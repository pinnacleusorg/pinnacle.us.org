
<script lang="ts">
	import Button from "./pi-button.svelte";
	export let name: string;

	let fname = "";
	let val = "";
	function getBase64(file: File) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			fname = file.name;
			val = reader.result as string;
		};
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
	}

	function translateFile() {
		const inp = document.querySelector('#'+name) as HTMLInputElement;
		getBase64(inp.files[0]);
	}

	function openFileDialog(e) {
		e.stopPropagation();
		(document.querySelector('#'+name) as HTMLElement).click();
		return false;
	}
</script>

<div class="input">
	<label class="covered-label" for="{name}">
		<span class="cover"></span>
		<span class="content"><slot /></span>
	</label>
	<input id="{name}" type="file" accept="application/pdf" on:change="{translateFile}">
	<input type="hidden" name="{name}" bind:value="{val}" >
	<Button type="button" on:click="{openFileDialog}">
		{#if val.length > 1}
			{fname}
		{:else}
			Upload Your Resume
		{/if}
	</Button>
</div>

<style lang="scss">
	@import "./global.scss";
	@import "./coverable.scss";

	.input {
		display: flex;
		column-gap: 6%;
		width: 100%;

		input {
			display: none;
		}
	}
</style>