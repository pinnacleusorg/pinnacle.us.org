<script lang="ts">
	import { Button } from "@pinnacleusorg/quisp";

	const API_ROOT = import.meta.env.VITE_API_ROOT;

	let subscribeDisabled = false;
	let name: string, email: string; // Bound values

	function trySubscribe(e: Event): void {
		e.preventDefault();

		name = name.trim();
		email = email.trim();
		if (!name || !email || subscribeDisabled) return;
		subscribeDisabled = true;
		//submit, report errors to #updatedMsg.
		fetch(API_ROOT + "/contacts", {
			method: "post",
			body: JSON.stringify({ email: email, name: name }),
			headers: new Headers({ "Content-Type": "application/json" })
		}).then((response) => {
			let message = "Welcome to the mailing list!";
			if (response.status != 200) {
				console.log(response);
				message = "Error: Please confirm your email address is accurate";
				if (response.status == 409) message = "You're already on our list!";
				document.querySelector("#updatedMsg").classList.add("err");
			} else {
				document.querySelector("#updatedMsg").classList.add("successful");
			}
			name = "";
			email = "";
			document.querySelector("#updatedMsg").textContent = message;
			subscribeDisabled = false;
		});
	}
</script>

<section class="container-wide component-section-large dark-bg">
	<div class="container inner">
		<div class="header-group">
			<a name="contact"><h2>Follow the Journey</h2></a>
		</div>
		<div class="flex-smart engagement-deck">
			<div class="card">
				<h3 class="card-title">Be Future Staff</h3>
				<p class="card-text">
					Be a part of the team that<br /> makes it happen.
				</p>
				<Button>Apply Now</Button>
			</div>
			<div class="card-divider" />
			<form class="card">
				<h3 class="card-title">Stay in the Loop</h3>
				<div class="stacked-input">
					<div class="input-group">
						<input
							bind:value={name}
							type="text"
							class="form-control"
							id="engagement-fn"
							placeholder="First Name"
						/>
					</div>
					<div class="input-group">
						<input
							bind:value={email}
							type="email"
							class="form-control"
							id="engagement-email"
							placeholder="Email Address"
						/>
					</div>
					<div id="updatedMsg">&nbsp;</div>
				</div>
				<Button on:click={trySubscribe}>Stay Updated</Button>
			</form>
		</div>
		<br />
		<p class="timeline-socials">
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

		.card-title {
			font-size: 1.75rem;
			margin-top: 0;
			margin-bottom: 1rem;

			@media (min-width: 768px) {
				margin-top: unset;
			}
		}

		.card-text {
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

	.header-group {
		text-align: center;
	}

	.timeline-socials {
		display: flex;
		column-gap: 30px;
		justify-content: center;
		font-size: 1.3rem;

		svg {
			background-color: var(--pinnacle-gold);
			border-radius: 6px;
			color: var(--pinnacle-bg);
			height: 30px;
			width: 30px;
			padding: 10px;
		}

		a:hover svg {
			color: var(--pinnacle-bg-light);
		}
	}

	.card-divider {
		flex: 0 0 3px;
		background-color: var(--pinnacle-gold);
		margin: 5vh 10vw;

		@media (min-width: 768px) {
			margin: 2em 0;
		}
	}

	.stacked-input {
		margin: auto;
		width: 50%;

		.input-group input {
			color: var(--pinnacle-bg-light);
			border: 2px solid var(--pinnacle-bg-light);
			border-radius: 0;
			box-sizing: border-box;
			color: var(--pinnacle-bg-light);
			background-color: var(--pinnacle-bg);
			font-size: 1rem;
			font-family: "Noto Sans", sans-serif;

			margin: 0;
			padding: 0.35rem 0.6rem;
			width: 100%;
		}
		.input-group input::placeholder {
			color: var(--pinnacle-bg-light);
			opacity: 0.5;
		}
		.input-group input:focus,
		.input-group input:active {
			outline: none;
			box-shadow: none;
			border-color: var(--pinnacle-gold);
			background-color: var(--pinnacle-bg);
			color: var(--pinnacle-bg-light);
		}
		.input-group:first-child input {
			border-bottom-width: 0.5px;
		}
		.input-group:last-child input {
			border-top-width: 0.5px;
		}
	}
</style>
