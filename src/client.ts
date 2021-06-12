import * as sapper from '@sapper/app';
/*
TODO: re-review this probably
race condition handler:
	if we load client.ts LATE, always try starting
	if we load client.ts EARLY, wait until interactive
	if we load client.ts AFTER interactive, wait until load complete
*/
(function() {
	let sapperStarted = false;
	function startSapper() {
		if(sapperStarted || !document.body) return;
		sapperStarted = true;
		sapper.start({
			target: document.body
		});
	}
	document.addEventListener('readystatechange', event => {
		startSapper();
	});
	startSapper();
})();
