"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Calendar, MapPin, ChevronRight, Clock, Award, Users } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-8 overflow-hidden min-h-[600px] flex items-center">
      {/* Main content - Background elements removed as they're in Home */}
      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Brand and headline */}
          <div className={`text-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg shadow-lg transform -rotate-6"></div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  Power<span className="text-green-500">Pitch</span>
                </h1>
                <div className="w-8 h-8 bg-green-600 rounded-lg shadow-lg transform rotate-6"></div>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Book premier sports courts anytime, anywhere. Your game, your schedule.
            </p>
          </div>
          
          {/* Search form */}
          <div className={`bg-gray-800 rounded-2xl shadow-xl p-3 mb-12 mx-auto max-w-4xl transition-all duration-700 transform ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`} style={{ transitionDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What sport are you looking for?"
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-600 bg-gray-700 text-white focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:ring-opacity-50 transition-all"
                />
              </div>
              <div className="sm:w-1/3 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-600 bg-gray-700 text-white focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:ring-opacity-50 transition-all"
                />
              </div>
              <button className="h-12 px-8 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-all hover:shadow-lg active:scale-95">
                Find Courts
              </button>
            </div>
          </div>
          
          {/* Features section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { icon: Clock, title: 'Quick Booking', description: 'Reserve your court in under a minute' },
              { icon: Users, title: 'All Sports', description: 'Basketball, tennis, volleyball, and more' },
              { icon: Award, title: 'Top Facilities', description: 'Only the best venues in your area' }
            ].map((feature, i) => (
              <div 
                key={i}
                className={`rounded-2xl p-6 bg-gray-800 border border-gray-700 shadow-sm hover:shadow-md hover:border-green-800 transition-all duration-500 group ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-green-900 bg-opacity-50 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <feature.icon size={24} className="text-green-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.7s' }}>
            <Link 
              href="/explore"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-all hover:shadow-lg active:scale-95 text-center"
            >
              Explore Courts
              <ChevronRight className="ml-2 inline-block" size={18} />
            </Link>
            <Link 
              href="/schedule"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 font-medium hover:bg-gray-700 hover:border-green-700 transition-all active:scale-95 text-center"
            >
              View Schedule
              <Calendar className="ml-2 inline-block" size={18} />
            </Link>
          </div>
          
          {/* Mobile app hint */}
          <div className={`mt-12 text-center transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.9s' }}>
            <p className="text-gray-400 text-sm">
              Also available on mobile:
              <span className="inline-flex gap-2 ml-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300">iOS</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300">Android</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;