<p class="socials">
	<a href="//twitter.com/pinnacleusorg" target="_blank" rel="noopener">
		<svg><use href="/image/socials.svg#twitter" /></svg>
	</a>
	<a href="//medium.com/pinnacleusorg" target="_blank" rel="noopener">
		<svg><use href="/image/socials.svg#medium" /></svg>
	</a>
	<a href="//facebook.com/pinnacleusorg" target="_blank" rel="noopener">
		<svg><use href="/image/socials.svg#facebook" /></svg>
	</a>
	<a href="//instagram.com/pinnacleusorg" target="_blank" rel="noopener">
		<svg><use href="/image/socials.svg#instagram" /></svg>
	</a>
</p>

<style lang="scss">
	.socials {
		display: flex;
		column-gap: 30px;
		justify-content: center;
		font-size: 1.3rem;

		svg {
			border-radius: 5px;
			color: $gold;
			height: 40px;
			width: 40px;
			padding: 10px;
			transition-duration: 0.3s;
		}

		a:hover svg {
			background-color: $gold;
			color: $white;
		}
	}
</style>
