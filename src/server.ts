import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import * as dotenv from 'dotenv';
if(process.env.API_ROOT === undefined) {
	dotenv.config();
}
const { PORT, NODE_ENV, API_ROOT, LOCAL_ROOT } = process.env;

const dev = NODE_ENV === 'development';
express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: () => ({
				"PORT": PORT,
				"NODE_ENV": NODE_ENV,
				"API_ROOT": API_ROOT,
				"LOCAL_ROOT": LOCAL_ROOT
			})
		})
	)
	.listen(PORT, () => {
		console.log("OK!");
	});
