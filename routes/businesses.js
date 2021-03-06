let express = require('express');
let router = express.Router();
const passport = require("passport");
const BusinessUser = require("../models/businessUser");
const BusinessPost = require("../models/business")


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("businessList", { title: "Business Listing" });
});

router.get("/add-business-user", (req, res) => {

    if (req.user)
        return res.redirect("/");

    res.render("businessRegister", {
        title: "Business Registeration",
        messages: req.flash("registerMessage"),
    });
});

router.post("/add-business-user", (req, res, next) => {

    let newBusinessUser = new BusinessUser({
        businessUserName: req.body.businessUserName,
        //password: req.body.password,
        businessEmail: req.body.businessEmail,
        businessDisplayName: req.body.businessDisplayName
    });

    BusinessUser.register(newBusinessUser, req.body.password, err => {

        if (err) {
            if (err.name === "UserExistError") {
                req.flash("registerMessage", "Registration error : User already exists.");
            }

            res.render("businessRegister", {
                title: "Business Registeration",
                messages: req.flash("registerMessage"),
            });

        }

        passport.authenticate("local")(req, res, () => {

            res.redirect("/businessList");
        });


    });



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