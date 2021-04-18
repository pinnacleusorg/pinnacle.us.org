
<div class="container-wide light-bg" id="big-numbers">
  <div class="container inner">
    <div class="big-num-container">
      <div class="big-num">
        <div class="big-num-num" data-from="0" data-to="36">36</div>
        <div class="big-num-label">
          <p>hours of intense competition</p>
        </div>
      </div>
      <div class="big-num">
        <div class="big-num-num" data-from="0" data-to="50">50</div>
        <div class="big-num-label">
          <p>top collegiate hackathons participating</p>
        </div>
      </div>
      <div class="big-num">
        <div class="big-num-num" data-from="0" data-to="200">200</div>
        <div class="big-num-label">
          <p>of the world's brightest student hackers</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .big-num-container {
    display: flex;
    width: 100%;
  }

  .big-num-container .big-num {
    flex-basis: 33%;
    text-align: center;
    padding: 0 2.5%;
  }

  .big-num .big-num-num {
    font-size: 5rem;
    font-family: KeplerStd;
    font-weight: bold;
  }

  .big-num .big-num-label {
    color: var(--pinnacle-gold);
    font-size: 1.5rem
  }
</style>