import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/context';
import NavBar from './navigation/navigation';
import Home from './pages/home';
import Posts from './pages/posts';
import Settings from './pages/settings';

function App() {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333', 
    color: theme === 'light' ? '#333' : '#f9f9f9',
    minHeight: '100vh', 
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
  };

  return (
    <div style={style}>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/home" element={<Home />} /> 
          <Route path="/posts" element={<Posts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
