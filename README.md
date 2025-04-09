# Event-Management-Dashboard
This full-stack web application, designed for event management, allows users to efficiently manage events, attendees, and tasks. It is built using React.js for the front end and Node.js with Express.js for the backend, with MongoDB as the database.

---

## 📌 Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
  - [Event Dashboard](#event-dashboard)
  - [Attendee Dashboard](#attendee-dashboard)
  - [Task Dashboard](#task-dashboard)
- [Project Highlights](#project-highlights)
- [Requirements Met](#requirements-met)
- [Getting Started](#getting-started)
- [Project Summary](#project-summary)
- [Conclusion](#conclusion)

---

## ✅Features

- Create, update, and delete events with details
- Add and manage attendees
- Assign tasks to attendees for specific events
- Track task progress (Pending / Completed)
- Form validation for secure input
- Fully integrated frontend and backend

---

## 🗂Project Structure
```
event-management-dashboard/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── index.js
├── README.md
└── package.json
```

---

## ⚙Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Others**: dotenv, CORS

---

## 📋How It Works

### 📅Event Dashboard
- Users can add a new event by filling in the following:
  - **Event Name**
  - **Description**
  - **Location**
  - **Date** (dd-mm-yyyy)
- All events are listed with options to **edit** or **delete**.

### 👥Attendee Dashboard
- Add new attendees by entering name and contact.
- Attendees can be viewed or removed.
- Each attendee can be assigned to an event or task.

### ✅Task Dashboard
- Tasks are created using event and attendee info.
- Each task has:
  - **Task Name**
  - **Deadline**
  - **Status** (Pending / Completed)
- Tasks can be marked as **completed** once done.

---

## 🚀Project Highlights

- Clean and responsive user interface
- All data operations are synced in real-time
- User input is validated (no empty or invalid data)
- Data persists safely even after page refresh or temporary issues

---

## 📊Requirements Met

✅ CRUD operations for managing events  
✅ Add/remove attendees and assign to tasks  
✅ Create tasks with deadline, status, and assigned user  
✅ Track and update task status  
✅ Frontend and backend fully integrated  
✅ Basic form validation and UI feedback

---

## 🛠Getting Started

> Ensure you have Node.js and MongoDB installed locally.

1. Clone the repository:
   ```bash
   git clone https://github.com/Achal-Bharadwaj/Event-Management-Dashboard.git
   cd Event-Management-Dashboard

2. Start the backend:
   ```bash
    cd backend
    npm install
    npm start
3. Start the frontend:
   ```bash
    cd frontend
    npm install
    npm start

## 📝Project Summary
This project was built to streamline event management for organizations by providing a full-stack solution. The dashboard allows creating events, adding attendees, and assigning tasks—all while keeping track of progress and ensuring data integrity.

## 🎉Conclusion
The Event Management Dashboard simplifies event planning by allowing users to efficiently manage events, attendees, and tasks in one place. With a clean UI, real-time data handling, and a modular structure, this project meets all core requirements and is ready for further enhancements like authentication and live updates.

🚀 **Developed by Achal S Bharadwaj**\
🔗 **GitHub:** [https://github.com/Achal-Bharadwaj](https://github.com/Achal-Bharadwaj)\
