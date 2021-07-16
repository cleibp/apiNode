const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsModel = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    ativo: {
        type: Boolean,
        default: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("News", newsModel);