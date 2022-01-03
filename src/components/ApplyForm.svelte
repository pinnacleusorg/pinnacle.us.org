
<script lang="ts">
	import InputText from "../lib/pi-input-text.svelte";
	import InputTextArea from "../lib/pi-input-textarea.svelte";
	import InputTextLines from "../lib/pi-input-textlines.svelte";
	import InputFile from "../lib/pi-input-file.svelte";
	
	import OptionGroup from "../lib/pi-option.svelte";
	import OptionText from "../lib/pi-option-text.svelte";
	import OptionRadio from "../lib/pi-option-radio.svelte";
</script>

<h2>Tell us about yourself.</h2>
<span class="vertibar"></span>
<br>
<form action="">
	<InputText placeholder="Enter your name here" name="fullname">Name</InputText>
	<InputText placeholder="Enter your email here" name="email">Email</InputText>
	<InputText placeholder="Enter your school or organization here" name="org">School/Org</InputText>
	<OptionGroup title="How did you hear about us?">
		<OptionRadio name="ref" id="ref-schoolemail">School Major Email List</OptionRadio>
		<OptionRadio name="ref" id="ref-clubemail">School Club Email or Meeting</OptionRadio>
		<OptionRadio name="ref" id="ref-socialmedia">Social Media</OptionRadio>
		<OptionText name="ref" id="ref-by" value="Referred by:">Referred by:</OptionText>
		<OptionText name="ref" id="ref-other" value="Referred by:">Referred by:</OptionText>
	</OptionGroup>
	<InputFile>Resume</InputFile>
	<InputTextLines name="links" placeholder="Website, LinkedIn, GitHub, etc.">Links</InputTextLines>
	<OptionGroup title="Which teams would you like to join?">
		<OptionRadio name="app" id="team-1">Sponsorships</OptionRadio>
		<OptionRadio name="app" id="team-2">Operations/Outreach</OptionRadio>
		<OptionRadio name="app" id="team-3">Marketing</OptionRadio>
		<OptionRadio name="app" id="team-4">Tech/Engineering</OptionRadio>
		<OptionRadio name="app" id="team-5">Branding</OptionRadio>
	</OptionGroup>
	<InputTextArea name="values" placeholder="Type your response here.">
		What value would you be able to bring to the Pinnacle team?
	</InputTextArea>
	<button>SUbmit</button>
</form>

<style lang="scss">
	h2 {
		color: var(--pinnacle-gold);
		font-weight: normal;
		text-align: center;
		margin: 0;
	}

	.vertibar {
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
</style>