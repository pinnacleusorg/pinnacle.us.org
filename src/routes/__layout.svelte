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
		font-weight: 500;
	}

	html {
		background-color: $bg;
		color: $white;
		font-family: "Noto Sans", sans-serif;
		line-height: 1.5;
		scroll-behavior: smooth;
	}

	/* Header styles */

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: KeplerStd, serif;
		font-weight: 500;
	}

	h2 {
		font-size: 3rem;
		margin-top: 0;
		margin-bottom: 5px;

		@media (min-width: 768px) {
			font-size: 3.5rem;
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
