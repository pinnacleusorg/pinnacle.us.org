
import FormData from 'form-data';

const webhook = "https://discord.com/api/webhooks/927705707342618645/zH85mZdOTJPYleHoc8TskgzTfle0G-aITxCUXoiy_dgMxT-vIGV-SjE7aybvNIJ5uYvk";

export async function post(req) {
	const par = req.body;
	const res = Buffer.from(par.get("resume"), "base64");

	const body = {
		embeds: [
			{
				title: "New Application",
				footer: {
					text: `from pinnacle.us.org`
				},
				timestamp: new Date(),
				fields: [
					{
						name: "Name",
						value: (par.get("fullname") || "undef"),
						inline: true
					},
					{
						name: "Email",
						value: (par.get("email") || "undef"),
						inline: true
					},
					{
						name: "Organization",
						value: (par.get("org") || "undef")
					},
					{
						name: "Links",
						value: (par.get("links") || "undef").replace(/,/, "\n")
					},
					{
						name: "Applying for:",
						value: (par.get("app") || "undef")
					},
					{
						name: "What would you add to Pinnacle?",
						value: (par.get("values") || "undef")
					},
					{
						name: "Referred by:",
						value: (par.get("ref") || "undef").replace(/,/, "\n")
					},
				]
			}
		]
	}

	const fd = new FormData();
	fd.append("payload_json", JSON.stringify(body));
	fd.append("file1", res, { filename: "resume.pdf" });
	fd.submit(webhook, (err, res) => {
		if (err) console.log(err);
	});

	return {
		status: 204
	};
}