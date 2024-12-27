const express = require('express');
const { createEvent, getAllEvents, updateEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

router.post('/', createEvent); // Create an Event
router.get('/', getAllEvents); // Get All Events
router.put('/:id', updateEvent); // Update an Event
router.delete('/:id', deleteEvent); // Delete an Event

module.exports = router;
