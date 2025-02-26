"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { gsap } from "gsap";
import footballIcon from "@/app/assets/footballIcon.svg";

interface LogoProps {
  onHover: (label: string, isEntering: boolean) => void;
}

const Logo: React.FC<LogoProps> = ({ onHover }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const footballIconRef = useRef<HTMLSpanElement>(null);

  // Initialize GSAP animations
  useEffect(() => {
    if (!logoRef.current) return;

    gsap.from(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      delay: 0.5
    });
  }, []);

  // Football icon animation
  useEffect(() => {
    if (!footballIconRef.current) return;

    const rotation = gsap.to(footballIconRef.current, {
      rotation: 360,
      duration: 3,
      ease: "none",
      repeat: -1,
    });

    return () => {
      rotation.kill();
    };
  }, []);

  return (
    <div className="flex-shrink-0" ref={logoRef}>
      <Link
        href="/"
        className="text-2xl font-bold text-green-600 flex items-center space-x-2 group"
        onMouseEnter={() => onHover("home", true)}
        onMouseLeave={() => onHover("home", false)}
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
  );
};

export default Logo;