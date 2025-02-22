"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, Star, ChevronRight, Trophy, Bell, Timer } from 'lucide-react';
import footballIcon from "@/app/assets/footballIcon.svg"
import Image from 'next/image';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-b from-green-900 to-green-800">
      {/* Animated field lines overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 mix-blend-overlay" />
        <div className="absolute left-1/2 top-1/2 w-48 h-48 border-4 border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute left-1/2 w-px h-full bg-white/20 transform -translate-x-1/2 animate-field-line" />
        
        {/* Football-themed animated elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 opacity-0 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <Trophy className="text-yellow-400/30" />
          </div>
        ))}
      </div>

      <div className={`relative z-10 container mx-auto px-4 py-20 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
        <div className="text-center">
          {/* Main title with football animation */}
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow-lg animate-title-bounce">
            PowerPitch
              <span className="absolute -top-6 -right-6 transform rotate-12 animate-bounce-slow"><Image src={footballIcon} alt="Football Icon" width={50} height={50} /></span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90 animate-fade-in-up" 
             style={{ animationDelay: '0.3s' }}>
            Your Gateway to Perfect Football Matches
          </p>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Timer, title: 'Quick Booking', desc: 'Book in seconds' },
              { icon: Trophy, title: 'Premium Turfs', desc: 'High-quality venues' },
              { icon: Bell, title: 'Live Support', desc: '24/7 assistance' }
            ].map((feature, i) => (
              <div 
                key={i}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                <feature.icon className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Enhanced Search Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl mb-12 transform hover:scale-[1.02] transition-all duration-300 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative group">
                <Search className="absolute left-3 top-3 text-white/50 group-hover:text-yellow-400 transition-colors duration-300" size={20} />
                <input 
                  type="text" 
                  placeholder="Find your perfect turf..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                />
              </div>
              <div className="relative group">
                <MapPin className="absolute left-3 top-3 text-white/50 group-hover:text-yellow-400 transition-colors duration-300" size={20} />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all duration-300"
                />
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105 active:scale-95">
                Search Now
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-x-4">
            <Link 
              href="/turfs" 
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 border border-white/20"
            >
              Browse Turfs
              <ChevronRight className="ml-2 animate-bounce-x" size={20} />
            </Link>
            <Link 
              href="/featured" 
              className="inline-flex items-center bg-yellow-400 text-green-900 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105 active:scale-95"
            >
              Featured Venues
              <Star className="ml-2 animate-spin-slow" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-24 fill-green-950"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.45,22.34,121.09,43.44,195.25,49.38Z" 
            className="animate-wave"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
          100% { transform: translateY(-40px) rotate(360deg); opacity: 0; }
        }
        @keyframes title-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes wave {
          0% { transform: translateX(0) translateZ(0); }
          50% { transform: translateX(-2%) translateZ(0); }
          100% { transform: translateX(0) translateZ(0); }
        }
        @keyframes field-line {
          0% { transform: translateX(-50%) scaleY(0); }
          100% { transform: translateX(-50%) scaleY(1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-title-bounce {
          animation: title-bounce 3s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;