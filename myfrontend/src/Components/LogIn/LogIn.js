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
        if (!username || !password) {
          alert('Username and password required');
          return;
        } else {
          this.props.history.push('/');
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
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
          <p style={{ color: 'red', marginTop: '10px' }}>
            {' '}
            {this.state.errorMessage}
          </p>
        </div>
      </div>
    );
  }
}

export default LogIn;
