import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendeeManagement = () => {
  const [attendees, setAttendees] = useState([]);
  const [newAttendee, setNewAttendee] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch attendees from API
    axios.get('http://localhost:5000/api/attendees')
      .then(response => setAttendees(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAttendee({ ...newAttendee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create attendee via API
    axios.post('http://localhost:5000/api/attendees', newAttendee)
      .then(response => setAttendees([...attendees, response.data]))
      .catch(error => console.log(error));
  };

  const handleDelete = (id) => {
    // Delete attendee via API
    axios.delete(`http://localhost:5000/api/attendees/${id}`)
      .then(() => setAttendees(attendees.filter(attendee => attendee._id !== id)))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Attendee Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Attendee Name"
          value={newAttendee.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newAttendee.email}
          onChange={handleChange}
        />
        <button type="submit">Add Attendee</button>
      </form>
      <div>
        {attendees.map((attendee) => (
          <div key={attendee._id} className="attendee-card">
            <h3>{attendee.name}</h3>
            <p>{attendee.email}</p>
            <button onClick={() => handleDelete(attendee._id)}>Delete Attendee</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendeeManagement;
