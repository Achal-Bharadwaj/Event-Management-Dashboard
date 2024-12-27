const Task = require('../models/taskModel');

// Create a Task
const createTask = async (req, res) => {
  const { name, deadline, status, assignedAttendee, event } = req.body;

  if (!name || !deadline || !event) {
    return res.status(400).json({ message: 'Name, deadline, and event are required.' });
  }

  try {
    const task = await Task.create({ name, deadline, status, assignedAttendee, event });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task.', error });
  }
};

// Get Tasks for an Event
const getTasksForEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const tasks = await Task.find({ event: eventId }).populate('assignedAttendee');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks.', error });
  }
};

// Update Task Status
const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { status }, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found.' });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task.', error });
  }
};

module.exports = { createTask, getTasksForEvent, updateTaskStatus };
