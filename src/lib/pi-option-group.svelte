
<div class="subgroup">
	<slot></slot>
</div>

<style lang="scss" global>
	.subgroup {
		margin-left: 45px;
		margin-bottom: 5px;

		> * {
			margin: 0 !important;
			padding: 10px 0 !important;
		}

		> *:first-child {
			padding-top: 0 !important;
		}

		span {
			transform-origin: left;
			transform: scale(0.8);
		}
	}
</style>