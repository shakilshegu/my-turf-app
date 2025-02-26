"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Search, Calendar, UserCircle } from "lucide-react";
import { NavItem, UserProfile } from "./layout/types";
import MobileNavigation from "./layout/MobileNavigation";
import MobileMenuButton from "./layout/MobileMenuButton";
import ProfileMenu from "./layout/ProfileMenu";
import DesktopNavigation from "./layout/DesktopNavigation";
import Logo from "./layout/Logo";

const UserHeader: React.FC = () => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  
  // Refs
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Check if user is logged in (example)
  useEffect(() => {
    // This would normally come from your auth service
    const checkUserAuth = () => {
      // Mock authentication
      const mockLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(mockLoggedIn);

      if (mockLoggedIn) {
        // Mock user data - in a real app, you'd fetch this from your API
        setUserProfile({
          name: "John Doe",
          email: "john@example.com",
        });
      }
    };

    checkUserAuth();
  }, []);

  // Navigation items - dynamically change based on login status
  const getNavItems = (): NavItem[] => {
    const baseItems: NavItem[] = [
      { href: "/browse", icon: Search, label: "Browse Turfs" },
      { href: "/bookings", icon: Calendar, label: "My Bookings" },
    ];

    if (!isLoggedIn) {
      return [
        ...baseItems,
        { href: "/auth", icon: UserCircle, label: "Login" },
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  // Initialize GSAP animations
  useEffect(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Scroll effect with GSAP
  useEffect(() => {
    if (!headerRef.current) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      gsap.to(headerRef.current, {
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 1)",
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        duration: 0.3,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation
  const toggleMobileMenu = (): void => {
    if (!mobileMenuRef.current) return;

    setIsMenuOpen(!isMenuOpen);

    gsap.to(mobileMenuRef.current, {
      height: !isMenuOpen ? "auto" : 0,
      opacity: !isMenuOpen ? 1 : 0,
      duration: 0.3,
      ease: !isMenuOpen ? "power2.out" : "power2.in",
    });
  };

  // Link hover animation
  const handleLinkHover = (label: string, isEntering: boolean): void => {
    setActiveLink(isEntering ? label : "");

    gsap.to(`[data-link="${label}"]`, {
      scale: isEntering ? 1.1 : 1,
      color: isEntering ? "#059669" : "#374151",
      duration: 0.3,
    });
  };

  // Handle logout
  const handleLogout = (): void => {
    // Clear auth data
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUserProfile(null);
  };

  // Demo login (for testing)
  const handleDemoLogin = (): void => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setUserProfile({
      name: "John Doe",
      email: "john@example.com",
    });
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : "bg-white shadow"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Logo onHover={handleLinkHover} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <DesktopNavigation 
              navItems={navItems} 
              onHover={handleLinkHover} 
            />

            {/* User Profile Section when logged in */}
            {isLoggedIn && userProfile && (
              <ProfileMenu 
                userProfile={userProfile} 
                onHover={handleLinkHover}
                onLogout={handleLogout}
              />
            )}

            {/* For demo purposes - toggle login state */}
            {!isLoggedIn && (
              <button
                onClick={handleDemoLogin}
                className="hidden px-3 py-1 bg-green-50 text-green-600 text-xs rounded border border-green-200"
              >
                Demo Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNavigation 
          ref={mobileMenuRef}
          navItems={navItems}
          isLoggedIn={isLoggedIn}
          userProfile={userProfile}
          onMenuToggle={toggleMobileMenu}
          onLogout={handleLogout}
          onDemoLogin={handleDemoLogin}
        />
      </nav>
    </header>
  );
};

export default UserHeader;