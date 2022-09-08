<script lang="ts">
	export let color: "grey" | "white" | "bg";
	export let location: "top" | "bottom";
	export let orientation: "left" | "right";
	export let line = false;
	export let width: number;
</script>

<div class="chamfer {location} {orientation}" style="min-width:{width}%">
	<span class={color} style="min-width:{width}%"><slot /></span>
	{#if line}
		<svg viewBox="0 0 256.892 119.369" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 20h100.307H120l120 80" stroke="#c79d5e" stroke-width="2" />
		</svg>
	{/if}
</div>

<style lang="scss">
	.chamfer {
		display: flex;
		align-items: flex-start;

		position: absolute;
		left: 0;
		min-height: 5rem;
		z-index: 5;

		svg {
			fill: none;

			position: absolute;
			top: -1.5rem;
			right: -2rem;
			z-index: 15;
			width: 257px;

			@media (min-width: 768px) {
				right: -1.25rem;
			}
		}

		span {
			display: block;
			height: 4rem;
			margin-top: auto;

			--path: polygon(0 0, calc(100% - 6rem) 0, 100% 100%, 0 100%);
			-webkit-clip-path: var(--path);
			clip-path: var(--path);

			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10;
		}

		// Location
		&.top {
			top: -1px;
			transform: scaleY(-1);
		}
		&.bottom {
			bottom: -1px;
		}

		// Orientation
		&.right {
			transform: scaleX(-1);
			right: 0;
			left: unset;
		}
		&.right.top {
			transform: scale(-1);
		}

		// Color
		span.grey {
			@include background-grey;
		}
		span.white {
			@include background-white;
		}
		span.bg {
			@include background-dark;
		}
	}
</style>
