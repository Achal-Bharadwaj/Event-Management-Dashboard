const Attendee = require('../models/attendeeModel');
const Event = require('../models/eventModel');

// Add an Attendee
const addAttendee = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    const attendee = await Attendee.create({ name, email });
    res.status(201).json(attendee);
  } catch (error) {
    res.status(500).json({ message: 'Error adding attendee.', error });
  }
};

// Get All Attendees
const getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find().populate('events');
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendees.', error });
  }
};

// Delete an Attendee
const deleteAttendee = async (req, res) => {
  const { id } = req.params;

  try {
    const attendee = await Attendee.findByIdAndDelete(id);
    if (!attendee) return res.status(404).json({ message: 'Attendee not found.' });

    res.status(200).json({ message: 'Attendee deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting attendee.', error });
  }
};

module.exports = { addAttendee, getAllAttendees, deleteAttendee };
