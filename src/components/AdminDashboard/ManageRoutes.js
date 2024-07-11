import React, { useState, useEffect } from 'react';
import './ManageRoutes.css';

function ManageRoutes() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Fetch route data from your API
    fetch('/api/routes')
      .then(response => response.json())
      .then(data => setRoutes(data))
      .catch(error => console.error('Error fetching routes:', error));
  }, []);

  return (
    <div className="manage-routes">
      <h2>Manage Routes</h2>
      <table className="routes-table">
        <thead>
          <tr>
            <th>Route ID</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.origin}</td>
              <td>{route.destination}</td>
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

export default ManageRoutes;
