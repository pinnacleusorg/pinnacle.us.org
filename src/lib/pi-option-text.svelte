
<script lang="ts">
  export let id: string;
  export let name: string;
  let value: string;

  let inp: HTMLInputElement;
  function forceFocus() {

  }
</script>

<label for="{id}">
	<input type="text" bind:value>
	<input id="{id}" name="{name}" type="radio">
	<span><slot /></span>
	<img class="checknt" src="/icon/checknt.svg" alt="unchecked">
	<img class="checked" src="/icon/checked.svg" alt="checked">
</label>

<style lang="scss">
	@import "./global.scss";

	label {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: flex-end;
		column-gap: 20px;

		padding: 15px 0;
		user-select: none;

		img {
			width: 20px;
		}
	}

	input[type="radio"] {
		position: absolute;
		left: -2000px;

		&:focus + span {
			text-decoration: underline;
		}

		+ span {
			color: $gold;
			opacity: 0.5;
			transition-duration: 0.2s;
		}

		~ .checked {
			display: none;
		}

		&:checked + span {
			opacity: 1;
		}
		&:checked ~ .checked {
			display: block;
		}
		&:checked ~ .checknt {
			display: none;
		}
	}

  input[type="text"] {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid $gold;
    color: $bg-light;
    outline: none;
    flex: 1 1;
  }
</style>