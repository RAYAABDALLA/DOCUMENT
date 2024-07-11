import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageBuses.css';

function ManageBuses() {
  const [buses, setBuses] = useState([]);
  const [busName, setBusName] = useState('');
  const [type, setType] = useState('');
  const [capacity, setCapacity] = useState('');

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = () => {
    axios.get('http://localhost:8080/api/buses')
      .then(response => setBuses(response.data))
      .catch(error => console.error('Error fetching buses:', error));
  };

  const handleAddBus = (e) => {
    e.preventDefault();
    const newBus = { busName, type, capacity };
    axios.post('http://localhost:8080/api/buses', newBus)
      .then(response => {
        setBuses([...buses, response.data]);
        setBusName('');
        setType('');
        setCapacity('');
      })
      .catch(error => console.error('Error adding bus:', error));
  };

  const handleDeleteBus = (id) => {
    axios.delete(`http://localhost:8080/api/buses/${id}`)
      .then(() => {
        setBuses(buses.filter(bus => bus.busId !== id));
      })
      .catch(error => console.error('Error deleting bus:', error));
  };

  return (
    <div className="manage-buses">
      <h2>Manage Buses</h2>
      <form onSubmit={handleAddBus}>
        <input
          type="text"
          placeholder="Bus Name"
          value={busName}
          onChange={(e) => setBusName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
        <button type="submit">Add Bus</button>
      </form>
      <table className="buses-table">
        <thead>
          <tr>
            <th>Bus Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buses.map(bus => (
            <tr key={bus.busId}>
              <td>{bus.busName}</td>
              <td>{bus.type}</td>
              <td>{bus.capacity}</td>
              <td>
                <button className="action-btn" onClick={() => handleDeleteBus(bus.busId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBuses;
