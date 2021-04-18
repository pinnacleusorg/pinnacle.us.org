
<script lang="ts">
  export let showLegal = false;
</script>

<footer class="gold-bg">
  <div class="container-fluid inner text-center p-5" id="footer">
    &copy; 2021 Pinnacle
    {#if showLegal}
      <div class="legalees">
        <span class="small" id="updatedMsg">We will never sell or distribute your contact information without your consent &bull; <a href="/privacy">Our privacy policy</a></span>
      </div>
    {/if}
  </div>
</footer>

<style lang="scss">
  
</style>