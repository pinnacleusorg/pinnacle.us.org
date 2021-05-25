
<script lang="ts">
	export let isAnchor = false;
	export let href = "";
</script>

{#if isAnchor}
<a href="{href}" class="pinnacle-btn">
	<div class="btn-label">
		<span><slot></slot></span>
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"/></svg>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 65"><path d="M0,19.56,19.63,0H184V45.65L164.37,65.21H0V19.56Z"/></svg>
</a>
{/if}
{#if !isAnchor}
<button class="pinnacle-btn" on:click>
	<div class="btn-label">
		<span><slot></slot></span>
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"/></svg>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 65"><path d="M0,19.56,19.63,0H184V45.65L164.37,65.21H0V19.56Z"/></svg>
</button>
{/if}

<style lang="scss">
	.pinnacle-btn {
		background: none;
		border: none;
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-family: inherit;
		text-decoration: none;
		margin: auto;
		min-height: 4rem;
		min-width: 180px;
		height: 4rem;
		position: relative;

		.btn-label {
			color: var(--pinnacle-bg-light);
			font-size: 1.2rem;
			font-weight: bold;
			letter-spacing: 0.7px;
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
			fill: var(--pinnacle-bg);
			stroke: var(--pinnacle-bg);
			transition: fill 0.3s ease, stroke 0.3s ease;
		}

		&:focus, &:active {
			outline: none;
		}

		&:focus, &:hover {
			color: white;
			text-decoration: none;

			.btn-label {
				color: var(--pinnacle-bg);
				transition: color 0.3s ease;
			}

			> svg path {
				fill: var(--pinnacle-gold);
				stroke: var(--pinnacle-gold);
			}
		}
	}
</style>