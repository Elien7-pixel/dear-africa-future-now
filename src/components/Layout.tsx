
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  useEffect(() => {
    // Animation observer for fade-in elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-element').forEach((element) => {
      observer.observe(element);
    });

    // Add observer for staggered elements
    document.querySelectorAll('.staggered-item').forEach((element, index) => {
      observer.observe(element);
    });

    return () => {
      // Clean up observer
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
