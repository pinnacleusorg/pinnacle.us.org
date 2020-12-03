var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/hackathons', function(req, res, next) {
  res.render('hackathons');
});
router.get('/privacy', function(req, res, next) {
  res.render('privacy');
});
router.get('/favicon.ico', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'assets', 'favicon.ico'));
});

module.exports = router;
