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
      margin-top: -8rem;
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
      display: block;
      height: 90vh;
      width: 100%;
      padding-bottom: 120vh;
      position: relative;

      .inner {
        margin-top: 0 !important;
        padding: 4rem;
      }
      
      .brand-img, #keyLabel, #keyByline {
        max-width: 100%;
      }
    }
  }
</style>
