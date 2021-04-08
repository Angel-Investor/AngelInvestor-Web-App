const mongoose = require('mongoose');
const BusinessUser = require("./businessUser");
const Schema = mongoose.Schema;

const businessSchema = new Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BusinessUser.modelName
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
    }
}, { collection: "business" }, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema);