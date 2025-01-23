# Event-Management-Dashboard
The Event Management Dashboard is a full-stack web application designed to manage events, attendees, and associated tasks effectively. Built using React for the frontend and Node.js with MongoDB for the backend, it offers a simple and intuitive interface for event organizers to streamline their operations.

Features
Event Management: Create, update, and delete events with ease.
Attendee Management: Add attendees, assign them to events, and manage their details.
Task Tracker: Organize and track tasks related to events.

Tech Stack
*Frontend*
React

*Backend*
Node.js
Express.js

*Database*
MongoDB

Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher)
MongoDB (running locally or via a remote server)
A code editor (e.g., Visual Studio Code)



API Endpoints
Events
GET /api/events: Retrieve all events.
POST /api/events: Add a new event.
PUT /api/events/:id: Update event details.
DELETE /api/events/:id: Remove an event.
Attendees
GET /api/attendees: Retrieve all attendees.
POST /api/attendees: Add a new attendee.
Tasks
GET /api/tasks: Retrieve all tasks.
POST /api/tasks: Add a new task.
