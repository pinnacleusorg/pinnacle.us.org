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
    text-align: center;
    font-family: KeplerStd;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -3;

    .inner {
      margin-top: -8rem;
      transition: margin-top 0.2s ease-out;
    }
    
    .brand-img {
      width: 30rem;
      display: block;
      margin-left: auto;
      margin-right: auto;
      font-weight: bolder;
    }
    
    #keyLogo {
      margin-bottom: 1rem;
      padding-right: 3px;
      width: 10rem;
    }
    
    #keyLabel {
      margin-top: 4rem !important;
    }

    #keyByline {
      margin-top: 2rem;
      font-size: 25px;
      font-weight: lighter;
      letter-spacing: 1.2px;
    }
  }
</style>
