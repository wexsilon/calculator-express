module.exports.getMethod = (req, res) => {
    res.render('login', {title: 'Login'});
};

module.exports.postMethod = (req, res) => {
    console.log(req.body);
    res.json({message: 'hello'});
};