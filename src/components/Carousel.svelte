
<div class="container-fluid light-bg" id="carousel">
  <div class="container inner">
    <h2 class="mb-2">Upcoming Hackathons</h2>
    <p class="carousel-subtitle mb-4">Participate in an upcoming partner event to qualify for Pinnacle 2021.</p>
    <div class="carousel">
      <button class="carousel-nav mirrorflip">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
        </svg>
      </button>
      <div class="carousel-inner">
        <!-- Include carousel element with sorted hackathons -->
      </div>
      <button class="carousel-nav">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
        </svg>
      </button>
    </div>
    <p class="carousel-subtitle mt-4">Check out our <a href="/hackathons">full list</a> of partnered events.</p>
  </div>
</div>

<style lang="scss">
  #carousel {
    padding-bottom: 22rem !important;
  }

  #carousel h2 {
    text-align: center;
    padding-bottom: 0.8rem;
  }

  #carousel .inner {
    max-width: 90%;
  }

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-nav {
    width: 80px;
    -webkit-appearance: none !important;
    border: none !important;
    background: none !important;
    outline: none !important;
    font-size: 3rem;
    overflow: visible;
    transform: scale(1.0);
    transition: transform 0.5s ease;
  }

  .carousel-nav svg {
    width: 80%;
  }

  .carousel-nav.clicked {
    transform: scale(1.1);
  }

  .carousel-inner {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .carousel-element {
    width: calc(25% - 100px);
    min-width: 140px;
    padding-left: 50px;
    padding-right: 50px;
    display: inline-block;
    text-align: center;
    flex: 0 0 auto;
    box-sizing: content-box;
  }

  .carousel-element .carousel-image {
    width: 100%;
    padding: 25px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .carousel-element .carousel-image:hover {
    transform: translateY(-4px);
  }

  .carousel-element .carousel-title {
    display: block;
    color: var(--pinnacle-gold);
    font-size: 1.6rem;
  }

  .carousel-element .carousel-location {
    display: block;
    color: var(--pinnacle-bg);
    font-size: 1.6rem;
  }
  .carousel-subtitle {
    text-align: center;
    margin-top: 15px;
    font-size: 1.3rem;
  }

  @media (max-width: 767px) {
    #carousel {
      padding-bottom: 5rem !important;
    }
  }

  @media (max-width: 1050px) {
    #carousel h2 {
      padding-bottom: 0;
    }
    .carousel-inner {
      flex-wrap: wrap;
      justify-content: center;
    }
    .carousel-nav {
      display: none;
    }
  }

  @media (max-width: 1260px) {
    .carousel-element {
      width: calc(25% - 50px);
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  @media (min-width: 1550px) {
    #carousel {
      padding-bottom: 20rem !important;
    }
  }
</style>