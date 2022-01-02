
<script lang="ts">
	import Hero from "../components/Splash.svelte";
	import ApplyForm from "../components/ApplyForm.svelte";
	import { onMount } from "svelte";
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