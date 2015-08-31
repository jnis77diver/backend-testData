/**
 * Module dependencies
 */
var express = require('express');
var testData = require('./../test-data');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
var indexRouter = express.Router();

/!**
 * this accepts all request methods to the `/` path
 *!/

indexRouter.route('/')
  .all(function (req, res) {
    res.render('index', {
      title: 'ob-mockbackend'
    });
  });

indexRouter.route('/products')
  .get(function (req, res) {
    console.log('products is being logged');
    res.send(200, testData.products);
  });

indexRouter.route('/columns')
  .get(function (req, res) {
    res.send(200, testData.columns);
  });

indexRouter.route('/groups')
  .get(function (req, res) {
    res.send(200, testData.groups);
  });


exports.indexRouter = indexRouter;*/


module.exports = function(app) {


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



};
