import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img 
                  src="/logo ssi Jun 29, 2025, 02_57_10 PM.png" 
                  alt="S.S. International Logo"
                  className="h-20 w-20 object-contain bg-white rounded-lg p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">S.S. International</h3>
                <p className="text-sm text-gray-400">Where Accuracy Meets Reliability</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of material testing equipment with over 21 years of experience. 
              ISO 9001:2015 certified company serving 300+ satisfied customers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Products
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link to="/support" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Support
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  279 SriNagar, Street No-4, Rani Bagh, Delhi-110034 (INDIA)
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 9953154009</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">ssinternational13@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">MSME Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">CE Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 S.S. International. All rights reserved. | Established in 2003
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Manufacturers & Suppliers of Lab Equipment & Testing Machinery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;