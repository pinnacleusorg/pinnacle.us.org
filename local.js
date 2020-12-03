process.env.PORT = 9010;
require('./app.js'); // start the server on port 9010 ...

var bs = require('browser-sync').create();
bs.init({
    port: 9000,
    files: ["app.js", "views/*.ejs", "views/*/*.ejs", "assets/*.scss", "assets/*/*.scss", "assets/bg.js"],
    online: false,
    proxy: "localhost:"+process.env.PORT
});
