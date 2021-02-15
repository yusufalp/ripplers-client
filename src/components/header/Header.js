import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import GoogleAuth from '../auth/GoogleAuth';

const Header = () => {
  return (
    <header className="App-header">
      <div className="nav-group">
        <Link to="/" className="home-link">Ripplers</Link>
        <Link to="/" className="menu-link">Streams</Link>
        <GoogleAuth className="menu-link" />
      </div>
    </header>
  );
}

export default Header;