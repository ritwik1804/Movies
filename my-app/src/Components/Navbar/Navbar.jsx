import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src="your-logo-url" alt="Logo" />
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/tv-shows">TV Shows</a>
        <a href="/movies">Movies</a>
        <a href="/new-popular">New & Popular</a>
        <a href="/my-list">My List</a>
      </div>
      <div className="navbar-profile">
        <img
          className="profile-icon"
          src="your-profile-icon-url"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
