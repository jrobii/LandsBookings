const express = require("express");
const router = express.Router();

const booking = require('../controllers/bookings.controller');

router.post('/booking', booking.create);
router.post('/admin', booking.list);

module.exports = router;