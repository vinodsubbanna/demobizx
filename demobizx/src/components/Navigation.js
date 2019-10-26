import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <ul className="nav nav-bar">
      <li><Link to="/">Home</Link></li>
    </ul>
  )
}

export default Navigation;