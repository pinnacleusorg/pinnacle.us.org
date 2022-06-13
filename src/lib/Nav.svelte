<nav class="container inner">
	<img
		src="https://static.pinnacle.us.org/2021/meta/icon.png"
		alt="Pinnacle Logo"
		class="logo"
	/>
	<span class="nav-spacer" />
	<a href="#about">About</a>
	<a href="#schedule">Schedule</a>
	<a href="#faq">FAQ</a>
	<a href="#contact">Contact</a>
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-items: center;
		column-gap: 60px;

		margin: 5vh auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 5;

		.nav-spacer {
			flex: 1 1;
		}

		a {
			color: var(--pinnacle-bg-light);
			font-family: KeplerStd;
			font-size: 1.5rem;
		}
	}
	img {
		width: 60px;
	}
</style>
