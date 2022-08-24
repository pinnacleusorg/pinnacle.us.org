<svg
	id="sl-1"
	width="107"
	height="1041"
	viewBox="0 0 107 1041"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M105.408 1040.8L105.408 87.6998L0.922985 0.999887" />
</svg>
<svg
	id="sl-2"
	width="323"
	height="482"
	viewBox="0 0 323 482"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M0.999973 0.799653L366.033 303.7L366.033 481.1" />
</svg>
<svg
	id="sl-3"
	width="265"
	height="428"
	viewBox="0 0 265 428"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M1.0872 1.59964L366 304.5L366 427.1" />
</svg>

<svg
	class="mobile"
	width="214"
	height="134"
	viewBox="0 0 214 134"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M35.3141 133.18L132.607 19.1133L189.589 19.1133" />
	<path d="M77.3271 115.029L174.62 0.999998L214 1" />
	<path d="M193.989 62.1191L-112.152 62.1191L-140 94.7688" />
</svg>

<style lang="scss">
	svg path {
		fill: none;
		stroke: #c69e60;
		stroke-miterlimit: 10;
		stroke-width: 2;
	}

	svg:not(.mobile) {
		display: none;
		position: absolute;

		@media (min-width: 992px) {
			display: unset;
		}
	}

	svg.mobile {
		position: absolute;
		top: 11rem;
		left: -8rem;
		height: 15rem;
		width: 20rem;

		@media (min-width: 768px) {
			display: none;
		}
	}

	#sl-1 {
		top: 8rem;
		right: 2rem;
	}
	#sl-2 {
		right: -6rem;
		bottom: 2rem;
	}
	#sl-3 {
		right: -6rem;
		bottom: -3rem;
	}
</style>
