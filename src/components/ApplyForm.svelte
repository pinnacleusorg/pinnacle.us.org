
<script lang="ts">
	import InputText from "$lib/pi-input-text.svelte";
	import InputTextArea from "$lib/pi-input-textarea.svelte";
	import InputTextLines from "$lib/pi-input-textlines.svelte";
	import InputFile from "$lib/pi-input-file.svelte";
	
	import OptionGroup from "$lib/pi-option.svelte";
	import OptionCheck from "$lib/pi-option-checkbox.svelte";
	import OptionText from "$lib/pi-option-text.svelte";
	import OptionRadio from "$lib/pi-option-radio.svelte";

	import Button from "$lib/pi-button.svelte";

	import { scroll } from "$lib/scroll";
	
	function scrollHandler() {
		$scroll = Math.max($scroll, window.scrollY);
	}
</script>

<svelte:window on:scroll="{scrollHandler}"></svelte:window>
<h2 id="form-header">Tell us about yourself.</h2>
<div class="vertibar-wrapper">
	<span class="vertibar"></span>
</div>
<br>
<form action="http://localhost:9001/1.0/apply" method="post">
	<InputText placeholder="Enter your name here" name="fullname">Name</InputText>
	<InputText placeholder="Enter your email here" name="email">Email</InputText>
	<InputText placeholder="Enter your school or organization here" name="org">School/Org</InputText>
	<OptionGroup title="How did you hear about us?">
		<OptionRadio name="ref" id="ref-schoolemail">School Major Email List</OptionRadio>
		<OptionRadio name="ref" id="ref-clubemail">School Club Email or Meeting</OptionRadio>
		<OptionRadio name="ref" id="ref-socialmedia">Social Media</OptionRadio>
		<OptionText name="ref" id="ref-by">Referred by:</OptionText>
		<OptionText name="ref" id="ref-other">Other:</OptionText>
	</OptionGroup>
	<InputFile name="resume">Resume</InputFile>
	<InputTextLines name="links" placeholder="Website, LinkedIn, GitHub, etc.">Links</InputTextLines>
	<OptionGroup title="Which teams would you like to join?">
		<OptionCheck id="Sponsorships" name="app">Sponsorships</OptionCheck>
		<OptionCheck id="Operations/Outreach" name="app">Operations/Outreach</OptionCheck>
		<OptionCheck id="Marketing" name="app">Marketing</OptionCheck>
		<OptionCheck id="Tech/Engineering" name="app">Tech/Engineering</OptionCheck>
		<OptionCheck id="Branding" name="app">Branding</OptionCheck>
	</OptionGroup>
	<InputTextArea name="values" placeholder="Type your response here.">
		What value would you be able to bring to the Pinnacle team?
	</InputTextArea>
	<br>
	<div class="submit">
		<Button>Submit</Button>
	</div>
</form>

<style lang="scss">
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
		animation: slideDown 1.5s forwards;
		background-color: var(--pinnacle-gold);
		display: block;
		height: 60px;
		width: 3px;
		margin: 80px auto;
		margin-top: 50px;
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