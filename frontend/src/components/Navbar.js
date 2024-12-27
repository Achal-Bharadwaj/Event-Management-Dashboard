import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-item">Event Management</Link>
      <Link to="/attendees" className="navbar-item">Attendee Management</Link>
      <Link to="/tasks" className="navbar-item">Task Tracker</Link>
    </nav>
  );
};

export default Navbar;
