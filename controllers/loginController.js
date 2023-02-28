module.exports.getMethod = (req, res) => {
    res.render('login', {title: 'Login', message: ''});
};

module.exports.postMethod = (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            
        }
    })(req, res, next);
    res.json({message: 'hello'});
};