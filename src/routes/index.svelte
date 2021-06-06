<script lang="ts">
	import Hero from "../components/Hero.svelte";
	import OverflowTriangle from "../components/OverflowTriangle.svelte";
	import Video from "../components/Video.svelte";
	import BigNumbers from "../components/BigNumbers.svelte";
	import Description from "../components/Description.svelte";
	import Carousel from "../components/Carousel.svelte";
	import Timeline from "../components/Timeline.svelte";
	import EngagementDeck from "../components/EngagementDeck.svelte";
	import Sponsors from "../components/Sponsors.svelte";
	import Skyline from "../components/Skyline.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
	<title>Pinnacle • The Olympics of Hackathons</title>
</svelte:head>

<div>
	<Hero />
	<OverflowTriangle />
	<Video />
	<BigNumbers />
	<Description />
	<Carousel />
	<Timeline />
	<EngagementDeck />
	<Skyline />
	<Sponsors />
	<Footer showLegal="{true}" />
</div>

<style lang="scss">
</style>