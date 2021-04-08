const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investorUserSchema = new Schema({
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

}, { timestamps: true });

module.exports = mongoose.model('InvestorUser', investorUserSchema);