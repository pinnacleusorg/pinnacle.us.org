<svg
	id="el-1"
	width="250"
	height="250"
	viewBox="0 0 250 250"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1.05279 -4.92435e-06L1.05278 423M414 1.65234L2.3502e-05 1.65234"
		stroke="#C69E60"
		stroke-width="2"
	/>
</svg>
<svg
	id="el-2"
	width="250"
	height="250"
	viewBox="0 0 250 250"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1.05279 -4.92435e-06L1.05278 423M414 1.65234L2.3502e-05 1.65234"
		stroke="#C69E60"
		stroke-width="2"
	/>
</svg>

<style>
	svg {
		position: absolute;
		z-index: 10;
	}

	#el-1 {
		top: calc(100% - 4.5rem);
		left: calc(100% - 4.5rem);
	}

	#el-2 {
		bottom: calc(100% - 4.5rem);
		right: calc(100% - 4.5rem);
		transform: scale(-1);
	}

	@media (max-width: 992px) {
		svg {
			display: none;
		}
	}
</style>
