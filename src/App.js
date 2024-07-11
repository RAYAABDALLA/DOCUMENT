import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import BookingTickets from './components/BookingTickets';
import ViewBooking from './components/ViewBooking';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ManageBuses from './components/AdminDashboard/ManageBuses';
import ManageRoutes from './components/AdminDashboard/ManageRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-ticket" element={<BookingTickets />} />
        <Route path="/viewBooking" element={<ViewBooking />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/manageBuses" element={<ManageBuses />} />
        <Route path="/manageRoutes" element={<ManageRoutes />} />
      
      </Routes>
    </Router>
  );
}

export default App;
