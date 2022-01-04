
const webhook = "https://discord.com/api/webhooks/927705707342618645/...";

export async function post(request) {
	console.log(request);

	const par = new URL(request.url).searchParams;
	//const res = Buffer.from(`par.get("resume")`);
	//console.log(new File([request.rawBody], "fname.text"))

	const body = {
		embeds: [
			{
				title: par.get("fullname")+" - New Application",
				footer: {
					text: `from ${new URL(request.url.host)}`
				},
				timestamp: new Date(),
				fields: [
					{
						name: "Name",
						value: par.get("fullname"),
						inline: true
					},
					{
						name: "Email",
						value: par.get("email"),
						inline: true
					},
					{
						name: "Organization",
						value: par.get("org")
					},
					{
						name: "Links",
						value: par.get("links").replace(/,/, "\n")
					},
					{
						name: "Applying for:",
						value: par.get("app").replace(/,/, "\n")
					},
					{
						name: "What would you add to Pinnacle?",
						value: par.get("values")
					},
					{
						name: "Referred by:",
						value: par.get("ref").replace(/,/, "\n")
					},
				]
			}
		]
	}

	await fetch(webhook, {
		method: "POST",
		body: JSON.stringify(body)
	});

	return {
		body: new URL(request.url).searchParams.toString()
	};
}