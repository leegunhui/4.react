import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/context';

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`navbar ${theme}`}>
      <Link to="/home">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default NavBar;
 