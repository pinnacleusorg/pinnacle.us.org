
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
			targets: ".big-num p",
			opacity: [0.1, 1],
			translateY: [10, 0],
			delay: anime.stagger(300),
			duration: 2000,
			easing: 'easeOutCubic'
		});
	}
</script>

<svelte:window on:scroll="{scrollHandler}" />
<div class="container-wide component-section light-bg" id="big-num">
	<div class="container inner">
		<div class="flex-smart">
			<div class="big-num">
				<div class="countup" data-to="36">36</div>
				<p>hours of intense competition</p>
			</div>
			<div class="big-num">
				<div class="countup" data-to="50">50</div>
				<p>top collegiate hackathons participating</p>
			</div>
			<div class="big-num">
				<div class="countup" data-to="200">200</div>
				<p>of the world's brightest student hackers</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.big-num {
		flex-basis: 33%;
		text-align: center;
		padding: 0 .5%;
		
		.countup {
			font-size: 5rem;
			font-family: KeplerStd;
			font-weight: bold;
		}

		p {
			color: var(--pinnacle-gold);
			font-size: 1.5rem
		}
	}
</style>