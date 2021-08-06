import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/Posts'>Posts</Link>
      <Link to='/About'>About</Link>
    </div>
  );
}

export default Menu;
