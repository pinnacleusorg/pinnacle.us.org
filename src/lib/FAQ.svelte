<script>
	import Chamfer from "$lib/Chamfer.svelte";
	import FaqLines from "./FAQLines.svelte";
</script>

<section class="container-wide component-section-large" id="faq">
	<Chamfer color="white" location="bottom" orientation="right" width={35} />
	<FaqLines />
	<a name="faq"><h2>Frequently Asked Questions</h2></a>
	<div class="container inner">
		<div class="body">
			<details>
				<summary>How do I apply? Who can join?</summary>
				<p>
					Sign up for an upcoming Pinnacle participating event. Winners will be
					invited to Pinnacle 2023.
				</p>
			</details>
			<details>
				<summary>What happens when I win a participating event?</summary>
				<p>
					Our team will reach out to you directly through the email provided by
					the hackathon organizers and we will be in touch to confirm your spot.
					If you have not received anything after a few weeks from winning your
					hackathon, please check your spam and/or reach out to <a
						href="mailto:team@pinnacle.us.org"
						target="_blank">team@pinnacle.us.org</a
					> for help.
				</p>
			</details>
			<details>
				<summary>Do you provide travel reimbursement?</summary>
				<p>
					Yes! All Pinnacle attendees will receive travel reimbursement if they
					are invited.
				</p>
			</details>
			<details>
				<summary
					>How can I stay up to date with the latest Pinnacle qualifiers?</summary
				>
				<p>
					We post the latest updates for Pinnacle qualifying events on our <a
						href="//instagram.com/pinnacleusorg"
						target="_blank">Instagram</a
					>,
					<a href="//facebook.com/pinnacleusorg" target="_blank">Facebook</a>,
					and
					<a href="//twitter.com/pinnacleusorg" target="_blank">Twitter</a>
					pages. Additionally, you can
					<a href="#contact">sign up for our mailing list</a> for a monthly digest
					of the upcoming Pinnacle qualifying events.
				</p>
			</details>
			<details>
				<summary>When is Pinnacle 2023? Where is it taking place?</summary>
				<p>
					Pinnacle 2023 will take place end of year 2023. More info and venue will be announced
					soon.
				</p>
			</details>
		</div>
		<br />
		<p class="tag">
			Still need help? Contact <a href="mailto:team@pinnacle.us.org"
				>team@pinnacle.us.org</a
			>!
		</p>
	</div>
</section>

<style lang="scss">
	#faq {
		@include background-grey;
		padding-top: 6rem;
		position: relative;

		h2 {
			margin-bottom: 2rem;
			text-align: center;
		}

		.inner {
			@include background-white;
			max-width: $max-inner-width;
			padding: 5rem 2.5rem;
			position: relative;
			z-index: 5;

			@media (max-width: 768px) {
				margin: 0 3vw;
			}
		}

		.body {
			display: flex;
			flex-direction: column;
			row-gap: 30px;
			font-weight: lighter;
		}

		details {
			width: 100%;

			summary {
				border-bottom: 3px solid $gold;
				cursor: pointer;
				font-weight: bold;
				padding: 10px;
			}
		}

		.tag {
			margin-top: 2rem;
			text-align: center;
		}
	}
</style>
