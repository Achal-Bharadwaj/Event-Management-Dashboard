const express = require('express');
const { addAttendee, getAllAttendees, deleteAttendee } = require('../controllers/attendeeController');

const router = express.Router();

router.post('/', addAttendee); // Add an Attendee
router.get('/', getAllAttendees); // Get All Attendees
router.delete('/:id', deleteAttendee); // Delete an Attendee

module.exports = router;
