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
		<svg class:primary viewBox="0 0 184 65">
			<path d="M0,19.56,19.63,0H184V45.65L164.37,65.21H0V19.56Z" />
		</svg>
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
		<svg class:primary viewBox="0 0 184 65">
			<path d="M0,19.56,19.63,0H184V45.65L164.37,65.21H0V19.56Z" />
		</svg>
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

		.btn-label > svg {
			height: 0.7em;
			fill: var(--pinnacle-bg-light);
			stroke: var(--pinnacle-bg-light);
		}

		> svg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		> svg path {
			fill: transparent;
			stroke: var(--pinnacle-gold);
			stroke-width: 5px;
			transition: fill 0.3s ease, stroke 0.3s ease;
		}

		> svg.primary path {
			fill: var(--pinnacle-gold);
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

			> svg path {
				fill: var(--pinnacle-gold);
				stroke: var(--pinnacle-gold);
			}
		}
	}
</style>
