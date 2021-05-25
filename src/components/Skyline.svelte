
<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		document.addEventListener("scroll", () => {
			let yPos = document.querySelector("#skyline-container").getBoundingClientRect().y;
			if (yPos - 900 > 0) return; // yPos < 0 means skyline in view
			document.querySelector("#skyline").classList.remove("hidden");
			document.removeEventListener("scroll", this);
		});
	});
</script>

<div class="container-wide skyline-container light-bg" id="skyline-container">
	<div class="skyline hidden" id="skyline">
		<div class="skyline-component off-left" id="skyline-black"></div>
		<div class="skyline-component off-left" id="skyline-gold"></div>
		<div class="skyline-component off-right" id="skyline-bridge"></div>
	</div>
</div>

<style lang="scss">
	.skyline-container {
		padding: 0;
	}

	.skyline {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		margin-top: -550px;
		height: 650px;
		width: 100%;
		overflow-x: hidden;
		pointer-events: none;

		@media (min-width: 768px) {
			margin-top: -250px;
		}
	}

	.skyline.hidden {
		> .off-right {
			-webkit-transform: translateX(103%);
			transform: translateX(103%);
		}
		> .off-left {
			-webkit-transform: translateX(-103%);
			transform: translateX(-103%);
		}
	}
	
	.skyline-component {
		grid-column: 1 / 1;
		grid-row: 1 / 1;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: bottom;

		transition: transform 2s ease;
		-webkit-transform: translateX(0%);
		transform: translateX(0%);
		will-change: transform;

		&#skyline-black {
			background-image: url('/image/skyline-black.svg');
		}
		&#skyline-gold {
			background-image: url('/image/skyline-gold.svg');
		}
		&#skyline-bridge {
			background-image: url('/image/skyline-bridge.svg');
		}
	}
</style>