import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
function Registration() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here.
  };

  return (
    <div className="container">
      <div className="Registration">
        <h1>BUS TICKET BOOKING SYSTEM</h1>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td><input type="text" name="fullName" required /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type="email" name="email" required /></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type="password" name="password" required /></td>
              </tr>
              <tr>
                <td>Confirm Password</td>
                <td><input type="password" name="confirmPassword" required /></td>
              </tr>
              <tr>
                <td colSpan="2"><input type="submit" value="Register" /></td>
              </tr>
              <tr>
                <td colSpan="2">Already have an account? <Link to="/">Login</Link></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Registration;
