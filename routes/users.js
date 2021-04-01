let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("users", { title: "This is users page" });
});

module.exports = router;