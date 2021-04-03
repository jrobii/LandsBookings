const jwt = require('jsonwebtoken');

module.exports.validateToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if (token) {
        jwt.verify(token, process.env.SECRET_STRING, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            console.log(user)

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}