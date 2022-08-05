<script lang="ts">
	import Hero from "$lib/Splash.svelte";
	import {
		scroll,
		Button,
		InputFile,
		InputText,
		InputTextArea,
		InputTextLines,
		Option,
		OptionCheckbox,
		OptionGroup,
		OptionText,
		OptionRadio
	} from "@pinnacleusorg/quisp";
	import type { SvelteComponent } from "svelte";
	import { onMount } from "svelte";

	const API_ROOT = import.meta.env.VITE_API_ROOT;

	onMount(() => {
		setTimeout(() => {
			window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
		}, 2000);
	});

	// Scroll reveal for QUISP components
	function scrollHandler() {
		$scroll = Math.max($scroll, window.scrollY);
	}
	let el: HTMLElement;
	$: active = $scroll > (el ? el.getBoundingClientRect().top : 0);

	// Form submission logic
	let form: HTMLFormElement;
	let submitText = "Submit";
	let submitter: SvelteComponent;
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
	function submit() {
		submitter.setAttribute("disabled", "true");
	}
</script>

<svelte:window on:scroll={scrollHandler} />
<div class="apply">
	<Hero />
	<div class="container">
		<h2 id="form-header" bind:this={el}>Tell us about yourself.</h2>
		<div class="vertibar-wrapper">
			<span class="vertibar" class:activate={active} />
		</div>
		<br />
		<form
			action="{API_ROOT}/apply"
			method="post"
			bind:this={form}
			on:submit={submit}
		>
			<InputText
				placeholder="Enter your name here"
				label="Name"
				name="fullname"
			/>
			<InputText
				placeholder="Enter your email here"
				label="Email"
				name="email"
			/>
			<InputText
				placeholder="Your school or org"
				label="School/Org"
				name="org"
			/>
			<Option title="How did you hear about us?">
				<OptionRadio name="ref" id="r-se" label="School Major Email List" />
				<OptionRadio
					name="ref"
					id="r-ce"
					label="School Club Email or Meeting"
				/>
				<OptionRadio name="ref" id="r-sm" label="Social Media" />
				<OptionText
					name="ref"
					id="r-by"
					label="Referred:"
					placeholder="Person"
				/>
				<OptionText name="ref" id="r-o" label="Other:" placeholder="Other" />
			</Option>
			<InputFile placeholder="Resume" label="Resume" name="resume" />
			<InputTextLines
				placeholder="Website, LinkedIn, GitHub, etc."
				label="Links"
				name="links"
			>
				Links
			</InputTextLines>
			<Option title="Which team(s) would you like to join?">
				<p slot="description">
					<a
						target="_blank"
						href="https://docs.google.com/document/d/1cTlglz9H3aYpbtMRymkH4hiSTt0Sm4FEcjrqGe6NBzw/edit"
					>
						&gt; View more about each team here.
					</a>
				</p>
				<OptionGroup title="Branding & Design">
					<OptionCheckbox id="Design" name="app" label="Design" />
					<OptionCheckbox id="Marketing" name="app" label="Marketing" />
				</OptionGroup>
				<OptionGroup title="Engineering">
					<OptionCheckbox id="Experience" name="app" label="Experience" />
					<OptionCheckbox
						id="Infrastructure"
						name="app"
						label="Infrastructure"
					/>
				</OptionGroup>
				<OptionGroup title="Operations">
					<OptionCheckbox
						id="HackerRelations"
						name="app"
						label="Hacker Relations"
					/>
					<OptionCheckbox id="Logistics" name="app" label="Logistics" />
					<OptionCheckbox id="Partnerships" name="app" label="Partnerships" />
				</OptionGroup>
				<OptionGroup title="Sponsorships">
					<OptionCheckbox id="Sponsorships" name="app" label="Sponsorships" />
					<OptionCheckbox
						id="HardwareSponsor"
						name="app"
						label="Hardware Sponsorships"
					/>
				</OptionGroup>
			</Option>
			<InputTextArea
				placeholder="Type your response here."
				label="What value would you be able to bring to the Pinnacle team?"
				name="values"
			/>
			<br />
			<div class="submit">
				<Button on:click={validify} bind:this={submitter}>{submitText}</Button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	.container {
		max-width: 700px;
	}

	a:hover {
		color: $gold;
		text-decoration: underline;
	}

	h2 {
		color: $gold;
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
		background-color: $gold;
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
		row-gap: 45px;
		padding: 0 10px;
		padding-bottom: 30vh;

		@media (min-width: 512px) {
			row-gap: 60px;
		}
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
