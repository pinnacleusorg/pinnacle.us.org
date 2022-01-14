
<script lang="ts">
  import { scroll } from "./scroll";
  export let title: string;

  let el: HTMLElement = null;
  $: active = $scroll > (el ? el.getBoundingClientRect().top : 0);
</script>

<div class="group" bind:this="{el}">
  <h3>
    <div>
      <span class="spacer" />
      <span class="cover" class:activate="{active}"></span>
      <span>{title}</span>
    </div>
  </h3>
  <div class="desc">
    <slot name="description" />
  </div>
  <div class="indent" class:activate="{active}"><slot /></div>
</div>

<style lang="scss">
	@import "./global.scss";
  @import "./coverable.scss";

  .group {
    margin: 3rem 0;
  }
  
  .group h3 {
    display: flex;
    font-weight: normal;
    margin: 0;
    width: 100%;
    position: relative;
    
    div {
      display: flex;
      justify-content: flex-end;
      min-width: 30%;

      .spacer {
        background-color: $gold;
        flex: 1 1;
        min-width: 30px;
      }

      span:last-child {
        border-bottom: 3px solid $gold;
        color: $gold;
        display: block;
        min-width: 30px;
        padding-left: 10px;
        padding-right: 5px;
        white-space: nowrap;
      }
    }
  }

  .desc {
    color: $gold;
    font-size: 0.75em;
    margin-top: 10px;
    min-height: 10px;
    opacity: 0.8;
  }

  .indent {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    margin-left: 30px;

    opacity: 0;
    transition: opacity 1s 0.5s;

    &.activate {
      opacity: 1;
    }

    @media (min-width: 512px) {
      margin-left: 50px;
    }
  }
</style>