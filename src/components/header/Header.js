import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <ul>
        <li><Link to="/" className="home-link">Ripplers</Link></li>
        <li><Link to="/" className="menu-link">Streams</Link></li>
        <li><Link to="/" className="menu-link">Login</Link></li>
      </ul>
    </header>
  );
}

export default Header;