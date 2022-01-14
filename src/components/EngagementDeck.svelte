
<script lang="ts">
	import BrandButton from "./BrandButton.svelte";

	const API_ROOT = import.meta.env.VITE_API_ROOT;

	let subscribeDisabled = false;
	let name: string, email: string; // Bound values


	function trySubscribe(e: Event): void {
		e.preventDefault();

		name = name.trim();
		email = email.trim();
		if (!name || !email || subscribeDisabled)
			return;
		subscribeDisabled = true;
		//submit, report errors to #updatedMsg.
		fetch(API_ROOT+'/contacts', {
				method: 'post',
				body: JSON.stringify({ "email": email, "name": name }),
				headers: new Headers({ "Content-Type": "application/json" })
			})
			.then((response) => {
				let message = 'Welcome to the mailing list!';
				if(response.status != 200) {
					console.log(response);
					message = "Error: Please confirm your email address is accurate";
					if (response.status == 409)
						message = "You're already on our list!";
					document.querySelector('#updatedMsg').classList.add("err");
				} else {
					document.querySelector('#updatedMsg').classList.add("successful");
				}
				name = "";
				email = "";
				document.querySelector('#updatedMsg').textContent = message;
				subscribeDisabled = false;
			});
	}
</script>

<section class="container-wide component-section-large light-bg">
	<div class="container inner">
		<div class="header-group">
			<h2>Follow the Journey.</h2>
			<p class="timeline-socials">
				<a href="https://twitter.com/pinnacleusorg" target="_blank" rel="noopener">Twitter</a> &bull;
				<a href="https://medium.com/pinnacleusorg" target="_blank" rel="noopener">Medium</a> &bull;
				<a href="https://facebook.com/pinnacleusorg" target="_blank" rel="noopener">Facebook</a> &bull;
				<a href="https://instagram.com/pinnacleusorg" target="_blank" rel="noopener">Instagram</a>
			</p>
		</div>
		<div class="flex-smart engagement-deck">
			<div class="card">
				<h3 class="card-title">Be Future Staff</h3>
				<p class="card-text">Be a part of the team that<br> makes it happen.</p>
				<BrandButton href="/apply" isAnchor="{true}">Apply Now</BrandButton>
			</div>
			<div class="card-divider"></div>
			<form class="card">
				<h3 class="card-title">Stay in the Loop</h3>
				<div class="stacked-input">
					<div class="input-group">
						<input bind:value="{name}"
							type="text"
							class="form-control"
							id="engagement-fn"
							placeholder="First Name"/>
					</div>
					<div class="input-group">
						<input bind:value="{email}"
							type="email"
							class="form-control"
							id="engagement-email"
							placeholder="Email Address"/>
					</div>
					<div id="updatedMsg">&nbsp;</div>
				</div>
				<BrandButton on:click="{trySubscribe}">Stay Updated</BrandButton>
			</form>
		</div>
	</div>
</section>

<style lang="scss">
	.card {
		display: flex;
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
			font-size: 1.3rem !important;
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
		font-size: 1.3rem;
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
		width: 75%;

		.input-group input {
			border-color: #1B1B1B;
			border-width: 3px;
			border-radius: 0;
			box-sizing: border-box;
			color: black;
			background-color: var(--pinnacle-bg-light);
			font-size: 1.3rem;
			font-family: inherit;
			padding: 0.5rem 0.6rem;
			width: 100%;
		}
		.input-group input::placeholder {
			color: var(--pinnacle-bg);
		}
		.input-group input:focus, .input-group input:active {
			outline: none;
			box-shadow: none;
			border-color: #1B1B1B;
			background-color: var(--pinnacle-bg-light);
			color: black;
		}
		.input-group:first-child input {
			border-bottom-width: 0.5px;
		}
		.input-group:last-child input {
			border-top-width: 0.5px;
		}
	}
</style>
