var express = require('express');
var path = require('path');
var fs = require('fs');
var logger = require('morgan');
var sass = require('sass');
var indexRouter = require('./routes/index');
var cors = require('cors');
var debug = require('debug')('pinnacle.us.org:server');
var chokidar = require('chokidar');
var http = require('http');

if(!process.env.PORT)
    require('dotenv').config();

var app = express();

//EJS Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if(process.env.NODE_ENV == 'production')
    app.use(logger("default", { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log'}));
else
    app.use(logger('dev'));

app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });

app.use(cors());

//SASS Middleware

// Instead of using middleware here, let's just render out our sass ...
function buildCSS() {
    debug("Rendering scss to main.css "+sass.info);
    var coreCSS = sass.renderSync({
        includePaths: [path.join(__dirname, 'assets', 'sass', '_partials')],
        file: path.join(__dirname, 'assets', 'sass', 'main.scss'),
        indentedSyntax: false,
        sourceMap: true,
        outFile: path.join(__dirname, 'assets', 'main.css'),
        outputStyle: 'compressed'
    });
    fs.writeFileSync(path.join(__dirname, 'assets', 'main.css'), coreCSS.css);
    fs.writeFileSync(path.join(__dirname, 'assets', 'main.css.map'), coreCSS.map);
    debug("SASS rendered in "+coreCSS.stats.duration+"ms");
}
buildCSS();

if(process.env.NODE_ENV != 'production')
    chokidar.watch(path.join(__dirname, 'assets', 'sass')).on('change', buildCSS);

//Route assets via /assets, rest to router...
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', indexRouter);

//Catch 404
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

//Build Server
app.set('port', process.env.PORT);

var server = http.createServer(app);
server.listen(process.env.PORT);

server.on('error', function(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error('Pipe requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('Port is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
server.on('listening', function() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
});
