/**
 * Module dependencies.
 */

/*var express        = require('express'),
    path           = require('path'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    compress       = require('compression'),
    favicon        = require('static-favicon'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    config         = require('./config'),
    routes         = require('./routes'),
    testData       = require('./test-data');



var app = express();



/!**
 * Express configuration.
 *!/
app.set('port', config.server.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app
  .use(compress())
  .use(favicon())
  .use(logger('dev'))
  .use(bodyParser())
  .use(methodOverride())
  .use(express.static(path.join(__dirname, 'public')));

app.get('/products', function(req, res) {
  console.log('products is being logged');
  res.send(200, testData.products);
});

app.get('/columns', function(req, res) {
  console.log('products is being logged');
  res.send(200, testData.columns);
});

app.get('/groups', function(req, res) {
  console.log('products is being logged');
  res.send(200, testData.groups);
});

if (app.get('env') === 'development') {
  app.use(errorHandler());
}

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});*/

//////////////






var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('morgan');
var request = require('request');
var config         = require('./config');


var rootFolder = process.env.SALLYROOT || '/public';

var port = process.env.PORT || 3000;
app.set('port', port);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + rootFolder));

require('./routes/index')(app);

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
