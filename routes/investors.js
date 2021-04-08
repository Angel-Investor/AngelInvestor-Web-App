let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("investors", { title: "Investors Listing" });
});

router.get('/add-investor', function(req, res, next) {
    res.render("investorRegister", { title: "Investors Registration" });
});

router.post("/add-investor", (req, res, next) => {

});

router.get("/edit-investor/:id", (req, res, next) => {

});

router.post("/edit-investor/:id", (req, res, next) => {

});

router.get("/delete-investor/:id", (req, res, next) => {

});


module.exports = router;