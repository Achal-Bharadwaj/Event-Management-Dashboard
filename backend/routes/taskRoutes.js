const express = require('express');
const router = express.Router();
const { createTask, getTasksForEvent, updateTaskStatus } = require('../controllers/taskController');

router.post('/', createTask);
router.get('/:eventId', getTasksForEvent);
router.put('/:id', updateTaskStatus);

module.exports = router;
