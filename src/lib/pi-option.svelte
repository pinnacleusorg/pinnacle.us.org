
<script lang="ts">
  export let title: string;
</script>

<div class="group">
  <h3>
    <div>
      <span class="spacer" />
      <span>{title}</span>
    </div>
  </h3>
  <div class="indent"><slot /></div>
</div>

<style lang="scss">
	@import "./global.scss";

  .group {
    margin: 3rem 0;
  }
  
  .group h3 {
    display: flex;
    font-weight: normal;
    margin-top: 0;
    
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
  .indent {
    margin-left: 20px;
  }
</style>