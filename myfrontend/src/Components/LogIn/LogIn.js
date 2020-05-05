import React from 'react';
import './LogIn.css';

const LogIn = () => {
  return (
    <div className="main_div">
      <div className="box">
        <h1>Login Form</h1>
        <form action="/login/send" method="POST">
          <div className="inputBox">
            <input type="text" name="username" autocomplete="off" required />
            <label for="username">Username</label>
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
          <input type="submit" value="login" />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
