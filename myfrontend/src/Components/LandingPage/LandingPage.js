import React from 'react';
import axios from 'axios';
import './LandingPage.css';

class LandingPage extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    axios({
      url: '/logout',
      method: 'POST',
    })
      .then((response) => {
        const isAuthenticated = response.data.isAuthenticated;
        window.localStorage.removeItem('isAuthenticated', isAuthenticated);
        this.props.history.push('/login');
      })
      .catch((error) => {
        console.log({ msg: 'You have logged out with an error:' + error });
      });
  };
  render() {
    return (
      <div className="landingpage">
        <h1>Welcome to the landing page</h1>
        <p className="loggedin-user">Logged in as: {}</p>
        <a className="logout" onClick={this.clickHandler} href="/logout">
          Log out
        </a>
      </div>
    );
  }
}

export default LandingPage;
