const mongoose = require('mongoose');


const UserSchema = mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        calcopr:  { type: String, default: '&nbsp;' },
        calcres:  { type: String, default: '&nbsp;' }
    }
);

const UserModel = mongoose.model('User', UserSchema, 'user');

module.exports = UserModel;