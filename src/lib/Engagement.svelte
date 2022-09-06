<script lang="ts">
	import { Button } from "@pinnacleusorg/quisp";
	import { contactsSubscribe } from "./app/api";
	import Chamfer from "./Chamfer.svelte";
	import EngagementLines from "./EngagementLines.svelte";
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
	<!--
	For when sponsors get added!
	<Chamfer color="grey" location="bottom" orientation="left" width={35} />
	-->
	<a name="contact"><h2>Follow the journey.</h2></a>
	<div class="container inner">
		<EngagementLines />
		<div class="bg" />
		<div class="bg-rect" />
		<div class="flex-smart deck">
			<div class="card">
				<h3>Join the Organizing Team</h3>
				<p>Be part of the team that makes it happen</p>
				<Button color="black" href="/apply">Apply Now</Button>
			</div>
			<div class="card-divider" />
			<form class="card" action="/mailing">
				<h3>Stay in the Loop</h3>
				<input
					bind:value={name}
					type="text"
					name="name"
					placeholder="First name"
				/>
				<input
					bind:value={email}
					type="email"
					name="email"
					placeholder="Email address"
				/>
				<div id="updatedMsg">&nbsp;</div>
				<Button color="black" on:click={trySubscribe}>Stay Updated</Button>
			</form>
		</div>
		<br />
		<div class="deck">
			<Socials />
		</div>
	</div>
</section>

<style lang="scss">
	#engagement {
		@include background-white;
		padding-top: 6rem;
		text-align: center;

		h2 {
			margin-bottom: 2rem;
		}

		.inner {
			max-width: $max-inner-width;
			padding: 5rem 2.5rem;
			padding-bottom: 4rem;
			position: relative;

			@media (max-width: 768px) {
				margin: 0 3vw;
			}

			position: relative;

			.bg {
				@include background-white;
				--path: polygon(15% 0%, 100% 0, 100% 85%, 85% 100%, 0 100%, 0% 15%);
				-webkit-clip-path: var(--path);
				clip-path: var(--path);
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}

			.bg-rect {
				border: 2px solid $gold;
				position: absolute;
				top: 30px;
				left: 30px;
				right: 30px;
				bottom: 30px;
			}

			.deck {
				position: relative;
				z-index: 5;
			}
		}
	}

	.card {
		display: flex;
		align-items: center;
		flex-direction: column;
		flex: 1 1;
		padding: 0 1.25rem;

		h3 {
			font-size: 1.35rem;
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
			padding: 0.5rem 3.5rem;
		}
	}

	.card-divider {
		background-color: $gold;
		flex: 0 0 2px;
		margin: 5vh 0;

		@media (min-width: 768px) {
			margin: 1rem;
			margin-top: -3.5rem;
			margin-bottom: 2rem;
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

		&::placeholder {
			color: $bg;
			opacity: 0.5;
		}
		&:focus,
		&:active {
			border-color: $gold;
			box-shadow: none;
			color: $gold;
			outline: none;
		}
		&:first-of-type {
			border-bottom-width: 1px;
		}
		&:last-of-type {
			border-top-width: 1px;
		}
	}
</style>
