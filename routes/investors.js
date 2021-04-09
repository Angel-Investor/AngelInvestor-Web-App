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
    if (req.user)
        return res.redirect("/");

    res.render("investorRegister", {
        title: "Investor Registeration",
        messages: req.flash("registerMessage"),
    });
});

router.post("/add-investor-user", (req, res, next) => {

    let newInvestorUser = new InvestorUser({
        investorUserName: req.body.investorUserName,
        investorEmail: req.body.investorEmail,
        investorDisplayName: investorDisplayName

    });

    InvestorUser.register(newInvestorUser, req.body.password, err => {
        if (err) {
            if (err.name === "UserExistError") {
                req.flash("registerMessage", "Registration error : User already exists.")
            }

            res.render("InvestorRegister", {
                title: "Investor Registeration",
                messages: req.flash("registerMessage"),
            });

        }

        passport.authenticate("local")(req, res, () => {

            res.redirect("/investorList");
        });


    })

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