"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, Calendar, MapPin } from 'lucide-react';

export default function PartnerHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-r from-green-800 to-blue-900'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <Link href="/partner" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:from-blue-400 group-hover:to-green-500">
                TurfBook Partner
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/partner/turfs" className="relative group">
              <div className="flex items-center text-gray-300 hover:text-white px-3 py-2 transition-colors duration-200">
                <MapPin className="mr-1 h-4 w-4" />
                <span>My Turfs</span>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/partner/bookings" className="relative group">
              <div className="flex items-center text-gray-300 hover:text-white px-3 py-2 transition-colors duration-200">
                <Calendar className="mr-1 h-4 w-4" />
                <span>Bookings</span>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/partner/profile" className="relative group">
              <div className="flex items-center text-gray-300 hover:text-white px-3 py-2 transition-colors duration-200">
                <User className="mr-1 h-4 w-4" />
                <span>Profile</span>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <button className="ml-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-md hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Add New Turf
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/90 backdrop-blur-sm">
          <Link href="/partner/turfs" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700/50 block px-3 py-2 rounded-md text-base font-medium">
            <MapPin className="mr-2 h-5 w-5" />
            My Turfs
          </Link>
          <Link href="/partner/bookings" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700/50 block px-3 py-2 rounded-md text-base font-medium">
            <Calendar className="mr-2 h-5 w-5" />
            Bookings
          </Link>
          <Link href="/partner/profile" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700/50 block px-3 py-2 rounded-md text-base font-medium">
            <User className="mr-2 h-5 w-5" />
            Profile
          </Link>
          <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-md font-medium">
            Add New Turf
          </button>
        </div>
      </div>
    </header>
  );
}