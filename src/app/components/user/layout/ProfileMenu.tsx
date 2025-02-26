"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCircle, User, Settings, LogOut } from "lucide-react";
import { gsap } from "gsap";
import { UserProfile } from "./types";

interface ProfileMenuProps {
  userProfile: UserProfile;
  onHover: (label: string, isEntering: boolean) => void;
  onLogout: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ 
  userProfile, 
  onHover,
  onLogout
}) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Profile menu animation
  const toggleProfileMenu = (): void => {
    if (!profileMenuRef.current) return;

    setIsProfileMenuOpen(!isProfileMenuOpen);

    if (!isProfileMenuOpen) {
      // When opening the menu
      // First set display to block before animating
      profileMenuRef.current.style.display = "block";
      // Then animate in
      gsap.fromTo(
        profileMenuRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.2, ease: "power2.out" }
      );
    } else {
      // When closing the menu
      // Animate out first
      gsap.to(profileMenuRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        // Then set display to none after animation completes
        onComplete: () => {
          if (profileMenuRef.current) {
            profileMenuRef.current.style.display = "none";
          }
        },
      });
    }
  };

  const handleLogout = () => {
    onLogout();
    setIsProfileMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleProfileMenu}
        className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-50"
        onMouseEnter={() => onHover("profile", true)}
        onMouseLeave={() => onHover("profile", false)}
      >
        {userProfile.avatar ? (
          <Image
            src={userProfile.avatar}
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <UserCircle className="w-6 h-6" data-link="profile" />
        )}
        <span data-link="profile" className="hidden sm:inline-block">
          {userProfile.name.split(" ")[0]}
        </span>
      </button>

      {/* Profile Dropdown Menu */}
      <div
        ref={profileMenuRef}
        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transform origin-top-right"
        style={{ display: "none" }}
      >
        <div className="px-4 py-2 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-900 truncate">
            {userProfile.name}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {userProfile.email}
          </p>
        </div>
        <Link
          href="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
          onClick={() => setIsProfileMenuOpen(false)}
        >
          <User className="w-4 h-4 mr-2" />
          Profile
        </Link>
        <Link
          href="/settings"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
          onClick={() => setIsProfileMenuOpen(false)}
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Link>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;