var express = require('express');
var router = express.Router();
let passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

// Contact page
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

//Admin Dashboard
router.get('/adminDash', function(req, res, next) {
    res.render('adminDash', { title: 'Admin Dashboard' });
});
//Investor Dashboard
router.get('/investorDash', function(req, res, next){
    res.render('investorDash', { title: 'Inventor Dashboard'});
});

//Login get request
router.get("/", (req, res, next) => {
    if (!req.user) {
        res.render("index", {
            title: "Login",
            messages: req.flash('loginMessage')
        })
    }
});

router.post("/",
    passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/login"
    }),
    function(req, res) {
        res.redirect("index")
    }
);


router.get("/logout", (req, res, next) => {
    req.logout();
    res.redirect('/');
});


module.exports = router;