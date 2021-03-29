const db = require('../models');
const Bookings = db.Bookings

module.exports = {
    create(req, res) {
        if (!req.body) {
            res.sendStatus(400)
            return;
        }
        console.log(req.body)

        const booking = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNum: req.body.phoneNum,
            date: req.body.date,
            time: req.body.time,
            persons: req.body.persons,
            requests: req.body.requests
        }

        Bookings.create(booking)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred whilst attempting to create a booking."
            });
        });
    },

    list(req, res) {
        Bookings.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred whilst trying to query the database."
            });
        });
    }


}