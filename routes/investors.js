let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("investors", { title: "Investors Listing" });
});

router.get('/invregister', function(req, res, next) {
    res.render("investorRegister", { title: "Investors Registration" });
});

module.exports = router;