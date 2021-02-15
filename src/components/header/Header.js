import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import GoogleAuth from '../auth/GoogleAuth';

const Header = () => {
  return (
    <header className="App-header">
      <ul>
        <li className="home-link"><Link to="/">Ripplers</Link></li>
        <li className="menu-link"><Link to="/">Streams</Link></li>
        <li className="menu-link"><GoogleAuth /></li>
      </ul>
    </header>
  );
}

export default Header;