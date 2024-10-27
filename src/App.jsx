// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './components/Home'
import TechElevate from './components/TechElevate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Tech-Elevate" element={<TechElevate />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;