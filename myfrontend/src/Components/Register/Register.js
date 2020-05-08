import React from 'react';
import '../LogIn/LogIn.css';
import axios from 'axios';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirm_password } = this.state;
    axios({
      url: '/register',
      method: 'POST',
      data: {
        username,
        email,
        password,
        confirm_password,
      },
    })
      .then((response) => {
        if (password !== confirm_password) {
          alert('Passwords not matched!');
          return;
        }
        if (!username || !email || !password || !confirm_password) {
          alert('All fields must be filled!');
          return;
        } else {
          this.props.history.push('/login');
        }
      })
      .catch((error) => {
        console.log('Error occured: ' + error);
      });
  };

  render() {
    return (
      <div className="main_div">
        <div className="box">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
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
                type="email"
                name="email"
                autocomplete="off"
                onChange={this.handleChange}
              />
              <label for="email">Email</label>
            </div>
            <div className="inputBox">
              <input
                onChange={this.handleChange}
                type="password"
                name="password"
                autocomplete="off"
              />
              <label for="password">Password</label>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="confirm_password"
                autocomplete="off"
                onChange={this.handleChange}
              />
              <label for="confirm_password">Confirm Password</label>
            </div>
            <input type="submit" value="register" />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
