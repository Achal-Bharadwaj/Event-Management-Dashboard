import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    location: '',
    date: '',
  });

  useEffect(() => {
    // Fetch all events from API
    axios
      .get('http://localhost:5000/api/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.log('Error fetching events:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new event via API
    axios
      .post('http://localhost:5000/api/events', newEvent)
      .then((response) => {
        setEvents([...events, response.data]);
        setNewEvent({ name: '', description: '', location: '', date: '' }); // Reset the form
      })
      .catch((error) => console.log('Error creating event:', error));
  };

  const handleDelete = (id) => {
    // Delete an event via API
    axios
      .delete(`http://localhost:5000/api/events/${id}`)
      .then(() => setEvents(events.filter((event) => event._id !== id)))
      .catch((error) => console.log('Error deleting event:', error));
  };

  return (
    <div>
      <h2>Event Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newEvent.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Event</button>
      </form>

      <div>
        {events.length === 0 ? (
          <p>No events available. Please create one.</p>
        ) : (
          events.map((event) => (
            <div key={event._id} className="event-card">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>Location: {event.location}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <button onClick={() => handleDelete(event._id)}>Delete Event</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventManagement;
