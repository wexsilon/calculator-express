const passport = require('passport');
const LocalStartegy = require('passport-local').Strategy;
const UserModel = require('../models/user');


async function authUser(username, password, done) {
    try {
        let user = await UserModel.findOne({ username });
        if (user) {
            if (user.password === password) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        }
        else {
            done(null, false);
        }
    }
    catch(e) {
        done(e);
    }
    
}

passport.use(new LocalStartegy(authUser));
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (userid, done) => {
    try {
        done(null, await UserModel.findById(userid));
    }
    catch(e) {
        done(e);
    }
});


module.exports.getMethod = async (req, res) => {
    
    res.render('login', {title: 'Login', message: ''});
};

module.exports.postMethod = passport.authenticate(
    'local', { failureRedirect: '/user/login', successRedirect: '/' }
);