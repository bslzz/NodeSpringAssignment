import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Appwheel.css';

export default function Wheel({ items, ...props }) {
  /**
   * variables
   */
  const history = useHistory();

  /**
   * state
   */
  const [selectedItem, setSelectedItem] = useState(null);
  const [spinning, setSpinning] = useState(false);

  /**
   * function
   */
  const selectItem = () => {
    const index = Math.floor(Math.random() * items.length);
    setSelectedItem(items[index].id);

    setTimeout(() => {
      history.push(`/quiz/${items[index].id}`);
    }, 7000);
  };

  const wheelVars = () => {
    return {
      '--nb-item': items.length,
      '--selected-item': selectedItem
        ? items.findIndex((item) => item.id === selectedItem)
        : null,
    };
  };

  /**
   * effect
   */
  useEffect(() => {
    if (spinning) {
      setTimeout(() => {
        setSpinning(false);
      }, 350);
    }
  });

  return (
    <>
      <Link to="/" className="nav-link logout-btn">
        Logout
      </Link>
      <div className="mainspinner">
        <div className="wheel-container">
          <div
            onClick={() => setSpinning(true) | selectItem()}
            className="spin"
          >
            <div className="inner_spin"></div>
          </div>
          <div
            className={`wheel ${spinning ? 'spinning' : 'not-spinning'}`}
            style={wheelVars()}
          >
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ '--item-nb': index }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
