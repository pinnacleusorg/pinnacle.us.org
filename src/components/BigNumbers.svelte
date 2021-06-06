
<script lang="ts">
	import anime from "animejs/lib/anime.es";

	let triggered = false;
	function scrollHandler() {
		// Ensure animation is in view before triggering
		let yPos = document.querySelector("#big-num").getBoundingClientRect().y;
		if(yPos - window.innerHeight > 0) return;
		
		// Ensure animation only runs once
		if(triggered) return;
		else triggered = true;

		// Animate the big numbers
		anime({
			targets: ".big-num .countup",
			innerText: (el: HTMLElement) => {
				return [0, el.getAttribute("data-to")];
			},
			round: 1,
			delay: anime.stagger(300),
			duration: 2500,
			easing: 'easeOutCubic',
		});

		anime({
			targets: ".big-num .tag",
			opacity: [0.1, 1],
			translateY: [10, 0],
			delay: anime.stagger(300),
			duration: 2000,
			easing: 'easeOutCubic'
		});
	}
</script>

<svelte:window on:scroll="{scrollHandler}" />
<section class="container-wide component-section light-bg" id="big-num">
	<div class="container inner">
		<div class="flex-smart">
			<div class="big-num">
				<span class="countup" data-to="36">36</span>
				<span class="tag">hours of intense competition</span>
			</div>
			<div class="big-num">
				<span class="countup" data-to="50">50</span>
				<span class="tag">top collegiate hackathons participating</span>
			</div>
			<div class="big-num">
				<span class="countup" data-to="200">200</span>
				<span class="tag">of the world's brightest student hackers</span>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.big-num {
		flex-basis: 33%;
		text-align: center;
		padding: 0 .5%;

		span {
			display: block;
		}
		
		.countup {
			font-size: 5rem;
			font-family: KeplerStd;
			font-weight: bold;
		}

		.tag {
			color: var(--pinnacle-gold);
			font-size: 1.5rem;
			transform: translateY(10px);
		}
	}
</style>