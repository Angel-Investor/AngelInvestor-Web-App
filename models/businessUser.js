const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessUserSchema = new Schema({
    title: {
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
    },
}, { timestamps: true });

module.exports = mongoose.model('BusinessUser', businessUserSchema);