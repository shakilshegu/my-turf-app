"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { NavItem } from "./types";
import { gsap } from "gsap";

interface DesktopNavigationProps {
  navItems: NavItem[];
  onHover: (label: string, isEntering: boolean) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ 
  navItems, 
  onHover 
}) => {
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Initialize GSAP animations
  useEffect(() => {
    if (!menuItemsRef.current.length) return;

    gsap.from(
      menuItemsRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.7
      }
    );
  }, [navItems.length]);

  return (
    <div className="flex items-center space-x-8">
      {navItems.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          className="relative group"
          ref={(el) => {
            menuItemsRef.current[index] = el;
          }}
          onMouseEnter={() => onHover(item.label, true)}
          onMouseLeave={() => onHover(item.label, false)}
        >
          <div className="flex items-center space-x-1 px-3 py-2 text-gray-700">
            <item.icon className="w-5 h-5" data-link={item.label} />
            <span data-link={item.label}>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavigation;