const db = require('../models');
const Bookings = db.Bookings
const fetch = require('node-fetch');


module.exports = {
    async create(req, res) {
        if (!req.body) {
            res.sendStatus(400)
            return;
        }

        const booking = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNum: req.body.phoneNum,
            date: req.body.date,
            time: req.body.time,
            persons: req.body.persons,
            requests: req.body.requests
        }

        const secret = process.env.RECAPTCHA_SECRET_KEY;
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `secret=${secret}&response=${req.body.recaptchaResponse}`
        }).then((res) => res.json())
        .then(data => {
            if (data.success === true) {

                Bookings.create(booking)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                    message: err.message || "An error occurred whilst attempting to create a booking."
                    });
                });
            }
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