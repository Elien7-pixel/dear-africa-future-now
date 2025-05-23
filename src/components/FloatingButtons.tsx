
import React from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Contact Button - always visible */}
      <Link
        to="/contact"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-110"
        aria-label="Contact Us"
      >
        <Phone size={20} />
      </Link>
      
      {/* Scroll to Top Button - always visible */}
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default FloatingButtons;
