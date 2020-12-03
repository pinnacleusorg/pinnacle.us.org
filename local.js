process.env.PORT = 9005;
require('./app.js'); // start the server on port 9005 ...

var bs = require('browser-sync').create();
bs.init({
    port: 9000,
    files: ["views/*.ejs", "views/*/*.ejs", "assets/*.scss", "assets/*/*.scss", "assets/bg.js"],
    online: false,
    proxy: "localhost:"+process.env.PORT
});
