const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investorSchema = new Schema({
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
    },
}, { timestamps: true });

module.exports = mongoose.model('Investor', investorSchema);