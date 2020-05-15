import React from 'react';
import Category from '../Category/Category';
import './CategoryRoute.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      'Science',
      'Maths',
      'Video Games',
      'Geography',
      'Music',
      'Computer',
      'Entertainment',
      'Sports',
      'Movies',
      'General Knowledge',
    ];
  }

  render() {
    const listitems = this.state;
    return (
      <div className="App">
        <Category items={listitems} />
      </div>
    );
  }
}

export default App;
