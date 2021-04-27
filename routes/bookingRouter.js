const express = require("express");
const router = express.Router();

const booking = require('../controllers/bookings.controller');
const validator = require('../middleware/verifyToken');
const user = require('../controllers/user.controller');

router.post('/booking', booking.create);
router.post('/admin', validator.validateToken, booking.list);
router.delete('/admin', validator.validateToken, booking.remove);
router.post('/login', user.find);
router.get('/checkAuth', user.checkAuth);

module.exports = router;