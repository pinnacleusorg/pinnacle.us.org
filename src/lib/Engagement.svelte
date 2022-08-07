<script lang="ts">
	import { Button } from "@pinnacleusorg/quisp";
	import { contactsSubscribe } from "./app/api";
	import Socials from "./Socials.svelte";

	let subscribeDisabled = false;
	let name: string, email: string; // Bound values

	function trySubscribe(e: Event): void {
		e.preventDefault();

		name = name.trim();
		email = email.trim();
		if (!name || !email || subscribeDisabled) return;
		subscribeDisabled = true;

		//submit, report to #updatedMsg.
		contactsSubscribe(email, name).then((res) => {
			if (res.ok)
				document.querySelector("#updatedMsg").classList.add("successful");
			else document.querySelector("#updatedMsg").classList.add("err");
			document.querySelector("#updatedMsg").textContent = res.message;
			name = "";
			email = "";
			subscribeDisabled = false;
		});
	}
</script>

<section class="container-wide component-section-large" id="engagement">
	<div class="container inner">
		<a name="contact"><h2>Follow the Journey</h2></a>
		<div class="flex-smart deck">
			<div class="card">
				<h3>Be Future Staff</h3>
				<p>Be a part of the team that<br /> makes it happen.</p>
				<Button color="black">Apply Now</Button>
			</div>
			<div class="card-divider" />
			<form class="card" action="/mailing">
				<h3>Stay in the Loop</h3>
				<input
					bind:value={name}
					type="text"
					id="e-fn"
					name="name"
					placeholder="First name"
				/>
				<input
					bind:value={email}
					type="email"
					id="e-email"
					name="email"
					placeholder="Email address"
				/>
				<div id="updatedMsg">&nbsp;</div>
				<Button color="black" on:click={trySubscribe}>Stay Updated</Button>
			</form>
		</div>
		<br />
		<Socials />
	</div>
</section>

<style lang="scss">
	#engagement {
		@include background-grey;
		text-align: center;

		.inner {
			@include background-white;
			max-width: $max-inner-width;
		}
	}

	.card {
		display: flex;
		align-items: center;
		flex-direction: column;
		flex: 1 1;
		margin-bottom: 1rem;
		padding: 0 1.25rem;

		h3 {
			font-size: 1.3rem;
			margin-top: 0;
			margin-bottom: 1rem;

			@media (min-width: 768px) {
				margin-top: unset;
			}
		}

		p {
			flex: 1 1;
			font-family: "Noto Sans", sans-serif;
			font-size: 0.8rem;
			margin-top: 0;
			padding: 0.5rem 4rem;
		}
	}

	.card-divider {
		background-color: $gold;
		flex: 0 0 3px;
		margin: 5vh 10vw;

		@media (min-width: 768px) {
			margin: 2em 0;
		}
	}

	input {
		background-color: transparent;
		border: 2px solid $bg;
		border-radius: 0;
		box-sizing: border-box;
		color: $bg;
		font-size: 0.8rem;
		font-family: "Noto Sans", sans-serif;

		margin: 0 auto;
		padding: 0.35rem 0.6rem;
		width: 80%;
	}
	input::placeholder {
		color: $bg;
		opacity: 0.5;
	}
	input:focus,
	input:active {
		border-color: $gold;
		box-shadow: none;
		color: $gold;
		outline: none;
	}
	input:first-of-type {
		border-bottom-width: 1px;
	}
	input:last-of-type {
		border-top-width: 1px;
	}
</style>
