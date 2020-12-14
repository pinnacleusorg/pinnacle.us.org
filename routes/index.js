var express = require('express');
var path = require('path');
var router = express.Router();
var hackathonData = require('../assets/hackathons/hackathon-data.js');

router.get('/', function(req, res, next) {
  res.render('index', {hackathons: hackathonData});
});
router.get('/hackathons', function(req, res, next) {
  res.render('hackathons', {hackathons: hackathonData});
});
router.get('/privacy', function(req, res, next) {
  res.render('privacy');
});
router.get('/teaser', function(req, res, next) {
  res.render('teaser');
});
router.get('/favicon.ico', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'assets', 'favicon.ico'));
});

module.exports = router;
