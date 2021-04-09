let express = require('express');
let router = express.Router();
const passport = require("passport");
const User = require("../models/businessUser");
const Business = require("../models/business")


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("businessList", { title: "Business Listing" });
});




router.get("/add-business-user", (req, res) => {

    res.render("businessRegister", { title: "Business Registration" });
    // if (req.user)
    //     return res.redirect("/");

    // res.render("businessRegister", {
    //     title: "Business Registeration",
    //     messages: req.flash("registerMessage"),
    // });
});

router.post("/add-business-user", (req, res, next) => {

});


router.get('/add-business-post', function(req, res, next) {
    res.render("#", { title: "Add Business Post" });
});

router.post("/add-business-post", (req, res, next) => {

});

router.get("/edit-business-post/:id", (req, res, next) => {

});

router.post("/edit-business-post/:id", (req, res, next) => {

});

router.get("/delete-business-post/:id", (req, res, next) => {

});

module.exports = router;