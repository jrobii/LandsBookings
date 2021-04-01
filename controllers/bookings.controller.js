const db = require('../models');
const Bookings = db.Bookings
const fetch = require('node-fetch');

module.exports.create = (req, res) => {
  console.log(req.body);
    if (!req.body.firstName) return res.sendStatus(400);

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    
    fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${secret}&response=${req.body.recaptchaResponse}`
    }).then((res) => res.json())
    .then(data => {
        if (data.success === true) {

            Bookings.create(req.body)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                return res.status(500).json({
                message: err.message || "An error occurred whilst attempting to create a booking."
                });
            });
        } else {
          return res.status(400).json({
            message: "Invalid Captcha"
          });
        }
    }); 
}

module.exports.list= (req, res) => {
    console.log(req.body.selectedDate)
    Bookings.findAll({
        where: {
            date: req.body.selectedDate
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occurred whilst trying to query the database."
        });
    });
}