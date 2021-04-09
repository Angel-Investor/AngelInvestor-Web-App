let express = require('express');
let router = express.Router();
let passport = require('passport');
let InvestorUser = require("../models/investorUser");
let InvestorPost = require("../models/investor");



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("investorsList", { title: "Investors Listing" });
});


router.get('/add-investor-user', function(req, res, next) {
    res.render("investorRegister", { title: "Investors Registration" });
});

router.post("/add-investor-user", (req, res, next) => {

});



router.get('/add-investor-post', function(req, res, next) {
    res.render("#", { title: "Add Investor Post" });
});

router.post("/add-investor-post", (req, res, next) => {

});


router.get("/edit-investor-post/:id", (req, res, next) => {

});

router.post("/edit-investor-post/:id", (req, res, next) => {

});

router.get("/delete-investor-post/:id", (req, res, next) => {

});


module.exports = router;