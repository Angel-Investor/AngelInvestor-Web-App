let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("businesses", { title: "This is Businesses page" });
});

router.get('/busregister', function(req, res, next) {
    res.render("businessRegister", { title: "This is Businesses registraion page" });
});

module.exports = router;