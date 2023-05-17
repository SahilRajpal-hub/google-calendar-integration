const express = require("express");
const router = express.Router();
const calendarController = require("../Controllers/calendarController");

router.get('/init',calendarController.initCalendar);
router.get('/redirect',calendarController.calendarEvents);

module.exports = router;