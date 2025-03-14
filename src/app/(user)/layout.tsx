"use client"
import React, { useState, useEffect } from 'react';
import Footer from "../components/user/Footer";
import UserHeader from "../components/user/Header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative">
      {/* Global background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-green-600 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-center bg-no-repeat opacity-5 mix-blend-multiply"></div>
        
        {/* Animated floating shapes */}
        <div className="hidden md:block">
          {[...Array(6)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                width: `${40 + Math.random() * 30}px`,
                height: `${40 + Math.random() * 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? '#10B981' : '#059669',
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${7 + Math.random() * 7}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <UserHeader />
      
      {/* Content sections with animations */}
      <main className="relative z-10">
        <div className={`transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Bottom accent */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-green-600 z-10"></div>
      
      {/* Global animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}