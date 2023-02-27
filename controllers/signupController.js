module.exports.getMethod = (req, res) => {
    res.render('signup', { title: 'Sign-Up' })
};

module.exports.postMethod = (req, res) => {
    console.log(req.body);
    res.json({message: 'hello'});
};