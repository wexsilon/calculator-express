const passport = require('passport');
const UserModel = require('../models/user');

module.exports.getMethod = (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    else {
        res.render('signup', { title: 'Sign-Up', message: '' });
    }   
    
};

module.exports.postMethod = async (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    else {
        new UserModel({ username: req.body.username, password: req.body.password }).save();
        res.redirect('/user/login');
    }
};