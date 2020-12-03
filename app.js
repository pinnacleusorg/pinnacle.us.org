var express = require('express');
var path = require('path');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var indexRouter = require('./routes/index');

if(!process.env.PORT)
    require('dotenv').config();

var app = express();

//EJS Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if(process.env.NODE_ENV == 'production')
    app.use(logger({ skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log'}));
else
    app.use(logger('dev'));

app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });

//SASS Middleware
app.use(sassMiddleware({
  src: path.join(__dirname, 'assets', 'sass'),
  dest: path.join(__dirname, 'assets'),
  indentedSyntax: false,
  sourceMap: true,
  prefix: '/assets/',
  outputStyle: 'compressed'
}));

//Route assets via /assets, rest to router...
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', indexRouter);

//Catch 404
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

//Build Server
var debug = require('debug')('pinnacle.us.org:server');
var http = require('http');
app.set('port', process.env.PORT);

var server = http.createServer(app);
server.listen(process.env.PORT);

server.on('error', function(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
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
