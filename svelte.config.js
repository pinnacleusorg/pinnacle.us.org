
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: "@import 'static/scss/mixins.scss';"
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
