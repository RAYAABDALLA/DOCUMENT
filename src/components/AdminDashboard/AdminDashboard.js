import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Header />
      <nav className="admin-nav">
        <ul>
          <li><Link to="/ManageBuses">Manage Buses</Link></li>
          <li><Link to="/ManageRoutes">ManageRoutes</Link></li>
          <li><Link to="/ViewBooking">ViewBookings</Link></li>
        </ul>
      </nav>
      <div className="admin-content">
        
      </div>
    </div>
  );
}

export default AdminDashboard;
