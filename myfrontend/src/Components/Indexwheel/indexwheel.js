import React from 'react';
import Wheel from '../wheel/Appwheel';
import './indexwheel.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      'General Knowledge',
      'Science',
      'Maths',
      'Video Games',
      'Geography',
      'Music',
      'Computer',
      'Entertainment',
      'Sports',
      'Movies',
    ];
  }

  render() {
    const listitems = this.state;
    return (
      <div className="App">
        <Wheel items={listitems} />
      </div>
    );
  }
}

export default App;
