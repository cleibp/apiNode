const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../settings/enviroment')
const Schema = mongoose.Schema;
const saltRounds = parseInt(config.saltRounds);


const userModel = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userModel.pre('save', async function(next) {
    let user = this;
    if (!user.isModified('password')) return next();

    user.password = await bcrypt.hash(user.password, saltRounds);
    return next();
});

module.exports = mongoose.model("User", userModel);