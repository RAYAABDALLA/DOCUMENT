import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageRoutes.css';

function ManageRoutes() {
  const [routes, setRoutes] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    axios.get('http://localhost:8080/api/routes')
      .then(response => setRoutes(response.data))
      .catch(error => console.error('Error fetching routes:', error));
  };

  const handleAddRoute = (e) => {
    e.preventDefault();
    const newRoute = { origin, destination, distance };
    axios.post('http://localhost:8080/api/routes', newRoute)
      .then(response => {
        setRoutes([...routes, response.data]);
        setOrigin('');
        setDestination('');
        setDistance('');
      })
      .catch(error => console.error('Error adding route:', error));
  };

  const handleDeleteRoute = (id) => {
    axios.delete(`http://localhost:8080/api/routes/${id}`)
      .then(() => {
        setRoutes(routes.filter(route => route.id !== id));
      })
      .catch(error => console.error('Error deleting route:', error));
  };

  return (
    <div className="manage-routes">
      <h2>Manage Routes</h2>
      <form onSubmit={handleAddRoute}>
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
        <button type="submit">Add Route</button>
      </form>
      <table className="routes-table">
        <thead>
          <tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>Distance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map(route => (
            <tr key={route.id}>
              <td>{route.origin}</td>
              <td>{route.destination}</td>
              <td>{route.distance}</td>
              <td>
                <button className="action-btn" onClick={() => handleDeleteRoute(route.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageRoutes;
