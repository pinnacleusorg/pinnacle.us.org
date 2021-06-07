
<section class="container-wide component-section-large light-bg" id="video">
	<div class="container inner">
		<img src="image/video-bg.svg" alt="Background Lines" aria-hidden="true">
		<iframe src="https://www.youtube-nocookie.com/embed/x14vZtYe9Sw" title="What is Pinnacle? on Youtube" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>
	</div>
</section>

<style lang="scss">
	#video {
		display: flex;
		align-items: center;
	}

	#video > div {
		margin-top: 0;
		padding: 0 10px;
		max-width: 800px;
		width: 100%;
		position: relative;

		iframe {
			background-color: #C4C4C4;
			position: absolute;
			top: 15%;
			left: 7%;
			right: 7%;
			max-height: 75%;
			height: 100%;
			width: 86%;
			z-index: 2;
		}

		@media (min-width: 768px) {
			margin-top: -24px;
			padding: 0;

			iframe {
				top: 18%;
				left: 9%;
				right: 9%;
				max-height: 72%;
				height: 100%;
				width: 82%;
			}
		}
	}
</style>