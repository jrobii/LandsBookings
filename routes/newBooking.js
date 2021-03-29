module.exports = function (app, db) {
    //Route for adding a new booking.
    app.post('/api/booking', function(req, res){
        if (!req.body) {
            res.sendStatus(400);
        }
        //Grab the body from the request.
        booking = req.body;
        console.log(booking)
        //Insert the booking information into a new record in the bookings collection.
        const collection = db.collection('bookings');
        collection.insertOne(booking, (err, dbres) => {
            if (err) throw err;
            let num = dbres.insertedCount;
            res.send({num: num, err:null, ok: true})
        });
    });
}