<main>
	<slot />
</main>

<style lang="scss" global>
	html {
		background-color: $bg;
		color: $white;
		font-family: "Noto Sans", sans-serif;
		line-height: 1.5;
		scroll-behavior: smooth;
	}

	/* Font imports */

	@font-face {
		font-family: "KeplerStd";
		src: url("https://static.pinnacle.us.org/2021/font/KeplerStd-LightScn.otf");
		font-weight: normal;
	}

	@font-face {
		font-family: "KeplerStd";
		src: url("https://static.pinnacle.us.org/2021/font/KeplerStd-SemiboldScnDisp.otf");
		font-weight: 500;
	}

	/* Header styles */

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 500;
	}

	h2 {
		font-family: KeplerStd, serif;
		font-size: 3rem;

		@media (min-width: 768px) {
			font-size: 3.5rem;
		}
	}

	.header-group {
		margin: 3rem 0;

		h2 {
			margin-top: 0;
			margin-bottom: 5px;
		}
		p {
			margin-top: 5px;
			margin-bottom: 0;
		}
	}

	/* Text styles */

	a:not(a[name]) {
		color: $gold;
		transition: color 0.2s;
		text-decoration: none;
	}

	::selection {
		background-color: $gold;
	}

	a:hover,
	a:focus {
		color: $bg;
		text-decoration: none;
	}

	/* Background + text styles */

	.light-bg {
		background-color: $white;
		color: $bg;
	}

	.dark-bg {
		background-color: $bg;
		color: $white;

		a:hover,
		a:focus {
			color: $white;
		}
	}

	.gold-bg {
		background-color: $gold;
		color: $bg;

		::selection {
			background-color: $white;
		}
	}
</style>
