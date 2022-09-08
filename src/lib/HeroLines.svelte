<svg id="hl-1" viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
	<path class="noanimate" d="M101 1.00002L1 1L0.999983 101" />
</svg>
<svg id="hl-2" viewBox="0 0 401 401" xmlns="http://www.w3.org/2000/svg">
	<path class="noanimate" d="M0 400L400 400L400 0" />
</svg>
<svg id="hl-3" viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
	<path class="noanimate" d="M101 1.00001L1 1L0.999991 101" />
</svg>

<style lang="scss">
	svg {
		position: absolute;
	}

	svg path {
		fill: none;
		stroke: #c69e60;
		stroke-width: 2;
	}

	#hl-1 {
		top: calc(7vh + 100px);
		left: 7vw;
		width: 101px;

		@media (max-width: 768px) {
			display: none;
		}
	}

	#hl-2 {
		bottom: 3.5rem;
		right: 7vw;
		width: 401px;

		@media (max-width: 768px) {
			width: 200px;
		}
	}

	#hl-3 {
		bottom: calc(3.5rem - 50px);
		right: calc(7vw - 50px);
		width: 101px;

		@media (max-width: 768px) {
			bottom: calc(3.5rem - 25px);
			right: calc(7vw - 25px);
			width: 50px;
		}
	}
</style>
