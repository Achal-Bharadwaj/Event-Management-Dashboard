const Event = require('../models/eventModel');

// Create an Event
const createEvent = async (req, res) => {
  const { name, description, location, date } = req.body;

  if (!name || !description || !location || !date) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const event = await Event.create({ name, description, location, date });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event.', error });
  }
};

// Get All Events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('attendees');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events.', error });
  }
};

// Update an Event
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, description, location, date } = req.body;

  try {
    const event = await Event.findByIdAndUpdate(
      id,
      { name, description, location, date },
      { new: true }
    );
    if (!event) return res.status(404).json({ message: 'Event not found.' });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event.', error });
  }
};

// Delete an Event
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) return res.status(404).json({ message: 'Event not found.' });

    res.status(200).json({ message: 'Event deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event.', error });
  }
};

module.exports = { createEvent, getAllEvents, updateEvent, deleteEvent };
