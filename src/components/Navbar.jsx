import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 h-14 px-4 rounded-xl flex items-center justify-center transform will-change-transform ${
              isScrolled ? 'shadow-md' : 'shadow-lg shadow-blue-500/30'
            }`}>
              <div className="flex items-center space-x-2">
                <img 
                  src="/images/icons/awwings.png"
                  alt="Angel Icon" 
                  className="w-10 h-10 mr-2"
                  loading="eager"
                  decoding="async"
                />
                <span className="text-3xl text-white">
                  <span className="font-bold">Dream</span><span className="font-normal italic">Livin</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Absolute positioning */}
          <div className="hidden md:flex items-center space-x-8 absolute right-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                } ${location.pathname === link.path ? 'font-semibold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium py-2 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}