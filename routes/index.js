var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

// Contact page
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

//Admin Dashboard
router.get('/adminDash', function(req, res, next){
    res.render('adminDash', { title: 'Admin Dashboard'});
});

router.get("/login", (req, res, next) => {

});

router.post("/login", (req, res, next) => {

});

router.get("/logout", (req, res, next) => {

});


module.exports = router;