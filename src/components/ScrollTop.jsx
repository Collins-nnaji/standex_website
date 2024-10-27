// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-primary text-white shadow-lg 
                   hover:bg-[#007B5A] transition-all duration-300 transform hover:scale-110
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}

export default ScrollTop