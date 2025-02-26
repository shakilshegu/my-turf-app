"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Calendar, Search, UserCircle } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import footballIcon from "@/app/assets/footballIcon.svg"

// Types
interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
}

const UserHeader: React.FC = () => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('');

  // Refs
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const footballIconRef = useRef<HTMLSpanElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Navigation items
  const navItems: NavItem[] = [
    { href: '/browse', icon: Search, label: 'Browse Turfs' },
    { href: '/bookings', icon: Calendar, label: 'My Bookings' },
    { href: '/auth', icon: UserCircle, label: 'Login' }
  ];

  // Initialize GSAP animations
  useEffect(() => {
    if (!headerRef.current || !logoRef.current || !menuItemsRef.current) return;

    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.5")
    .from(menuItemsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  // Football icon animation
  useEffect(() => {
    if (!footballIconRef.current) return;

    const rotation = gsap.to(footballIconRef.current, {
      rotation: 360,
      duration: 1,
      ease: "none",
      repeat: -1,
      paused: true
    });

    return () => {
      rotation.kill();
    };
  }, []);

  // Scroll effect with GSAP
  useEffect(() => {
    if (!headerRef.current) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      gsap.to(headerRef.current, {
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 1)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        duration: 0.3
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu animation
  const toggleMobileMenu = (): void => {
    if (!mobileMenuRef.current) return;

    setIsMenuOpen(!isMenuOpen);

    gsap.to(mobileMenuRef.current, {
      height: !isMenuOpen ? "auto" : 0,
      opacity: !isMenuOpen ? 1 : 0,
      duration: 0.3,
      ease: !isMenuOpen ? "power2.out" : "power2.in"
    });
  };

  // Link hover animation
  const handleLinkHover = (label: string, isEntering: boolean): void => {
    setActiveLink(isEntering ? label : '');

    gsap.to(`[data-link="${label}"]`, {
      scale: isEntering ? 1.1 : 1,
      color: isEntering ? "#059669" : "#374151",
      duration: 0.3
    });
  };

  return (
    <header 
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : 'bg-white shadow'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0" ref={logoRef}>
            <Link 
              href="/" 
              className="text-2xl font-bold text-green-600 flex items-center space-x-2 group"
              onMouseEnter={() => handleLinkHover('home', true)}
              onMouseLeave={() => handleLinkHover('home', false)}
            >
              <div className="relative">
                <Home className="w-6 h-6" data-link="home" />
              </div>
              <span className="relative">
                PowerPitch
                <span 
                  ref={footballIconRef}
                  className="absolute -top-1 -right-2 text-yellow-400"
                >
                  <Image 
                    src={footballIcon} 
                    alt="Football Icon" 
                    width={20} 
                    height={20} 
                  />
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="relative group"
                ref={el => {
                  menuItemsRef.current[index] = el;
                }}
                onMouseEnter={() => handleLinkHover(item.label, true)}
                onMouseLeave={() => handleLinkHover(item.label, false)}
              >
                <div className="flex items-center space-x-1 px-3 py-2 text-gray-700">
                  <item.icon className="w-5 h-5" data-link={item.label} />
                  <span data-link={item.label}>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-2'
                }`} />
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3'
                }`} />
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-4'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden h-0 opacity-0"
        >
          <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 border-t border-gray-200">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded-md"
                onClick={toggleMobileMenu}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UserHeader;