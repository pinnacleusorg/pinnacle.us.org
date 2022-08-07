<main>
	<slot />
</main>

<style lang="scss" global>
	@font-face {
		font-family: "KeplerStd";
		src: url("https://static.pinnacle.us.org/2021/font/KeplerStd-LightScn.otf");
		font-weight: normal;
	}

	@font-face {
		font-family: "KeplerStd";
		src: url("https://static.pinnacle.us.org/2021/font/KeplerStd-SemiboldScnDisp.otf");
		font-weight: bold;
	}

	html {
		background-color: $white;
		color: $white;
		font-family: "Noto Sans", sans-serif;
		font-size: 18px !important;
		line-height: 1.75;
		letter-spacing: 0.1px;
		scroll-behavior: smooth;

		@media (min-width: 768px) {
			font-size: 20px !important;
		}
	}

	/* Header styles */

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: KeplerStd, serif;
		letter-spacing: 0.5px;
	}

	h2 {
		font-size: 2rem;
		margin-top: 0;
		margin-bottom: 5px;

		@media (min-width: 768px) {
			font-size: 2.5rem;
		}
	}

	p {
		margin-top: 5px;
		margin-bottom: 0;
	}

	/* Text styles */

	::selection {
		background-color: $gold;
	}

	a:not(a[name]) {
		color: $gold;
		transition: color 0.2s;
		text-decoration: none;

		&:hover,
		&:focus {
			color: $bg;
			text-decoration: none;
		}
	}
</style>
