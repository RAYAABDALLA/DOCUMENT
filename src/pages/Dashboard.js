import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>BUS TICKET BOOKING SYSTEM</h1>
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-content">
        <ul>
          <li>
            <Link to="/book-ticket">Book Ticket</Link>
          </li>
          <li>
            <Link to="/ViewBooking">View Bookings</Link>
          </li>
          <li Link></li>
        </ul>
      </div>
      <div className="dashboard-link">
        <Link to="/">Log Out</Link>
      </div>
    </div>
  );
};

export default Dashboard;
