
<script lang="ts">
  import BrandButton from "./BrandButton.svelte";

  let subscribeDisabled = false;
  let name: string, email: string; // Bound values

  function trySubscribe(e): void {
    e.preventDefault();

    name = name.trim();
    email = email.trim();
    if (!name || !email)
      return;
    if (subscribeDisabled)
      return;
    subscribeDisabled = true;
    //submit, report errors to #updatedMsg.
    fetch('https://api.pinnacle.us.org/1.0/contacts', {
        method: 'post',
        body: JSON.stringify({ "email": email, "name": name }),
        headers: new Headers({ "Content-Type": "application/json" })
      })
      .then(() => {
        name = "";
        email = "";
        document.querySelector('#updatedMsg').classList.add("successful");
        document.querySelector('#updatedMsg').textContent = "Welcome to the mailing list!";
        subscribeDisabled = false;
      })
      .catch(function (msg) {
        console.log(msg);
        var error = "Error: Please confirm your email address is accurate";
        if (msg.status == 409)
          error = "You're already on our list!";
        document.querySelector('#updatedMsg').classList.add("err");
        document.querySelector('#updatedMsg').textContent = error;
        subscribeDisabled = false;
      });
  }
</script>

<div class="flex-row engagement-deck">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Future staff?</h3>
      <p class="card-text">Be a part of the team that makes it happen.</p>
    </div>
    <div class="card-footer">
      <BrandButton href="https://hack.ms/P20-Team-Application" isAnchor="{true}">Apply Now</BrandButton>
    </div>
  </div>
  <div class="card-divider"></div>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Stay in the Loop</h3>
      <div class="stacked-input">
        <div class="input-group">
          <input bind:value="{name}"
            type="text"
            class="form-control"
            id="engagement-fn"
            placeholder="First Name"/>
        </div>
        <div class="input-group">
          <input bind:value="{email}"
            type="email"
            class="form-control"
            id="engagement-email"
            placeholder="Email Address"/>
        </div>
        <div class="mt-1" id="updatedMsg">&nbsp;</div>
      </div>
    </div>
    <div class="card-footer">
      <BrandButton on:click="{trySubscribe}">Stay Updated</BrandButton>
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
  }
  .card, .card-body {
    font-family: KeplerStd;
    flex: 1 1;
    margin-bottom: 1rem;
  }
  .card-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  .engagement-deck {
    margin-bottom: 3rem;
  }
  .engagement-deck .card {
    text-align: center;
    padding: 1.25rem;
  }
  .engagement-deck .card .card-body {
    padding-bottom: 0;
  }
  .engagement-deck .card p.card-text {
    font-size: 1.3rem !important;
    font-family: CasperRegular;
    padding: 0.5rem;
  }
  .card-divider {
    flex: 0 0 3px;
    background-color: var(--pinnacle-gold);
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-right: 0;
  }
  .stacked-input {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  .input-group input {
    border-color: #1B1B1B;
    border-width: 3px;
    border-radius: 0;
    color: black;
    background-color: var(--pinnacle-bg-light);
    font-size: 1.3rem;
    font-family: inherit;
    padding: 0.5rem 0.6rem;
  }
  .input-group input::placeholder {
    color: var(--pinnacle-bg);
  }
  .input-group input:focus, .input-group input:active {
    outline: none;
    box-shadow: none;
    border-color: #1B1B1B;
    background-color: var(--pinnacle-bg-light);
    color: black;
  }
  
  .stacked-input .input-group:first-child input {
    border-bottom-width: 0.5px;
  }
  .stacked-input .input-group:last-child input {
    border-top-width: 0.5px;
  }
</style>
