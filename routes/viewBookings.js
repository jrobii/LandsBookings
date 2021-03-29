const booking = require('../controllers/bookings.controller');
module.exports = function (app) {
    //Route for adding a new booking.
    app.get('/api/admin', booking.list);
}