import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: '',
    deadline: '',
    status: 'Pending',
    assignedAttendee: '',
    event: '',
  });

  const [events, setEvents] = useState([]);
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    // Fetch events and attendees from API
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.log(error));

    axios.get('http://localhost:5000/api/attendees')
      .then(response => setAttendees(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch tasks for the selected event
    if (newTask.event) {
      axios.get(`http://localhost:5000/api/tasks/${newTask.event}`)
        .then(response => setTasks(response.data))
        .catch(error => console.log(error));
    }
  }, [newTask.event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create task via API
    axios.post('http://localhost:5000/api/tasks', newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.log(error));
  };

  const handleStatusChange = (taskId, status) => {
    // Update task status via API
    axios.put(`http://localhost:5000/api/tasks/${taskId}`, { status })
      .then(response => {
        setTasks(tasks.map(task => task._id === taskId ? response.data : task));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          value={newTask.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="deadline"
          value={newTask.deadline}
          onChange={handleChange}
        />
        <select
          name="assignedAttendee"
          value={newTask.assignedAttendee}
          onChange={handleChange}
        >
          <option value="">Select Attendee</option>
          {attendees.map((attendee) => (
            <option key={attendee._id} value={attendee._id}>
              {attendee.name}
            </option>
          ))}
        </select>
        <select
          name="event"
          value={newTask.event}
          onChange={handleChange}
        >
          <option value="">Select Event</option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
      <div>
        {tasks.map((task) => (
          <div key={task._id} className="task-card">
            <h3>{task.name}</h3>
            <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
            <p>Status: 
              <button
                onClick={() => handleStatusChange(task._id, task.status === 'Pending' ? 'Completed' : 'Pending')}
              >
                {task.status}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTracker;
