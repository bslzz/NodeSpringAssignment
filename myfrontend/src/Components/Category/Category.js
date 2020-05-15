import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Category.css';

class Category extends Component {
  state = {
    name: '',
    id: '',
    startQuiz: false,
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.setState({ startQuiz: true });
    }
  };

  handleChange = (e) => {
    const { value, options, selectedIndex } = e.target;
    this.setState({
      name: options[selectedIndex].innerHTML,
      id: value,
    });
  };

  render() {
    const categories = [
      { id: 27, name: 'Animals' },
      { id: 10, name: 'Books' },
      { id: 11, name: 'Film' },
      { id: 9, name: 'General knowledge' },
      { id: 22, name: 'Geography' },
      { id: 23, name: 'History' },
      { id: 12, name: 'Music' },
      { id: 17, name: 'Science & nature' },
      { id: 21, name: 'Sports' },
      { id: 15, name: 'Video Games' },
    ];

    const redirectObj = {
      pathname: '/quiz',
      state: { id: this.state.id, category: this.state.name },
    };

    const options = categories.map((category) => (
      <option value={category.id} key={category.id}>
        {category.name}
      </option>
    ));

    return this.state.startQuiz ? (
      <Redirect to={redirectObj} />
    ) : (
      <div className="categorylist">
        <h1>Choose any category and get started.</h1>
        <div class="select">
          <select name="format" id="format" onChange={this.handleChange}>
            <option defaultValue>Choose a category...</option>
            {options}
          </select>
        </div>
        <div>
          <button
            className="btn btn-primary start"
            type="submit"
            onClick={this.handleOnSubmit}
          >
            Start quiz
          </button>
        </div>
      </div>
    );
  }
}

export default Category;
