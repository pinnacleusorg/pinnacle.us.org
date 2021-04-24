
<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    document.addEventListener("scroll", () => {
      const scrollAdj = (window.scrollY / window.innerHeight) * 100;
      if (scrollAdj > 150) return; // Performance (reduce DOM operations)
      let hero = document.querySelector("#hero .inner") as HTMLElement;
      hero.style.marginTop = `calc(-8rem - ${scrollAdj}px)`;
    });
  });

</script>

<div class="fh fw" id="hero">
  <div class="container inner">
    <img
      src="meta/icon.png"
      alt="Pinnacle Logo"
      class="brand-img"
      id="keyLogo"/>
    <img
      src="image/logo-text.png"
      alt="Pinnacle"
      class="brand-img"
      id="keyLabel"/>
    <span class="byline brand-img" id="keyByline">
      The Olympics of Hackathons
    </span>
  </div>
</div>

<style lang="scss">
  #hero {
    background-color: var(--pinnacle-bg);
    color: var(--pinnacle-gold);
    display: flex;
    align-items: center;
    font-family: KeplerStd;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -3;

    .inner {
      box-sizing: border-box;
      margin-top: -8rem;
      width: 100%;
      transition: margin-top 0.2s ease-out;
    }
    
    .brand-img {
      display: block;
      font-weight: bolder;
      margin: auto;
      width: 30rem;
    }
    
    #keyLogo {
      margin-bottom: 1rem;
      width: 10rem;
    }
    
    #keyLabel {
      margin-top: 4rem;
    }

    #keyByline {
      font-size: 25px;
      font-weight: lighter;
      letter-spacing: 1.2px;
      margin-top: 2rem;
    }

    @media (max-width: 767px) {
      .inner {
        margin-top: 0 !important;
        padding: 4rem;
      }
      
      .brand-img, #keyLabel, #keyByline, #keyLogo {
        max-width: 100%;
      }
    }
  }
</style>
