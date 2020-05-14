import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Appwheel.css';
import axios from 'axios';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = [{ selectedItem: null }];
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem = () => {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);

      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 2000);
    }
  };

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
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };

    const spinning = selectedItem !== null ? 'spinning' : '';

    const redirectObj = {
      pathname: '/quiz',
      choose: {
        id: this.state.id,
        item: this.state.name,
      },
    };

    return selectedItem ? (
      <Redirect to={redirectObj} />
    ) : (
      <div className="mainspinner">
        <div className="wheel-container">
          <div onClick={this.selectItem} className="spin">
            <div className="inner_spin"></div>
          </div>
          <div className={`wheel ${spinning}`} style={wheelVars}>
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ '--item-nb': index }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <Link
          className="nav-link logout"
          to="/logout"
          onClick={this.clickHandler}
        >
          LogOut
        </Link>
      </div>
    );
  }
}
