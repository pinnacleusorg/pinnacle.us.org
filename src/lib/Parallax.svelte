<script lang="ts">
	let h = window.innerHeight;
	let w = window.innerWidth;

	let scroll = 0;
	let progress = 0;
	let imgToLoad = "001";

	function scrollHandler() {
		scroll = window.scrollY;
		progress =
			scroll /
			document.querySelector("#parallax").getBoundingClientRect().height;
		imgToLoad = (
			"" + Math.min(Math.max(Math.round(progress * 61) + 1, 1), 61)
		).padStart(3, "0");

		const canvas = document.querySelector("#bg-img") as HTMLCanvasElement;
		const context = canvas.getContext("2d");

		const img = new Image();
		img.src = `/para/${imgToLoad}.jpg`;
		context.drawImage(img, 0, 0, w, h);
	}

	function resizeHandler() {}
</script>

<svelte:window on:scroll={scrollHandler} />
{#each Array(61) as _, i}
	<link
		rel="preload"
		as="image"
		href="/para/{('' + (i + 1)).padStart(3, '0')}.jpg"
	/>
{/each}
<section id="parallax">
	<canvas id="bg-img" width={w} height={h} />
	<p class="debug">
		Scroll: {scroll}<br />
		Progress: {progress}
	</p>
</section>

<style lang="scss">
	#parallax {
		min-height: 8000px;
		position: relative;

		#bg-img {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			min-width: 100vw;
			min-height: 100vh;
		}

		.debug {
			color: white;
			position: fixed;
			top: 1rem;
			left: 1rem;
			z-index: 100;
		}
	}
</style>
