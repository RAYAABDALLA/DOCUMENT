import React, { useState, useEffect } from 'react';
import './ManageBuses.css';

function ManageBuses() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Fetch bus data from your API
    fetch('/api/buses')
      .then(response => response.json())
      .then(data => setBuses(data))
      .catch(error => console.error('Error fetching buses:', error));
  }, []);

  return (
    <div className="manage-buses">
      <h2>Manage Buses</h2>
      <table className="buses-table">
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Bus Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buses.map(bus => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.name}</td>
              <td>{bus.type}</td>
              <td>{bus.capacity}</td>
              <td>
                <button className="action-btn">Edit</button>
                <button className="action-btn delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBuses;
