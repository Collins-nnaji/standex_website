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

// RouteTracker Component to handle tracking on route changes
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null; // This component doesn't render anything
};

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        {/* Include RouteTracker to track route changes */}
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tech-Elevate" element={<TechElevate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
