"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import { NavItem, UserProfile } from "./types";
import { User, Settings, LogOut } from "lucide-react";

interface MobileNavigationProps {
  navItems: NavItem[];
  isLoggedIn: boolean;
  userProfile: UserProfile | null;
  onMenuToggle: () => void;
  onLogout: () => void;
  onDemoLogin: () => void;
}

const MobileNavigation = forwardRef<HTMLDivElement, MobileNavigationProps>(
  ({ navItems, isLoggedIn, userProfile, onMenuToggle, onLogout, onDemoLogin }, ref) => {
    return (
      <div
        ref={ref}
        className="md:hidden overflow-hidden h-0 opacity-0"
      >
        <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded-md"
              onClick={onMenuToggle}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}

          {/* Mobile User Profile Section */}
          {isLoggedIn && userProfile && (
            <>
              <div className="pt-2 pb-1 border-t border-gray-200">
                <p className="px-3 text-sm font-medium text-gray-500">
                  User Account
                </p>
              </div>
              <Link
                href="/profile"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded-md"
                onClick={onMenuToggle}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded-md"
                onClick={onMenuToggle}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  onMenuToggle();
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded-md w-full text-left"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </>
          )}

          {/* For demo purposes */}
          {!isLoggedIn && (
            <button
              onClick={() => {
                onDemoLogin();
                onMenuToggle();
              }}
              className="hidden mt-2 px-3 py-1 bg-green-50 text-green-600 text-xs rounded border border-green-200 self-start ml-3"
            >
              Demo Login
            </button>
          )}
        </div>
      </div>
    );
  }
);

MobileNavigation.displayName = "MobileNavigation";

export default MobileNavigation;