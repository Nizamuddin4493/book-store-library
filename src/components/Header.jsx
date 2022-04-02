import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header">
        <h1> Book Store Library: </h1>
        <div className="links">
          <h2><Link to="/">Books</Link></h2>
          <h2><Link to="/categories">Categories</Link></h2>
        </div>
      </div>
      <hr className="headerHr" />
    </>
  );
}

export default Header;
