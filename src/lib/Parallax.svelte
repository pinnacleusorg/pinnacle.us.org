<script lang="ts">
	import { onMount } from "svelte";

	let scroll = 0;
	let progress = 0;
	let imgToLoad = "001";

	let h: number, w: number;

	onMount(() => {
		h = window.innerHeight;
		w = window.innerWidth;
	});

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
	<section>
		<div class="f-1">
			<img src="//static.pinnacle.us.org/2021/assets/icon.png" alt="" />
			<h1>Welcome to Your Arena.</h1>
		</div>
	</section>
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

		section {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			min-width: 100vw;
			min-height: 100vh;
			display: grid;
			place-items: center;

			div {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			img {
				height: 7rem;
				width: 7rem;
			}

			h1 {
				font-family: sans-serif;
				font-size: 2.5rem;
				margin: 2rem 0;
				text-transform: uppercase;
			}
		}

		.f-1 {
			animation: fade-in 1s 1s forwards;
			opacity: 0;
		}

		@keyframes fade-in {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
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
