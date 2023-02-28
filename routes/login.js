const express = require('express');
const passport = require('passport');
const LocalStartegy = require('passport-local').Strategy;

const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');

const UserModel = require('../models/user');

passport.use(
    new LocalStartegy(
        async function verify(username, password, cb) {
            try {
                const u = await UserModel.findOne({ username });
                if (!u)
                    return cb(null, false, { message: 'Incorrect username or password.' });
                if (u.password === password)
                    return cb(null, u);
                else
                    return cb(null, false, { message: 'Incorrect username or password.' });
            } catch (err) {
                return cb(err);
            }
        }
    )
);

passport.serializeUser(
    (userObj, done) => {
        done(null, userObj);
    }
);

passport.deserializeUser(
    (userObj, done) => {
        done (null, userObj);
    }
);

const router = express.Router();

router.route('/')
    .get(loginController.getMethod)
    .post(loginController.postMethod);

router.route('/signup')
    .get(signupController.getMethod)
    .post(signupController.postMethod);


module.exports = router;