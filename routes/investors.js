let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/investors', function(req, res, next) {
    res.render("investors", { title: "This is investors page" });
});

module.exports = router;