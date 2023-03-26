const mongoose = require('mongoose');


const UserSchema = mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true }
    }
);

const UserModel = mongoose.model('User', UserSchema, 'user');

module.exports = UserModel;