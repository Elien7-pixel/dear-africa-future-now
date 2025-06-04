
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-african-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-white">Dear African Child</Link>
            <p className="mt-4 text-sm text-gray-300">
              Empowering African communities through education and advocacy.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-african-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-african-orange transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-african-orange transition-colors">Blog</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-african-orange transition-colors">Services</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-african-orange transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                dear@africanchild.org
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +27 84 961 7485
              </p>
            </div>
            <Link to="/contact" className="text-african-orange hover:underline transition-colors mt-2 block">
              Send us a message
            </Link>
          </div>

          {/* Social links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/theafricanloveaffair?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white hover:text-african-orange" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/dear_africanchild?igsh=dWJuNWo1bnhtdDZ0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-african-orange" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="mailto:dear@africanchild.org" className="text-white hover:text-african-orange" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Subscribe to our newsletter to stay updated.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dear African Child. All rights reserved.</p>
          <p className="mt-2">
            Website by Elton Matanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
