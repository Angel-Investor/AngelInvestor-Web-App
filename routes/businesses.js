let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("businesses", { title: "Business Listing" });
});

router.get('/add-business', function(req, res, next) {
    res.render("businessRegister", { title: "Business Registraion" });
});

router.post("/add-business", (req, res, next) => {

});

router.get("/edit-business/:id", (req, res, next) => {

});

router.post("/edit-business/:id", (req, res, next) => {

});

router.get("/delete-business/:id", (req, res, next) => {

});

module.exports = router;