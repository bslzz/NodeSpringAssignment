import React from 'react';
import './LogIn.css';
import axios from 'axios';

class LogIn extends React.Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
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
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message,
        });
      });
  };

  render() {
    return (
      <div className="main_div">
        <div className="box">
          <h1>Login Form</h1>
          <form>
            <div className="inputBox">
              <input
                type="text"
                name="username"
                autocomplete="off"
                onChange={this.handleChange}
              />
              <label for="username">Username</label>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                autocomplete="off"
                onChange={this.handleChange}
              />
              <label for="password">Password</label>
            </div>
            <input onClick={this.handleSubmit} type="submit" value="login" />
          </form>
          <h1>{this.state.errorMessage}</h1>
        </div>
      </div>
    );
  }
}

export default LogIn;
