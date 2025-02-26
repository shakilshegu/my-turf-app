"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [isScrolling, setIsScrolling] = useState(false);

  // Update year automatically
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Scroll to top animation
  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Toggle mobile accordion sections
  const toggleSection = (section:any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 pb-6 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
      
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-green-500 h-6 w-1 mr-2 rounded-full"></span>
              PowerPitch
            </h3>
            <p className="text-gray-400 mb-6">
              Find and book the best sports facilities near you with ease.
            </p>
            
            {/* Social icons */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 hover:bg-purple-500 flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
            
            {/* Download app buttons */}
            <div className="space-y-3 md:pr-4">
              <a href="#" className="block px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium text-center">
                Download on App Store
              </a>
              <a href="#" className="block px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium text-center">
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Quick Links section - mobile accordion / desktop regular */}
          <div className="md:col-span-1">
            <div className="md:block">
              <h4 
                className="text-lg font-semibold mb-4 flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => toggleSection('links')}
              >
                Quick Links
                <span className="md:hidden">
                  {expandedSection === 'links' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </h4>
              
              <ul className={`space-y-3 ${expandedSection === 'links' ? 'block' : 'hidden md:block'}`}>
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/turfs"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                    Browse Turfs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                    Login / Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support section */}
          <div className="md:col-span-1">
            <h4 
              className="text-lg font-semibold mb-4 flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={() => toggleSection('support')}
            >
              Support
              <span className="md:hidden">
                {expandedSection === 'support' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </h4>
            
            <ul className={`space-y-3 ${expandedSection === 'support' ? 'block' : 'hidden md:block'}`}>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="h-1 w-1 bg-green-500 rounded-full mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us section */}
          <div className="md:col-span-1">
            <h4 
              className="text-lg font-semibold mb-4 flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={() => toggleSection('contact')}
            >
              Contact Us
              <span className="md:hidden">
                {expandedSection === 'contact' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </h4>
            
            <div className={`${expandedSection === 'contact' ? 'block' : 'hidden md:block'}`}>
              <address className="text-gray-400 not-italic space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-white font-medium">Email</p>
                    <a href="mailto:support@powerpitch.com" className="hover:text-green-400 transition-colors">
                      support@powerpitch.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-white font-medium">Phone</p>
                    <a href="tel:+18885558275" className="hover:text-green-400 transition-colors">
                      +1 (888) 555-TURF
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1 text-white font-medium">Address</p>
                    <p>123 Sports Street, Athletic City</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Newsletter - mobile friendly */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest news and offers!</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-r-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and back to top */}
        <div className="border-t border-gray-800 pt-6 mt-3 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-center mb-4 sm:mb-0">
            © {year} PowerPitch. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className={`px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all flex items-center text-sm ${isScrolling ? 'text-green-400' : 'text-gray-400'}`}
          >
            Back to top
            <ChevronUp size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;