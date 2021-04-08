var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// database setup
let mongoose = require('mongoose');
let DB = require('./config/db');

mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
    console.log('Connected to MongoDB...');
});

var indexRouter = require('./routes/index');
var investorRouter = require('./routes/investors');
var businessesRouter = require('./routes/businesses');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//setup express session
app.use(session({
    secret: "SomeSecret",
    saveUninitialized: false,
    resave: false
}));

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

const InvestorUser = require("./models/investorUser");
const BusinessUser = require("./models/businessUser");
const AdminUser = require("./models/adminUser");

// passport setup
passport.use(AdminUser.createStrategy());
passport.serializeUser(AdminUser.serializeUser());
passport.deserializeUser(AdminUser.deserializeUser());

passport.use(InvestorUser.createStrategy());
passport.serializeUser(InvestorUser.serializeUser());
passport.deserializeUser(InvestorUser.deserializeUser());

passport.use(BusinessUser.createStrategy());
passport.serializeUser(BusinessUser.serializeUser());
passport.deserializeUser(BusinessUser.deserializeUser());


app.use('/', indexRouter);
app.use('/investors', investorRouter);
app.use('/businesses', businessesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;