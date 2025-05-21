
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <span className="font-bold text-2xl text-african-brown">Dear African Child</span>
          </NavLink>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-african-orange ${
                    isActive ? 'text-african-orange' : 'text-african-dark'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="bg-african-green hover:bg-african-green/90 text-white">
              Subscribe
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block font-medium py-2 transition-colors hover:text-african-orange ${
                        isActive ? 'text-african-orange' : 'text-african-dark'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <Button className="w-full bg-african-green hover:bg-african-green/90 text-white">
                  Subscribe
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
