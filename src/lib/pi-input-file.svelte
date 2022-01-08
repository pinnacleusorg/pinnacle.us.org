
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
		getBase64(document.querySelector('#'+name).files[0]);
	}

	function openFileDialog(e) {
		e.stopPropagation();
		document.querySelector('#'+name).click();
		return false;
	}
</script>

<div class="input">
	<label for="{name}"><span><slot /></span></label>
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