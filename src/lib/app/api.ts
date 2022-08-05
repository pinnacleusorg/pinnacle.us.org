import type { Hackathon } from "$lib/schema/hackathon";

const API_ROOT = import.meta.env.VITE_API_ROOT;

export async function contactsSubscribe(email: string, name: string) {
	return fetch(API_ROOT + "/contacts", {
		method: "POST",
		body: JSON.stringify({ email, name }),
		headers: new Headers({ "Content-Type": "application/json" })
	})
		.then((response) => {
			let message = "Welcome to the mailing list!";
			if (response.status != 200) {
				console.log(response);
				message = "Error: Please confirm your email address is accurate.";
				if (response.status == 409) message = "You're already on our list!";
				return { ok: false, message: response };
			} else return { ok: true, message };
		})
		.catch((response) => {
			return { ok: false, message: response };
		});
}

export async function hackathonsGet() {
	return fetch(API_ROOT + "/hackathons")
		.then((res) => res.json())
		.then((res) => {
			const masterHackathons = res.results.filter(
				(h: Hackathon) => h.isVisible !== false
			);
			const hackathons = masterHackathons
				.filter((h: Hackathon) => !h.isHighschool)
				.sort((a: Hackathon, b: Hackathon) => {
					return a.internal_title.localeCompare(b.internal_title);
				});
			const hsHackathons = masterHackathons
				.filter((h: Hackathon) => h.isHighschool)
				.sort((a: Hackathon, b: Hackathon) => {
					return a.internal_title.localeCompare(b.internal_title);
				});
			return { hackathons, hsHackathons };
		});
}
