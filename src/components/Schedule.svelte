
<script lang="ts">
  import Timeline from "./Timeline.svelte";
  import EngagementDeck from "./EngagementDeck.svelte";
</script>

<div class="container-fluid light-bg" id="schedule">
  <div class="container inner">
    <h2>Timeline</h2>
    <Timeline />
    <EngagementDeck />
  </div>
  <div class="skyline">
    <div class="skyline-component animated off-left" id="skyline_goldengate"></div>
    <div class="skyline-component animated off-right" id="skyline_twinpeaks"></div>
    <div class="skyline-component animated off-right" id="skyline_gold"></div>
    <div class="skyline-component animated off-right" id="skyline_black"></div>
  </div>
</div>

<style lang="scss">
  /* Schedule Section */
  #schedule {
      padding-bottom: 550px;
  }
  #schedule h2 {
      text-align: center;
  }
  #schedule .inner {
      min-height: 40rem;
  }
  #schedule .right-body {
      margin-top: 8rem;
      font-size: 34px;
  }
  .calendar-obj {
      font-weight: bold;
  }
  .calendar-obj .time {
      float: left;
      display: inline-block;
  }
  .calendar-obj .description {
      float: right;
      display: inline-block;
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
  .skyline-component {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      position: absolute;
  }
  #skyline_black {
      background-image: url('/image/skyline-black.svg');
  }
  #skyline_gold {
      background-image: url('/image/skyline-gold.svg');
  }
  #skyline_goldengate {
      background-image: url('/image/skyline-goldengate.svg');
  }
  #skyline_twinpeaks {
      background-image: url('/image/skyline-twinpeaks.svg');
  }
  .skyline-component.animated {
      transition: transform 2s ease;
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      will-change: transform;
  }
  .skyline-component.off-right {
      -webkit-transform: translateX(103%);
      transform: translateX(103%);
  }
  .skyline-component.off-left {
      -webkit-transform: translateX(-103%);
      transform: translateX(-103%);
  }
</style>