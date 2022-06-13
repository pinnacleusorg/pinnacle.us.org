<script lang="ts">
	import BrandButton from "./BrandButton.svelte";

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
			<h2>Follow the Journey</h2>
		</div>
		<div class="flex-smart engagement-deck">
			<div class="card">
				<h3 class="card-title">Be Future Staff</h3>
				<p class="card-text">
					Be a part of the team that<br /> makes it happen.
				</p>
				<BrandButton href="/apply">Apply Now</BrandButton>
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
				<BrandButton on:click={trySubscribe}>Stay Updated</BrandButton>
			</form>
		</div>
		<br />
		<p class="timeline-socials">
			<a href="https://twitter.com/pinnacleusorg" target="_blank" rel="noopener"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-twitter"
					viewBox="0 0 16 16"
				>
					<path
						d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
					/>
				</svg></a
			>
			<a href="https://medium.com/pinnacleusorg" target="_blank" rel="noopener"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-medium"
					viewBox="0 0 16 16"
				>
					<path
						d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
					/>
				</svg></a
			>
			<a
				href="https://facebook.com/pinnacleusorg"
				target="_blank"
				rel="noopener"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-facebook"
					viewBox="0 0 16 16"
				>
					<path
						d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
					/>
				</svg></a
			>
			<a
				href="https://instagram.com/pinnacleusorg"
				target="_blank"
				rel="noopener"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-instagram"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
					/>
				</svg></a
			>
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
			background-color: var(--pinnacle-bg-light);
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
