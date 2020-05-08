import React from 'react';
import './LogIn.css';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

class LogIn extends React.Component {
  // the states that are required to log in

  state = {
    username: '',
    password: '',

    //error message kept empty so that it can be set to display error messages

    errorMessage: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    axios({
      url: '/login',
      method: 'POST',
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        this.props.history.push('/myquiz');
        const isAuthenticated = response.data.isAuthenticated;
        window.localStorage.setItem('isAuthenticated', isAuthenticated);
      })
      .catch((error) => {
        this.setState({
          //This shows the message from backend (server message)

          errorMessage: error.response.data.message,
        });
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="main_div">
        <div className="box">
          <h1>Login</h1>
          <form>
            <div className="inputBox">
              <input
                type="username"
                name="username"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label for="username">Username</label>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label for="password">Password</label>
            </div>
            <input onClick={this.handleSubmit} type="submit" value="login" />
          </form>
          {/* <p style={{ color: 'red', marginTop: '10px' }}>
            {this.state.errorMessage}
          </p> */}
        </div>
      </div>
    );
  }
}

export default LogIn;
