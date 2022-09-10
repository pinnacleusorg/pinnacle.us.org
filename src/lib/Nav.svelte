<script>
	import NavOverlay from "./NavOverlay.svelte";

	let navOpen = false;

	function toggleNav() {
		navOpen = !navOpen;
	}
</script>

<nav class="container-wide">
	<img
		src="https://static.pinnacle.us.org/2021/meta/icon.png"
		alt="Pinnacle Logo"
		class="logo"
	/>
	<span class="nav-spacer" />
	<a href="#about">About</a>
	<a href="#schedule">Schedule</a>
	<a href="#partners">Partners</a>
	<a href="#faq">FAQ</a>
	<a href="mailto:team@pinnacle.us.org">Contact</a>
	<button class="mobile" on:click={toggleNav}>
		{#if navOpen}
			<svg
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M26 2L2 26M2 2L26 26"
					stroke="#C69E60"
					stroke-width="3"
					stroke-linejoin="round"
				/>
			</svg>
		{:else}
			<svg
				width="28"
				height="23"
				viewBox="0 0 28 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line y1="1.5" x2="15" y2="1.5" stroke="#C69E60" stroke-width="3" />
				<line
					x1="13"
					y1="21.5"
					x2="28"
					y2="21.5"
					stroke="#C69E60"
					stroke-width="3"
				/>
				<line y1="11.5" x2="28" y2="11.5" stroke="#C69E60" stroke-width="3" />
			</svg>
		{/if}
	</button>
	{#if navOpen}
		<NavOverlay on:close={toggleNav} />
	{/if}
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-items: center;
		column-gap: 60px;

		margin: 5vh auto;
		padding: 0 75px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;

		.nav-spacer {
			flex: 1 1;
		}

		a {
			color: $white;
			font-family: KeplerStd;

			@media (max-width: 992px) {
				display: none;
			}
		}
	}

	img {
		width: 50px;

		@media (max-width: 768px) {
			width: 35px;
		}
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
		position: relative;
		z-index: 60;

		svg {
			height: 25px;
			width: 25px;
		}

		@media (min-width: 992px) {
			display: none;
		}
	}
</style>
