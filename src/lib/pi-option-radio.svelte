
<script lang="ts">
  export let id: string;
  export let name: string;
</script>

<div class="input">
  <label for="{id}"><slot /></label><br>
  <input type="radio" id="{id}" name="{name}">
</div>

<style lang="scss">
  .input {
    display: flex;
  }
</style>