
<script lang="ts">
	import Hero from "../components/Splash.svelte";
	import ApplyForm from "../components/ApplyForm.svelte";

	setTimeout(() => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	}, 2000);
</script>

<div class="apply">
	<Hero />
	<div class="container">
		<ApplyForm />
	</div>
</div>

<style lang="scss">
	.container {
		max-width: 700px;
	}
</style>