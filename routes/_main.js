const router = require("express").Router();
//const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn("/login");

var indexRouter = require('./index');
var investorRouter = require('./investors');
var businessesRouter = require('./businesses');

router.use('/', indexRouter);
router.use('/investors', investorRouter);
router.use('/businesses', businessesRouter);

module.exports = router;