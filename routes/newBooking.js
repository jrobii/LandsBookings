module.exports = function (app, db) {
    //Route for checking user credentials
    app.post('/api/booking', function(req, res){
        if (!req.body) {
            res.sendStatus(400);
        }
        //Grab the username and password from the request.
        booking = req.body;
        console.log("Got a new booking");
        res.send({ok: true})
        //Try to find if there is a user that has that username and password.
        //const collection = db.collection('bookings');
        //collection.insertOne(booking, (err, dbres) => {
            //if (err) throw err;
            //let num = dbres.insertedCount;
            //res.send({num: num, err:null, ok: true})
        //});
    });
}