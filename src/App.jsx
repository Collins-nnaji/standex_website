// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Home from './components/Home';
import TechElevate from './components/TechElevate';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Google Analytics tracking function
const trackPageView = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-LLNKZEJCBP', {
      page_path: url,
    });
  }
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tech-Elevate" element={<TechElevate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
