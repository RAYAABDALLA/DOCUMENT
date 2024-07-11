import React, { useState } from 'react';
import axios from 'axios';
import './book-ticket.css';

function BookingTickets() {
  const [passengerName, setPassengerName] = useState('');
  const [busRoute, setBusRoute] = useState('');
  const [seatNumber, setSeatNumber] = useState(1);
  const [bookingDate, setBookingDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { passengerName, busRoute, seatNumber, bookingDate };

    axios.post('http://localhost:8080/api/BookingTtickets', newBooking)
      .then(response => {
        console.log('Booking successful:', response.data);
        alert('Booking successful');
        // Reset form fields or handle success message
        setPassengerName('');
        setBusRoute('');
        setSeatNumber(1);
        setBookingDate('');
      })
      .catch(error => console.error('Error creating booking:', error));
  };

  return (
    <div>
      <h2>Booking Tickets</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Passenger Name:
          <input type="text" value={passengerName} onChange={e => setPassengerName(e.target.value)} required />
        </label>
        <label>
          Bus Route:
          <input type="text" value={busRoute} onChange={e => setBusRoute(e.target.value)} required />
        </label>
        <label>
          Seat Number:
          <input type="number" value={seatNumber} onChange={e => setSeatNumber(parseInt(e.target.value))} required />
        </label>
        <label>
          Booking Date:
          <input type="date" value={bookingDate} onChange={e => setBookingDate(e.target.value)} required />
        </label>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default BookingTickets;
