module.exports = function (app, db) {
    //Route for checking user credentials
    app.post('/api/login', function(req, res){
        //Grab the username and password from the request.
        username = req.body.username
        password = req.body.password
        //Try to find if there is a user that has that username and password.
        const collection = db.collection('users');
        collection.findOne({username: username, password:password}, (err, user) => {
            if (err) throw err;
            console.log(user)
            //If successful respond with the user object.
            if (user) {
                user.ok = true;
                res.send(user)
            } else {
                res.send({ok: false})
            }
        })
    });
}