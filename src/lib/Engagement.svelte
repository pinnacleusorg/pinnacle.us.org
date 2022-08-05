<script lang="ts">
	import { Button } from "@pinnacleusorg/quisp";
	import { contactsSubscribe } from "./app/api";

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

<section class="container-wide component-section-large dark-bg">
	<div class="container inner">
		<a name="contact"><h2>Follow the Journey</h2></a>
		<div class="flex-smart engagement-deck">
			<div class="card">
				<h3>Be Future Staff</h3>
				<p>Be a part of the team that<br /> makes it happen.</p>
				<Button>Apply Now</Button>
			</div>
			<div class="card-divider" />
			<form class="card">
				<h3>Stay in the Loop</h3>
				<div class="stacked-input">
					<input
						bind:value={name}
						type="text"
						id="engagement-fn"
						placeholder="First Name"
					/>
					<input
						bind:value={email}
						type="email"
						id="engagement-email"
						placeholder="Email Address"
					/>
					<div id="updatedMsg">&nbsp;</div>
				</div>
				<Button on:click={trySubscribe}>Stay Updated</Button>
			</form>
		</div>
		<br />
		<p class="socials">
			<a href="//twitter.com/pinnacleusorg" target="_blank" rel="noopener">
				<svg><use href="/image/socials.svg#twitter" /></svg>
			</a>
			<a href="//medium.com/pinnacleusorg" target="_blank" rel="noopener">
				<svg><use href="/image/socials.svg#medium" /></svg>
			</a>
			<a href="//facebook.com/pinnacleusorg" target="_blank" rel="noopener">
				<svg><use href="/image/socials.svg#facebook" /></svg>
			</a>
			<a href="//instagram.com/pinnacleusorg" target="_blank" rel="noopener">
				<svg><use href="/image/socials.svg#instagram" /></svg>
			</a>
		</p>
	</div>
</section>

<style lang="scss">
	.card {
		display: flex;
		align-items: center;
		flex-direction: column;
		flex: 1 1;
		font-family: KeplerStd;
		text-align: center;
		margin-bottom: 1rem;
		padding: 0 1.25rem;

		h3 {
			font-size: 1.75rem;
			margin-top: 0;
			margin-bottom: 1rem;

			@media (min-width: 768px) {
				margin-top: unset;
			}
		}

		p {
			flex: 1 1;
			font-family: "Noto Sans", sans-serif;
			font-size: 1rem !important;
			margin-top: 0;
			padding: 0.5rem 4rem;
		}
	}

	.engagement-deck {
		margin-bottom: 3rem;
	}

	h2 {
		text-align: center;
	}

	.socials {
		display: flex;
		column-gap: 30px;
		justify-content: center;
		font-size: 1.3rem;

		svg {
			background-color: $gold;
			border-radius: 6px;
			color: $bg;
			height: 30px;
			width: 30px;
			padding: 10px;
		}

		a:hover svg {
			color: $white;
		}
	}

	.card-divider {
		flex: 0 0 3px;
		background-color: $gold;
		margin: 5vh 10vw;

		@media (min-width: 768px) {
			margin: 2em 0;
		}
	}

	.stacked-input {
		margin: auto;
		width: 50%;

		input {
			color: $white;
			border: 1.5px solid $white;
			border-radius: 0;
			box-sizing: border-box;
			color: $white;
			background-color: $bg;
			font-size: 1rem;
			font-family: "Noto Sans", sans-serif;

			margin: 0;
			padding: 0.35rem 0.6rem;
			width: 100%;
		}
		input::placeholder {
			color: $white;
			opacity: 0.5;
		}
		input:focus,
		input:active {
			outline: none;
			box-shadow: none;
			border-color: $gold;
			background-color: $bg;
			color: $white;
		}
		input:first-of-type {
			border-bottom-width: 0.5px;
		}
		input:last-of-type {
			border-top-width: 0.5px;
		}
	}
</style>
