
<script>
	import Button from "./pi-button.svelte";
	export let name;

	let val = "";
	function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
		 val = reader.result;
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

	function dostuff() {
		var file = document.querySelector('#'+name).files[0];
		getBase64(file);
	}
</script>

<div class="input">
	<label for="{name}"><span><slot /></span></label>
	<input id="{name}" type="file" on:change="{dostuff}">
	<input type="hidden" name="{name}" bind:value="{val}" >
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
		}
	}
</style>