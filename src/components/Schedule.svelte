
<script lang="ts">
  import { onMount } from "svelte";
  import Timeline from "./Timeline.svelte";
  import EngagementDeck from "./EngagementDeck.svelte";

  onMount(() => {
    document.addEventListener("scroll", () => {
      let yPos = document.querySelector("#schedule").getBoundingClientRect().y;
      if (yPos > 0) return; // yPos < 0 means skyline in view
      document.querySelector("#skyline").classList.remove("hidden");
      document.removeEventListener("scroll", this);
    });
  });
</script>

<div class="container-wide component-section light-bg" id="schedule">
  <div class="container inner flex-column">
    <Timeline />
    <EngagementDeck />
  </div>
  <div class="skyline hidden" id="skyline">
		<div class="skyline-component off-left" id="skyline-black"></div>
		<div class="skyline-component off-left" id="skyline-gold"></div>
		<div class="skyline-component off-right" id="skyline-bridge"></div>
  </div>
</div>

<style lang="scss">
  #schedule {
    position: relative;
		padding-bottom: 300px;
		
		.inner {
			min-height: 40rem;
		}
  }
  
  /* Animated Skyline */
  .skyline {
    width: calc(100% + 1px);
    position: absolute;
    left: -1px;
    right: 1px;
    bottom: -1px;
    height: 650px;
    overflow-x: hidden;
    pointer-events: none;
  }

  .skyline.hidden {
    > .off-right {
      -webkit-transform: translateX(103%);
      transform: translateX(103%);
    }
    > .off-left {
      -webkit-transform: translateX(-103%);
      transform: translateX(-103%);
    }
  }
  
  .skyline-component {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    position: absolute;

    transition: transform 2s ease;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    will-change: transform;

    &#skyline-black {
      background-image: url('/image/skyline-black.svg');
    }
    &#skyline-gold {
      background-image: url('/image/skyline-gold.svg');
    }
    &#skyline-bridge {
      background-image: url('/image/skyline-bridge.svg');
    }
  }
</style>