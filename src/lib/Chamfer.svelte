<script lang="ts">
	export let color: "grey" | "white" | "bg";
	export let location: "top" | "bottom";
	export let orientation: "left" | "right";
	export let width: number;
</script>

<div
	class="chamfer {color} {location} {orientation}"
	style="min-width:{width}%"
>
	<span style="min-width:{width}%"><slot /></span>
</div>

<style lang="scss">
	.chamfer {
		--path: polygon(0 0, calc(100% - 6rem) 0, 100% 100%, 0 100%);
		-webkit-clip-path: var(--path);
		clip-path: var(--path);
		position: absolute;
		left: 0;
		display: block;
		min-height: 4rem;
		z-index: 5;

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
		&.grey {
			@include background-grey;
		}
		&.white {
			@include background-white;
		}
		&.bg {
			@include background-dark;
		}

		span {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10;
		}
	}
</style>
