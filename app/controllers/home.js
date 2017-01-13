var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('home/bookshelf', {
      layout : 'home',
      title: 'Welcome to Hell'
    });
});
router.get('/turn', function (req, res, next) {
    res.render('home/turn', {
      layout : 'main',
      title: 'Welcome to Hell'
    });
});
