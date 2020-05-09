import React from 'react';
import axios from 'axios';
import './LandingPage.css';
import { Container } from 'react-bootstrap';

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

        this.props.history.push('/');
        return false;
      })
      .catch((error) => {
        console.log({ msg: 'You have logged out with an error:' + error });
      });
  };
  render() {
    return (
      <Container>
        <div className="landingpage">
          <h1>Welcome to the landing page</h1>

          <a className="logout" onClick={this.clickHandler} href="/logout">
            Log out
          </a>
        </div>
      </Container>
    );
  }
}

export default LandingPage;
