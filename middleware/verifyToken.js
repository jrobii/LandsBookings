const jwt = require('jsonwebtoken');

module.exports.validateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.SECRET_STRING, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            
            //req.user = user;
            console.log(user)
            next();
        });
    } else {
         return res.sendStatus(401);
    }
}