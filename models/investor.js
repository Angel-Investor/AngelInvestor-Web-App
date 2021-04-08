const mongoose = require('mongoose');
const InvestorUser = require("./investorUser");

const Schema = mongoose.Schema;

const investorSchema = new Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: InvestorUser.modelName
    },
    title: {
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
}, { collection: "investor" }, { timestamps: true });

module.exports = mongoose.model('Investor', investorSchema);