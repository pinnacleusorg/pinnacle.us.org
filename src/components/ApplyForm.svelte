
<script lang="ts">
	import InputText from "$lib/pi-input-text.svelte";
	import InputTextArea from "$lib/pi-input-textarea.svelte";
	import InputTextLines from "$lib/pi-input-textlines.svelte";
	import InputFile from "$lib/pi-input-file.svelte";
	
	import Option from "$lib/pi-option.svelte";
	import OptionGroup from "$lib/pi-option-group.svelte";
	import OptionCheck from "$lib/pi-option-checkbox.svelte";
	import OptionText from "$lib/pi-option-text.svelte";
	import OptionRadio from "$lib/pi-option-radio.svelte";

	import Button from "$lib/pi-button.svelte";

	import { scroll } from "$lib/scroll";
	
	function scrollHandler() {
		$scroll = Math.max($scroll, window.scrollY);
	}
	let el: HTMLElement;
	$: active = $scroll > (el ? el.getBoundingClientRect().top : 0);

	const API_ROOT = import.meta.env.VITE_API_ROOT;

	let form: HTMLFormElement;
	let submitText = "Submit";
	function validify(e: Event) {
		const formData = new FormData(form);
		if (!formData.get("app")) {
			e.preventDefault();
			alert("Please select a team to apply to.");
			return;
		}
		if (!formData.get("resume")) {
			e.preventDefault();
			alert("Please upload a resume.");
			return;
		}
		submitText = "Submitting...";
	}
</script>

<svelte:window on:scroll="{scrollHandler}"></svelte:window>
<h2 id="form-header" bind:this="{el}">Tell us about yourself.</h2>
<div class="vertibar-wrapper">
	<span class="vertibar" class:activate="{active}"></span>
</div>
<br>
<form action="{API_ROOT}/apply" method="post" bind:this="{form}">
	<InputText placeholder="Enter your name here" name="fullname">Name</InputText>
	<InputText placeholder="Enter your email here" name="email">Email</InputText>
	<InputText placeholder="Enter your school or organization here" name="org">School/Org</InputText>
	<Option title="How did you hear about us?">
		<OptionRadio name="ref" id="ref-schoolemail">School Major Email List</OptionRadio>
		<OptionRadio name="ref" id="ref-clubemail">School Club Email or Meeting</OptionRadio>
		<OptionRadio name="ref" id="ref-socialmedia">Social Media</OptionRadio>
		<OptionText name="ref" id="ref-by" placeholder="Referred by">Referred by:</OptionText>
		<OptionText name="ref" id="ref-other" placeholder="Other">Other:</OptionText>
	</Option>
	<InputFile name="resume">Resume</InputFile>
	<InputTextLines name="links" placeholder="Website, LinkedIn, GitHub, etc.">Links</InputTextLines>
	<Option title="Which team(s) would you like to join?">
		<p slot="description"><a target="_blank" href="https://docs.google.com/document/d/1cTlglz9H3aYpbtMRymkH4hiSTt0Sm4FEcjrqGe6NBzw/edit">&gt; View more about each team here.</a></p>
		<OptionGroup title="Branding & Design">
			<OptionCheck id="Design" name="app">Design</OptionCheck>
			<OptionCheck id="Marketing" name="app">Marketing</OptionCheck>
		</OptionGroup>
		<OptionGroup title="Engineering">
			<OptionCheck id="Experience" name="app">Experience</OptionCheck>
			<OptionCheck id="Infrastructure" name="app">Infrastructure</OptionCheck>
		</OptionGroup>
		<OptionGroup title="Operations">
			<OptionCheck id="HackerRelations" name="app">Hacker Relations</OptionCheck>
			<OptionCheck id="Logistics" name="app">Logistics</OptionCheck>
			<OptionCheck id="Partnerships" name="app">Partnerships</OptionCheck>
		</OptionGroup>
		<OptionGroup title="Sponsorships">
			<OptionCheck id="FiscalSponsor" name="app">Fiscal Sponsorships</OptionCheck>
			<OptionCheck id="HardwareSponsor" name="app">Hardware Sponsorships</OptionCheck>
		</OptionGroup>
	</Option>
	<InputTextArea name="values" placeholder="Type your response here.">
		What value would you be able to bring to the Pinnacle team?
	</InputTextArea>
	<br>
	<div class="submit">
		<Button on:click="{validify}">{submitText}</Button>
	</div>
</form>

<style lang="scss">
	a:hover {
		color: var(--pinnacle-gold);
		text-decoration: underline;
	}

	h2 {
		color: var(--pinnacle-gold);
		font-weight: normal;
		text-align: center;
		margin: 0;
	}

	.vertibar-wrapper {
		display: block;
		min-height: 60px;
		margin: 80px auto;
	}

	.vertibar {
		background-color: var(--pinnacle-gold);
		display: block;
		height: 0px;
		width: 3px;
		margin: 80px auto;
		margin-top: 50px;

		&.activate {
			animation: slideDown 1.5s forwards;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		row-gap: 60px;
		padding-bottom: 30vh;
	}

	.submit {
		margin: auto;
	}

	@keyframes slideDown {
		0% {
			height: 0px;
		}
		100% {
			height: 60px;
		}
	}
</style>