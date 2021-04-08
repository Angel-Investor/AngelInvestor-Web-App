const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const investorUser = new Schema({
    investorUserName: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    investorEmail: {
        type: String,
        trim: true,
        required: true
    },
    investorDisplayName: {
        type: String,
        trim: true,
        required: true,
    }

}, { collection: "investorUser" }, { timestamps: true });

investorUser.plugin(passportLocalMongoose, {
    limitAttempts: true,
    maxAttempts: 10,
});

module.exports = mongoose.model('InvestorUser', investorUser);