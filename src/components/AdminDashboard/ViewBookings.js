import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '/cviewbooking.css';

function ViewBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios.get('http://localhost:8080/api/BookingTtickets')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/BookingTtickets/${id}`)
      .then(() => fetchBookings())
      .catch(error => console.error('Error deleting booking:', error));
  };

  return (
    <div>
      <h2>View Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Passenger Name</th>
            <th>Bus Route</th>
            <th>Seat Number</th>
            <th>Booking Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.bookingId}>
              <td>{booking.passengerName}</td>
              <td>{booking.busRoute}</td>
              <td>{booking.seatNumber}</td>
              <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(booking.bookingId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBooking;
