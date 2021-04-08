let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("businesses", { title: "Business Listing" });
});

router.get('/busregister', function(req, res, next) {
    res.render("businessRegister", { title: "Business Registraion" });
});

router.get("/add-investor", (req, res) => {



})


module.exports = router;