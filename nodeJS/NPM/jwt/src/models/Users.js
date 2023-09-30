const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            minlength: 6,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    { timeStamp: true }
);

const User = new mongoose.model('User', UserSchema);

module.exports = { User };
