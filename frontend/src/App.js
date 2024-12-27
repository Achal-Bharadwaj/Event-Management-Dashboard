import React, { useState, useEffect } from 'react';
import './App.css';

// Example components for each page
import EventManagement from './components/EventManagement';
import AttendeeManagement from './components/AttendeeManagement';
import TaskTracker from './components/TaskTracker';

function App() {
  const [page, setPage] = useState('events'); // Default page is event management

  // Function to switch between pages
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Management Dashboard</h1>
        <nav>
          <button onClick={() => handlePageChange('events')}>Events</button>
          <button onClick={() => handlePageChange('attendees')}>Attendees</button>
          <button onClick={() => handlePageChange('tasks')}>Tasks</button>
        </nav>
      </header>

      <main>
        {page === 'events' && <EventManagement />}
        {page === 'attendees' && <AttendeeManagement />}
        {page === 'tasks' && <TaskTracker />}
      </main>
    </div>
  );
}

export default App;