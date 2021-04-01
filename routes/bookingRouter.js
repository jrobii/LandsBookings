const express = require("express");
const router = express.Router();

const booking = require('../controllers/bookings.controller');
const user = require('../controllers/user.controller');

router.post('/booking', booking.create);
router.post('/admin', booking.list);
router.post('/login', user.find);

module.exports = router;