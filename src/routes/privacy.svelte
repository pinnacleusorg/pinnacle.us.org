
<script lang="ts">
	import Header from "../core/components/Header.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
	<title>Pinnacle • Privacy Policy</title>
</svelte:head>

<div class="light-bg">
	<Header />
	<div class="container component-section">
		<a href="/">&lsaquo; Home</a>
		<h2>Privacy Policy</h2>
		<p>Your privacy is important to us. It is Pinnacle's policy to respect your privacy regarding any information we may collect from you across our website, https://pinnacle.us.org, and other sites and/or platforms we own and operate.</p>
		<p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. At this point in time, the information we collect consists of:</p>
		<ul>
			<li>Your email address - for the purpose of sending you newsletter updates after you directly opt in for them</li>
			<li>Your first name - for the purpose of identifying you in our communications</li>
			<li>Your IP address - for the purpose of identifying unique users in our system and preventing system abuse</li>
		</ul>
		<p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
		<p>We don’t share any personally identifying information publicly or with third-parties, without your explicit consent, except when required to by law.</p>
		<p>Any information collected for the purpose of our mailing list will be used solely by Pinnacle, to keep you informed on topical information. The information provided will not be sold or transfered to any third party without consent. You are able to opt out of the mailing list at any time by sending us an email or clicking the "opt out" link in the footer of every email. If you opt out, your information will be permanently deleted from our records.</p>
		<p>Likewise, user supplied content and information provided to Pinnacle, required to be provided by invited attendees, will not be transferred, sold, or otherwise given to third parties without prior consent and approval. User content and information includes, but is not limited to, name, date of birth, address, and uploaded profile picture. This information is used internally only to display data unless permitted to be shared with recruiters or third parties explicitly by you.</p>
		<p>We will not, and do not intend, to email you regarding anything unrelated to Pinnacle and its community. Messages will be sent on an infrequent basis, and you are always able to opt out if the mailing list becomes cumbersome or you are no longer interested in following Pinnacle.</p>
		<p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
		<p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
		<p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us at legal@pinnacle.us.org</p>
		<p>This policy is effective as of 1 February 2020.</p>
	</div>
	<Footer showLegal="{false}" />
</div>

<style lang="scss">
	a {
		text-decoration: none;
	}

	.container {
		max-width: 900px;
		padding-left: 30px;
		padding-right: 30px;
	}
</style>