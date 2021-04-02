let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("investors", { title: "This is investors page" });
});

router.get('/invregister', function(req, res, next) {
    res.render("investorRegister", { title: "This is investors registration page" });
});

module.exports = router;