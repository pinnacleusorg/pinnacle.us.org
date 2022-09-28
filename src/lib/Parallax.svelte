<script lang="ts">
	import { Button } from "@pinnacleusorg/quisp";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import Explore from "./Explore.svelte";

	let scroll = 0;
	let progress = 0;

	let context: CanvasRenderingContext2D;

	let h: number, w: number, dy: number;
	onMount(() => {
		h = window.innerHeight;
		w = window.innerWidth;
		dy = document.querySelector("#parallax").getBoundingClientRect().height;

		const canvas = document.querySelector<HTMLCanvasElement>("#bg-img");
		context = canvas.getContext("2d");
	});

	function scrollHandler() {
		progress = window.scrollY / dy;
		loadImage(progress);
	}

	function resizeHandler() {}

	function loadImage(progress: number) {
		const img = new Image();
		const imageID = Math.min(Math.max(Math.round(progress * 61) + 1, 1), 61);
		img.src = `/para/${imageID.toString().padStart(3, "0")}.jpg`;
		context.drawImage(img, 0, 0, w, h);
	}
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
	{#if progress <= 0.8}
		<Explore position="fixed" />
		<span class="skip" title="skip">
			<Button href="#hero" color="black" small>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-skip-forward-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"
					/>
				</svg>
			</Button>
		</span>
	{/if}
	<p class="debug">
		Scroll: {scroll}<br />
		Progress: {progress}
	</p>
	{#if progress <= 0.12}
		<section out:fly={{ duration: 1000, y: 20 }}>
			<div class="f-1">
				<img src="//static.pinnacle.us.org/2021/assets/icon.png" alt="" />
				<h1>Welcome to your arena.</h1>
			</div>
		</section>
	{/if}
	{#if progress >= 0.13 && progress <= 0.24}
		<section transition:fly={{ duration: 1000, y: 20 }}>
			<div>
				<h1>The most competitive<br />collegiate hackathon.</h1>
			</div>
		</section>
	{/if}
	{#if progress >= 0.25 && progress <= 0.34}
		<section transition:fly={{ duration: 1000, y: 20 }}>
			<div>
				<h1>Kendall is watching.</h1>
			</div>
		</section>
	{/if}
	{#if progress >= 0.35 && progress <= 0.7}
		<section transition:fly={{ duration: 1000, y: 20 }}>
			<div class="right">
				<h2 class:highlight={progress > 0.36 && progress <= 0.42}>
					Cash Prizes
				</h2>
				<h2 class:highlight={progress > 0.42 && progress <= 0.49}>Glory</h2>
				<h2 class:highlight={progress > 0.49 && progress <= 0.56}>
					Internships
				</h2>
				<h2 class:highlight={progress > 0.56 && progress <= 0.63}>Full-time</h2>
				<h2 class:highlight={progress > 0.63 && progress <= 0.69}>Co-op</h2>
			</div>
		</section>
	{/if}
	{#if progress >= 0.71}
		<section transition:fade>
			<div class="row">
				<div>
					<h2>36</h2>
					<p>Hours of intense<br />competition</p>
				</div>
				<div>
					<h2>50</h2>
					<p>Top collegiate hackathons<br />participating</p>
				</div>
				<div>
					<h2>200</h2>
					<p>of the world's brightest<br />student hackers</p>
				</div>
			</div>
		</section>
	{/if}
</section>

<style lang="scss">
	#parallax {
		min-height: 5000px;
		position: relative;

		#bg-img {
			background-image: url("/para/001.jpg");
			background-size: contain;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			min-width: 100vw;
			min-height: 100vh;
		}

		.skip {
			position: fixed;
			top: 2rem;
			right: 2rem;
			z-index: 100;
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
				text-align: center;

				&.right {
					align-items: flex-start;
					justify-self: flex-end;
					margin-right: 15vh;
				}

				&.row {
					flex-direction: row;
					justify-content: space-around;
					max-width: 1480px;
					width: 100%;

					> div {
						flex: 1 1;
					}

					h2 {
						font-size: 4rem;
					}
				}
			}

			img {
				height: 7rem;
				width: 7rem;
			}

			h1,
			h2 {
				font-family: sans-serif;
				font-size: 2.8rem;
				margin: 2rem 0;
				text-transform: uppercase;
			}

			h2 {
				-webkit-text-stroke: transparent 2px;
				margin: 0.25rem 0;
				position: relative;
				transition-duration: 0.3s;

				&.highlight {
					-webkit-text-stroke: white 2px;
					color: black;
				}
			}
		}

		.f-1 {
			animation: fade-in 1s 1s forwards;
			opacity: 0;
		}

		@keyframes fade-in {
			0% {
				opacity: 0;
				transform: translateY(-10px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
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
