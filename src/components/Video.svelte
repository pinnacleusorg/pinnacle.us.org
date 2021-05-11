
<div class="container-wide component-section light-bg" id="video">
	<div class="container inner">
		<img src="image/video-bg.svg" alt="Background Lines" aria-hidden="true">
		<iframe src="https://www.youtube-nocookie.com/embed/x14vZtYe9Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
</div>

<style lang="scss">
	#video {
		display: flex;
		align-items: center;
	}

	#video > div {
		position: relative;
		margin-top: -24px;
		width: 100%;

		iframe {
			background-color: #C4C4C4;
			position: absolute;
			top: 18%;
			left: 9%;
			right: 9%;
			max-height: 72%;
			height: 100%;
			width: 82%;
			z-index: 2;
		}

		@media (max-width: 768px) {
			margin-top: 0;
		}
	}
</style>