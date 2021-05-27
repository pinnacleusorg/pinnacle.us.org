
<script lang="ts">
	import BrandButton from "./BrandButton.svelte";

	let subscribeDisabled = false;
	let name: string, email: string; // Bound values

	function trySubscribe(e: Event): void {
		e.preventDefault();

		name = name.trim();
		email = email.trim();
		if (!name || !email)
			return;
		if (subscribeDisabled)
			return;
		subscribeDisabled = true;
		//submit, report errors to #updatedMsg.
		fetch('https://api.pinnacle.us.org/1.0/contacts', {
				method: 'post',
				body: JSON.stringify({ "email": email, "name": name }),
				headers: new Headers({ "Content-Type": "application/json" })
			})
			.then(() => {
				name = "";
				email = "";
				document.querySelector('#updatedMsg').classList.add("successful");
				document.querySelector('#updatedMsg').textContent = "Welcome to the mailing list!";
				subscribeDisabled = false;
			})
			.catch(function (msg) {
				console.log(msg);
				var error = "Error: Please confirm your email address is accurate";
				if (msg.status == 409)
					error = "You're already on our list!";
				document.querySelector('#updatedMsg').classList.add("err");
				document.querySelector('#updatedMsg').textContent = error;
				subscribeDisabled = false;
			});
	}
</script>

<div class="container-wide component-section-large light-bg">
	<div class="container inner">
		<h2 class="timeline-end">Follow the Journey.</h2>
		<span class="timeline-socials">
			<a href="https://twitter.com/pinnacleusorg" target="_blank">Twitter</a> &bull; 
			<a href="https://medium.com/pinnacleusorg" target="_blank">Medium</a> &bull; 
			<a href="https://facebook.com/pinnacleusorg" target="_blank">Facebook</a> &bull; 
			<a href="https://instagram.com/pinnacleusorg" target="_blank">Instagram</a>
		</span>
		<div class="flex-smart engagement-deck">
			<div class="card">
				<h3 class="card-title">Future staff?</h3>
				<p class="card-text">Be a part of the team that makes it happen.</p>
				<BrandButton href="https://hack.ms/P20-Team-Application" isAnchor="{true}">Apply Now</BrandButton>
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
					<div class="mt-1" id="updatedMsg">&nbsp;</div>
				</div>
				<BrandButton on:click="{trySubscribe}">Stay Updated</BrandButton>
			</form>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		flex: 1 1;
		font-family: KeplerStd;
		text-align: center;
		margin-bottom: 1rem;
		padding: 1.25rem;

		.card-title {
			font-size: 1.75rem;
			margin-bottom: 1rem;
		}
		
		.card-text {
			flex: 1 1;
			font-size: 1.3rem !important;
			font-family: CasperRegular;
			margin: 0;
			padding: 0.5rem 4rem;
		}
	}

	.engagement-deck {
		margin-bottom: 3rem;
	}

	.timeline-end {
		text-align: center;
		margin: 5px;
		padding: 0 3rem;
	}

	.timeline-socials {
		display: block;
		font-size: 1.3rem;
		text-align: center;
		padding-bottom: 1rem;
	}

	.card-divider {
		flex: 0 0 3px;
		background-color: var(--pinnacle-gold);
		margin: 0 10vw;

		@media (min-width: 768px) {
			margin: 5rem 0;
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
