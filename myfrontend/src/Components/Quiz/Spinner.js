import React from 'react';
import './Question.css';

const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center spinner">
        <div className="spinner-border text-white" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
