import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        Copyright © {currentYear}. MasterMind. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
