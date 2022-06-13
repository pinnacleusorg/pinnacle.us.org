<script lang="ts">
	$: isAnchor = href != "";
	export let href = "";
	export let primary = false;
</script>

{#if isAnchor}
	<a {href} class="pinnacle-btn">
		<div class="btn-label">
			<span><slot /></span>
			<svg viewBox="0 0 24 24">
				<path d="M10,2l9,10l-9,10h2l9-10L12,2H10z" />
			</svg>
		</div>
		<div class="background"><div class="inner" class:primary /></div>
	</a>
{/if}
{#if !isAnchor}
	<button class="pinnacle-btn" on:click>
		<div class="btn-label">
			<span><slot /></span>
			<svg viewBox="0 0 24 24">
				<path d="M10,2l9,10l-9,10h2l9-10L12,2H10z" />
			</svg>
		</div>
		<div class="background"><div class="inner" class:primary /></div>
	</button>
{/if}

<style lang="scss">
	.pinnacle-btn {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		min-height: 3.8rem;
		min-width: 180px;
		height: 3.8rem;
		width: max-content;
		position: relative;

		.btn-label {
			display: flex;
			align-items: center;

			color: var(--pinnacle-bg-light);
			font-family: KeplerStd, serif;
			font-size: 1.3rem;
			font-weight: bold;

			position: relative;
			z-index: 99;
		}

		.background,
		.inner {
			--chamfer: 15px;
			--poly: polygon(
				var(--chamfer) 0%,
				100% 0,
				100% calc(100% - var(--chamfer)),
				calc(100% - var(--chamfer)) 100%,
				0 100%,
				0% var(--chamfer)
			);
			-webkit-clip-path: var(--poly);
			clip-path: var(--poly);
			background-color: var(--pinnacle-gold);
			display: block;

			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 2;
		}

		.inner {
			--chamfer: 14px;
			--pad: 3px;
			background-color: var(--pinnacle-bg);
			top: var(--pad);
			left: var(--pad);
			right: var(--pad);
			bottom: var(--pad);
			transition-duration: 0.3s;

			&.primary {
				background-color: var(--pinnacle-gold);
			}
		}

		.btn-label > svg {
			height: 0.7em;
			fill: var(--pinnacle-bg-light);
			stroke: var(--pinnacle-bg-light);
		}

		&:focus,
		&:active {
			outline: none;
		}

		&:focus,
		&:hover {
			color: white;
			text-decoration: none;

			.btn-label {
				color: var(--pinnacle-bg-light);
				transition: color 0.3s ease;
			}

			.inner {
				background-color: var(--pinnacle-gold);
			}
		}
	}
</style>
