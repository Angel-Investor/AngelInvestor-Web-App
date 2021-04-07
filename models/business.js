let mongoose = require('mongoose');

let businessModel = mongoose.Schema({
    title: String,
    author: String,
    description: String
},
{
    collection: "businesses"
});

module.exports = mongoose.model('Business', businessModel);