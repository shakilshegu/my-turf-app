"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, User, Calendar, Bell, LogIn } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Courts', 
    href: '#',
    children: [
      { name: 'Basketball', href: '/courts/basketball', description: 'Indoor and outdoor courts' },
      { name: 'Tennis', href: '/courts/tennis', description: 'Clay, hard and grass courts' },
      { name: 'Football', href: '/courts/football', description: '5-a-side and full pitches' },
      { name: 'Volleyball', href: '/courts/volleyball', description: 'Beach and indoor courts' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const UserHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
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

  const toggleDropdown = (name: string) => {
    if (dropdownOpen === name) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(name);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 shadow-md py-2' 
          : 'bg-transparent backdrop-blur-sm from-gray-900 to-black py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center transform transition-all duration-500 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-lg shadow-sm transform -rotate-6"></div>
              <span className="text-xl font-bold text-white">
                Power<span className="text-green-500">Pitch</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center text-gray-300 hover:text-green-500 font-medium transition-colors group-hover:text-green-500 transform transition-all duration-500 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform duration-200 ${
                        dropdownOpen === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                ) : (
                  <Link 
                    href={item.href}
                    className={`text-gray-300 hover:text-green-500 font-medium transition-colors transform transition-all duration-500 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.children && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 rounded-xl bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-200 origin-top-left ${
                      dropdownOpen === item.name 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 hover:bg-gray-700 text-gray-300 hover:text-green-500"
                        >
                          <div className="font-medium">{child.name}</div>
                          {child.description && (
                            <p className="text-sm text-gray-400">{child.description}</p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/notifications" 
              className={`p-2 rounded-full text-gray-300 hover:bg-gray-800 hover:text-green-500 transition-all transform transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <Bell size={20} />
            </Link>
            <Link 
              href="/bookings" 
              className={`p-2 rounded-full text-gray-300 hover:bg-gray-800 hover:text-green-500 transition-all transform transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.35s' }}
            >
              <Calendar size={20} />
            </Link>
            <Link 
              href="/login" 
              className={`ml-2 flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all transform transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <LogIn size={18} className="mr-2" />
              <span>Sign In</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full py-2 text-gray-300 font-medium"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          dropdownOpen === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <div 
                      className={`pl-4 mt-1 space-y-1 transition-all duration-200 ${
                        dropdownOpen === item.name 
                          ? 'max-h-screen opacity-100 mb-2' 
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-green-500"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-300 font-medium hover:text-green-500"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile auth buttons */}
          <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between">
            <Link 
              href="/login" 
              className="flex items-center text-gray-300"
            >
              <User size={18} className="mr-2" />
              <span>Log in</span>
            </Link>
            <Link 
              href="/signup" 
              className="flex items-center px-4 py-2 rounded-lg bg-green-600 text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;