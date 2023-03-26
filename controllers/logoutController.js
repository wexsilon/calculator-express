module.exports.getMethod = (req, res) => {
    req.logOut((err) => {
    });
    res.redirect("/user/login");
};

module.exports.postMethod = (req, res) => {
    req.logOut((err) => {

    });
    res.redirect("/user/login");
};