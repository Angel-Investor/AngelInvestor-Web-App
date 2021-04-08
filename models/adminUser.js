const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const adminUser = new Schema({
    adminUserName: {
        type: String,
        default: "admin"
    },
    password: {
        type: String,
        default: "admin123"
    }
}, { collection: "adminUser" });

adminUser.plugin(passportLocalMongoose, {
    limitAttempts: true,
    maxAttempts: 10,
});

module.exports = mongoose.model('AdminUser', adminUser);