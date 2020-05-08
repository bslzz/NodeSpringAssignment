import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class LandingPage extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    axios({
      url: '/logout',
      method: 'POST',
    })
      .then((response, next) => {
        const isAuthenticated = response.data.isAuthenticated;
        window.localStorage.removeItem('isAuthenticated', isAuthenticated);
        this.props.history.push('/login');
      })
      .catch((error) => {
        console.log({ msg: 'ThankGod' + error });
        return;
      });
  };
  render() {
    return (
      <div>
        <h1>Welcome to the landing page</h1>
        <p>Logged in as: {}</p>
        <a onClick={this.clickHandler} href="/logout">
          Log out
        </a>
      </div>
    );
  }
}

export default LandingPage;
