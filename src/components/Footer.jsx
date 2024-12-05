import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Home, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 h-14 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl text-white font-bold">Dream</span>
                  <img 
                    src="/images/icons/awwings.png" 
                    alt="Angel Icon" 
                    className="w-8 h-8"
                    loading="eager"
                    decoding="async"
                  />
                  <span className="text-2xl text-white font-normal">Landing</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your trusted partner for accommodation and career guidance in the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
            <div className="space-y-4">
              <Link to="/appointments" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                Book Appointment
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-600 hover:text-indigo-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:info@dreamlanding.co.uk" className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail size={18} />
                <span>info@dreamlanding.co.uk</span>
              </a>
              <a href="tel:+441234567890" className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors">
                <Phone size={18} />
                <span>+44 123 456 7890</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={18} />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-8">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright with enhanced styling */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} DreamLanding Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 