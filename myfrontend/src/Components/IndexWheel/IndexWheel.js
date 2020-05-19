import React from 'react';
import Wheel from '../wheel/Appwheel';
import './Indexwheel.css';

export const QuizCategories = [
  { id: 9, name: 'General knowledge' },
  { id: 17, name: 'Science & nature' },
  { id: 15, name: 'Video Games' },
  { id: 22, name: 'Geography' },
  { id: 23, name: 'History' },
  { id: 27, name: 'Animals' },
  { id: 21, name: 'Sports' },
  { id: 12, name: 'Music' },
  { id: 10, name: 'Books' },
  { id: 11, name: 'Film' },
];

export default function App() {
  return (
    <div className="App">
      <Wheel items={QuizCategories} />
    </div>
  );
}
