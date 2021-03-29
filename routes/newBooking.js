const booking = require('../controllers/bookings.controller');

module.exports = function (app) {
    //Route for adding a new booking.
    app.post('/api/booking', booking.create);
}