
<script lang="ts">
  export let id: string;
  export let name: string;
  export let value: string;
</script>

<div class="input">
  <label for="{id}">{value}</label><br>
  <input type="radio" id="{id}" name="{name}" bind:value="{value}">
  <input type="text" bind:value="{value}">
</div>

<style lang="scss">
  .input {
    display: flex;
  }
  label {
    display: none;
  }
</style>