import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Assuming your login logic is here, once successful, navigate to the dashboard
    navigate('/Dashboard');
  };

  return (
    <div className='container'>
      <div className='Login'>
        <h1> BUS TICKET BOOKING SYSTEM</h1>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <table>
            <tbody>
              <tr>
                <td>User Name(Login ID)</td>
              </tr>
              <tr>
                <td><input type='text' name='Enter Login Id here' required /></td>
              </tr>
              <tr>
                <td>Password</td>
              </tr>
              <tr>
                <td><input type='password' name='Enter Login password here' required /></td>
              </tr>
              <tr>
                <td><input type='submit' value='Login' /></td>
              </tr>
              <tr>
                <td>Don't have an Account? <Link to='/register'>Sign up</Link></td>
                <tr>
                <td>Don't have an Account? <Link to='/AdminLogin'>Login</Link></td>
                </tr>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Login;
