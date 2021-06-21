<script lang="ts">
	import BrandButton from "./BrandButton.svelte";
</script>

<div id="modal-container">
   <div id="modal">
		<div id="close-modal-banner">
			<button id="close-modal-button">✕</button>
		</div>
		<div id="container-with-accents">
			<div id="modal-content">
				<div id="hackathon-name">
					 Tree Hacks
				</div>
				<div class="modal-text" id="hackathon-date">
					February 14-16, 2020
				</div>
				<div class="modal-two-columns">
					<div id="hackathon-logo">
						<img id="treehacks-logo" src="//static.pinnacle.us.org/2021/vendor/treehacks.png" alt="Treehacks Logo">
					</div>
					<div class="gold-accent-line" id="short-middle-accent"></div>
					<div class="modal-text" id="qualifying-hackers-section">
						<div id="qualifying-hackers-header">
							Qualifying Hackers
						</div>
						<div id="qualifying-hackers-list">
							<div> Samuel Escapa </div>
							<div> Jamsheed Mistri </div>
							<div> Oscar Bjorkman </div>
							<div> Michael Yoo </div>
						</div>
					</div>
					<BrandButton href="#" isAnchor="{true}" isOutline="{true}">Project Link</BrandButton>
				</div>
			</div>
			<div id="accent-box">
				<div class="gold-accent-line" id="long-right-accent"></div>
				<div class="gold-accent-line" id="bottom-right-accent"></div>
			</div>
		</div>
  </div>
</div>

<style lang="scss">
	#modal-container {
	    position: fixed; /* Sit on top of the page content */
	    display: flex; /* Hidden by default */
	    width: 100%; /* Full width (cover the whole page) */
	    height: 100%; /* Full height (cover the whole page) */
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
	    z-index: 15; /* Specify a stack order in case you're using a different order for other elements */
	  }

	#modal {
	    width: 80%;
	    background: var(--pinnacle-bg-light);
	    margin: 15vh auto;
	    padding-left: 1rem;
	    display: flex;
	    max-width: 650px;
	    max-height: 550px;
	    color: var(--pinnacle-bg);
	    flex-direction: column;

	    --notchSize: 70px;

	    clip-path:
	    polygon(
	      0% var(--notchSize),
	      var(--notchSize) 0%,
	      100% 0%,
	      100% 0%,
	      100% calc(100% - var(--notchSize)),
	      calc(100% - var(--notchSize)) 100%,
	      0% 100%,
	      0% 100%
	    );
	}

	#modal-content {
	    font-family: KeplerStd;
	    font-weight: 500;
	    margin-left: 3rem;
	    display: flex;
	    flex-direction: column;
	}

	#hackathon-name {
	    margin-bottom: -1rem;
	    font-size: 5rem;
	}

	.modal-text {
	    font-size: 1.6rem;
	}

	.modal-two-columns {
	    padding: 2rem 0 0 0;
	    display: flex;
	    flex-wrap: wrap;
	    max-height: 300px;
	    max-width: 500px;
	    justify-content: space-around;
	}

	#container-with-accents {
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	}

	#qualifying-hackers-header {
	    margin-left: 30px;
	}
	#qualifying-hackers-list {
	    margin: 30px;
	}

	#close-modal-banner {
	    display: flex;
	    justify-content: flex-end;
	    height: 60px;
	  }

	#close-modal-button {
	    background-color: var(--pinnacle-bg-light);
	    font-size: 1.9rem;
	    color: gray;
	    margin: 15px;
	    border: 0;
	}

	.pinnacle-btn {
	    border: 3px solid var(--pinnacle-gold);
	    font-family: KeplerStd;
	    font-size: 1.5rem;
	    color: var(--pinnacle-gold);
	    background-color: var(--pinnacle-bg-light);
	    max-width: 10rem;
	    text-align: center;
	    padding: 0.5rem 3rem 0 3rem;
	    margin: 0 1rem 0 1rem;
	}

	.notched {
	    --notchSize: 20px;

	    clip-path:
	    polygon(
	      0% var(--notchSize),
	      var(--notchSize) 0%,
	      100% 0%,
	      100% 0%,
	      100% calc(100% - var(--notchSize)),
	      calc(100% - var(--notchSize)) 100%,
	      0% 100%,
	      0% 100%
	    );
	}

	#project-link-button {
	    align-self: center;
	}

	button {
	    cursor: pointer;
	}

	img#treehacks-logo {
	    max-width: 11rem;
	}

	.gold-accent-line {
	    width: 4px;
	    background-color: var(--pinnacle-gold);
	}

	#short-middle-accent {
	    height: 115px;
	    align-self: center;
	}

	#accent-box {
	    padding: 40px;
	    display: flex;
	    flex-direction: column;
	}

	#long-right-accent {
	    height: 320px;
	    flex-direction: row;
	}

	#bottom-right-accent {
	    height: 100px;
	    margin-top: -15px;
	    margin-left: -31px;
	    transform: rotate(40deg);
	}
</style>
