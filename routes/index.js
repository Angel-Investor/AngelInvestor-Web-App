var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'This is the Home Page' });
});

// Contact page
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'This is the Contact Page' });
});



module.exports = router;