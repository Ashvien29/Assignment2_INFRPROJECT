var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
// You call the view from the router MVC
/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET About Me page. */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About us' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET contact me page. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact us' });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});
module.exports = router;