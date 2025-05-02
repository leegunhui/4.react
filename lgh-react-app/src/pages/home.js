import React, { useContext } from 'react';
import { ThemeContext } from '../context/context';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Welcome to My React Dashboard</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Home;
