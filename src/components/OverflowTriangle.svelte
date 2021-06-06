
<div>
	<div class="page-spacer"></div>
	<div class="container-wide light-bg" id="overflow-triangle"></div>
</div>

<style lang="scss">
	.page-spacer {
		background-color: unset;
		display: block;
		min-height: 100vh;
		position: relative;
		z-index: -3;
	}

	#overflow-triangle {
		box-sizing: border-box;
		clip-path: polygon(50% 0px, 0px 100%, 100% 100%);
		height: 30vh;
		position: relative;

		@media (min-width: 768px) {
			height: 50vh;
			min-height: 800px;
		}
	}
</style>