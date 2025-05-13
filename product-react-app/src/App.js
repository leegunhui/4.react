import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import P_info from './P_info';
import AddProduct from './AddProduct';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
  

  
        <Routes>
  
          <Route path="/" element={<P_info />} />
  
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
