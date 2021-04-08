const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const businessUser = new Schema({
    businessUserName: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: true
    }
}, { collection: "businessUser" }, { timestamps: true });

businessUser.plugin(passportLocalMongoose, {
    limitAttempts: true,
    maxAttempts: 10,
});

module.exports = mongoose.model('BusinessUser', businessUser);