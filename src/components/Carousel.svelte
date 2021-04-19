
<script lang="ts">
  function scrollCarousel(direction: number): void {
    const c = document.querySelector("#carouselContainer");
    c.scrollBy(direction * c.getBoundingClientRect().width, 0);
  }
</script>

<div class="container-wide light-bg" id="carousel">
  <div class="container inner">
    <h2 class="mb-2">Upcoming Hackathons</h2>
    <p class="carousel-subtitle mb-4">Participate in an upcoming partner event to qualify for Pinnacle 2021.</p>
    <div class="carousel">
      <button class="carousel-nav reverse" on:click="{() => {scrollCarousel(-1);}}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
        </svg>
      </button>
      <div class="carousel-inner flex-row flex-list" id="carouselContainer">
        <div class="carousel-element">1</div>
        <div class="carousel-element">2</div>
        <div class="carousel-element">3</div>
        <div class="carousel-element">4</div>
        <div class="carousel-element">1</div>
        <div class="carousel-element">2</div>
        <div class="carousel-element">3</div>
        <div class="carousel-element">4</div>
        <div class="carousel-element">1</div>
      </div>
      <button class="carousel-nav" on:click="{() => {scrollCarousel(1);}}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
        </svg>
      </button>
    </div>
    <p class="carousel-subtitle">Check out our <a href="/hackathons">full list</a> of partnered events.</p>
  </div>
</div>

<style lang="scss">
  #carousel {
    padding-bottom: 22rem !important;
    
    h2 {
      text-align: center;
      margin-bottom: 0.5rem;
      padding-bottom: 0.8rem;
    }
    
    .inner {
      max-width: 90%;
    }

    @media (max-width: 767px) {
      padding-bottom: 5rem !important;
    }
  }

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-nav {
    background: none !important;
    border: none !important;
    -webkit-appearance: none !important;
    font-size: 3rem;
    outline: none !important;
    width: 80px;
    overflow: visible;
    transform: scale(1.0);
    transition: transform 0.5s ease;

    &.reverse {
      transform: scale(-1.0);
    }
    
    svg {
      width: 80%;
    }
  }

  .carousel-inner {
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;
    width: 100%;

    overflow: auto;
    scroll-behavior: smooth;
    -ms-scroll-snap-type: x proximity;
    scroll-snap-type: x proximity;

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    .carousel-element {
      display: block;
      height: 300px;
      min-width: calc(25% - 15px);
      scroll-snap-align: start;
      scroll-snap-stop: normal;

      // Distinguishing blocks. Debug only
      background-color: #000;
      border-radius: 5px;
      color: #fff;
      font-size: 24px;
    }
  }

  .carousel-subtitle {
    text-align: center;
    margin-top: 15px;
    font-size: 1.3rem;
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

  @media (min-width: 1550px) {
    #carousel {
      padding-bottom: 20rem !important;
    }
  }
</style>