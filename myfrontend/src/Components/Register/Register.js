import React from 'react';
import '../LogIn/LogIn.css';

const Register = () => {
  return (
    <div className="main_div">
      <div className="box">
        <h1>Register</h1>
        <form action="/register/send" method="POST">
          <div className="inputBox">
            <input type="text" name="username" autocomplete="off" required />
            <label for="username">Username</label>
          </div>
          <div className="inputBox">
            <input type="email" name="email" autocomplete="off" required />
            <label for="email">Email</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              autocomplete="off"
              required
            />
            <label for="password">Password</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="confirm-password"
              autocomplete="off"
              required
            />
            <label for="confirm-password">Confirm Password</label>
          </div>
          <input type="submit" value="register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
