import React from 'react';
import axios from 'axios';
import './LandingPage.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    const result = window.confirm('Are you sure you want to log out?');

    result
      ? axios({
          url: '/logout',
          method: 'POST',
        })
          .then((response) => {
            const isAuthenticated = response.data.isAuthenticated;
            window.localStorage.removeItem('isAuthenticated', isAuthenticated);

            this.props.history.push('/');
            return false;
          })
          .catch((error) => {
            console.log({
              msg: 'You have logged out with an error:' + error,
            });
          })
      : console.log('Not logged out');
  };
  render() {
    return (
      <Container>
        <div className="landingpage">
          <h1>Welcome to the landing page</h1>

          <Link
            className="nav-link logout"
            to="/logout"
            onClick={this.clickHandler}
          >
            LogOut
          </Link>
        </div>
      </Container>
    );
  }
}

export default LandingPage;
