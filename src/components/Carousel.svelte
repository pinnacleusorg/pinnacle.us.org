
<script lang="ts">
  import { onMount } from "svelte";

  interface Hackathon {
    _id: number,
    internal_title: string,
    title: string, // Display Name
    website: string, // URL string
    startDate: string // DateTime string
  }
  let hackathons: Hackathon[] = [];

  onMount(() => {
    /* ! TODO: REPLACE THIS CORS PROXY IN PRODUCTION [DEVELOPMENT ONLY] */
    fetch("https://cors.sdbagel.com/https://api.pinnacle.us.org/1.0/hackathons")
      .then(res => res.json())
      .then(res => hackathons = res.results)
      .then(() => hackathons = hackathons.sort((a, b) => 
        { return a.internal_title.localeCompare(b.internal_title); }))
      .catch(ex => console.log("GET hackathons failed: "+ex));
  });

  function scrollCarousel(direction: number): void {
    const c = document.querySelector("#carouselContainer");
    c.scrollBy(direction * c.getBoundingClientRect().width, 0);
  }
</script>

<div class="container-wide light-bg" id="carousel">
  <div class="container inner flex-column">
    <h2>Partnered Events</h2>
    <p class="carousel-subtitle">The winners of our partnered hackathons qualify for our premiere event.</p>
    <br>
    <div class="carousel">
      <button class="carousel-nav reverse" on:click="{() => {scrollCarousel(-1);}}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
        </svg>
      </button>
      <div class="carousel-inner flex-row flex-list" id="carouselContainer">
        {#each hackathons as event}
          <a class="carousel-element" href="{event.website}" target="_blank">
            <img src="vendor/{event.internal_title}.png" alt="{event.title}">
            <span class="spacer"></span>
            <span>{event.title}</span>
          </a>
        {/each}
      </div>
      <button class="carousel-nav" on:click="{() => {scrollCarousel(1);}}">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,2l9,10l-9,10h2l9-10L12,2H10z"></path>
        </svg>
      </button>
    </div>
    <br><br><br>
    <p class="carousel-subtitle">Check out our <a href="/hackathons">full list</a> of partnered events.</p>
  </div>
</div>

<style lang="scss">
  #carousel {
    padding-bottom: 16rem !important;
    
    h2 {
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      padding-bottom: 0.8rem;
    }
    
    .inner {
      max-width: 90%;
      margin: auto;
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
      display: flex;
      flex-direction: column;
      text-align: center;
      min-width: calc(25% - 15px);
      scroll-snap-align: start;
      scroll-snap-stop: normal;

      img {
        border-radius: 5px;
        margin: auto;
        margin-top: 3rem;
        margin-bottom: 2rem;
        height: 220px;
        width: 220px;
      }

      span {
        display: block;
        font-size: 1.6rem;
      }
    }
  }

  .carousel-subtitle {
    text-align: center;
    font-size: 1.3rem;
    margin: 0;
  }

  @media (max-width: 1050px) {
    #carousel h2 {
      padding-bottom: 0;
    }
    .carousel-nav {
      display: none;
    }
    .carousel-inner .carousel-element {
      min-width: 100%;
    }
  }

  @media (min-width: 1550px) {
    #carousel {
      padding-bottom: 20rem !important;
    }
  }
</style>