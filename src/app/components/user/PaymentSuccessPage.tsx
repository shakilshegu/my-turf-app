"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Calendar, Clock, MapPin, Star, ArrowRight, Share2, Gift } from 'lucide-react';

interface BookingDetails {
  id: string;
  turfName: string;
  date: string;
  time: string;
  duration: string;
  amount: string;
  location: string;
  confirmationCode: string;
}

interface PopularTurf {
  id: string;
  name: string;
  image: string;
  rating: number;
  location: string;
  price: string;
}

export default function PaymentSuccessComponent() {
  const router = useRouter();
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [popularTurfs, setPopularTurfs] = useState<PopularTurf[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Mock data setup
    const mockBookingData: BookingDetails = {
      id: "BK12345",
      turfName: "Green Fields Arena",
      date: "28 Feb 2025",
      time: "18:00",
      duration: "2 hours",
      amount: "₹2,500",
      location: "Koramangala, Bangalore",
      confirmationCode: "GRFLD28022025"
    };

    const mockPopularTurfs: PopularTurf[] = [
      {
        id: "T001",
        name: "Urban Kickz",
        image: "/api/placeholder/300/200",
        rating: 4.8,
        location: "Indiranagar",
        price: "₹1,200/hr"
      },
      {
        id: "T002",
        name: "Premier Grounds",
        image: "/api/placeholder/300/200",
        rating: 4.6,
        location: "HSR Layout",
        price: "₹1,500/hr"
      },
      {
        id: "T003",
        name: "SportzVilla",
        image: "/api/placeholder/300/200",
        rating: 4.9,
        location: "Whitefield",
        price: "₹1,800/hr"
      }
    ];

    // Simulate API fetch delay
    setTimeout(() => {
      setBooking(mockBookingData);
      setPopularTurfs(mockPopularTurfs);
      setIsLoading(false);
      
      // Show confetti animation after loading
      setTimeout(() => {
        setShowConfetti(true);
        
        // Hide confetti after 3 seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
      }, 300);
    }, 1000);
  }, []);

  const copyReferralCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-20 h-20">
          <div className="w-20 h-20 border-4 border-t-green-500 border-r-green-300 border-b-green-200 border-l-green-400 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 10 + 5;
            const startX = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 0.5;
            const color = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)];
            
            return (
              <div
                key={i}
                className="absolute animate-fall"
                style={{
                  left: `${startX}%`,
                  top: '-10px',
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  borderRadius: '2px',
                  transform: 'rotate(45deg)',
                  animation: `fall ${duration}s ease-in forwards ${delay}s`
                }}
              />
            );
          })}
        </div>
      )}

      {/* Success Banner */}
      <div className="bg-green-500 py-12 px-4 text-white text-center relative overflow-hidden">
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center animate-pulse">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-wider animate-slideUp opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>PAYMENT SUCCESSFUL!</h1>
          <p className="text-xl mt-2 animate-slideUp opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>Your turf booking has been confirmed</p>
        </div>
        
        {/* Animated circles in background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => {
            const size = Math.random() * 100 + 50;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 10 + 10;
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-10"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${posX}%`,
                  top: `${posY}%`,
                  animation: `float ${duration}s infinite linear`
                }}
              />
            );
          })}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Details - Left Column */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg animate-fadeIn opacity-0" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
            <h2 className="text-2xl font-bold text-gray-700 mb-6">BOOKING DETAILS</h2>
            
            <div className="space-y-6">
              <div className="transform transition-transform duration-300 hover:translate-x-2">
                <p className="text-gray-600 font-medium">Booking ID</p>
                <p className="text-xl text-gray-800">{booking?.id}</p>
              </div>
              
              <div className="transform transition-transform duration-300 hover:translate-x-2">
                <p className="text-gray-600 font-medium">Turf Name</p>
                <p className="text-xl text-gray-800">{booking?.turfName}</p>
              </div>
              
              <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-x-2">
                <Calendar className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-gray-600 font-medium">Date</p>
                  <p className="text-xl text-gray-800">{booking?.date}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-x-2">
                <Clock className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-gray-600 font-medium">Time & Duration</p>
                  <p className="text-xl text-gray-800">{booking?.time} ({booking?.duration})</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 transform transition-transform duration-300 hover:translate-x-2">
                <MapPin className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-gray-600 font-medium">Location</p>
                  <p className="text-xl text-gray-800">{booking?.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Information - Right Column */}
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">PAYMENT INFORMATION</h2>
              
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-600">Total Amount</span>
                <span className="text-3xl font-bold text-green-600 animate-pulse">₹2,500</span>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Confirmation Code</h3>
              <div className="bg-white border-2 border-dashed border-blue-300 p-4 text-center rounded relative overflow-hidden group cursor-pointer" onClick={() => copyReferralCode()}>
                <p className="text-xl font-mono font-bold tracking-wider relative z-10">{booking?.confirmationCode}</p>
                <p className="text-sm text-gray-500 mt-2 relative z-10">Show this code at the venue</p>
                
                <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10"></div>
                
                {copied && (
                  <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-90 animate-fadeIn">
                    <p className="text-white font-bold">Copied!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 animate-fadeIn opacity-0" style={{ animationDelay: '1.9s', animationFillMode: 'forwards' }}>
          <button 
            onClick={() => router.push('/user/bookings')}
            className="mb-4 sm:mb-0 px-6 py-3 bg-white border border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-50 transition-colors w-full sm:w-auto transform hover:scale-105 duration-300"
          >
            View My Bookings
          </button>
          
          <button 
            onClick={() => router.push('/user/dashboard')}  
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors w-full sm:w-auto transform hover:scale-105 duration-300"
          >
            Back to Dashboard
          </button>
        </div>
        
        {/* Popular Turfs Section */}
        <div className="mt-12 animate-fadeIn opacity-0" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-700">Popular Turfs Near You</h2>
            <button 
              onClick={() => router.push('/explore')}
              className="text-green-500 flex items-center hover:text-green-600 group"
            >
              View All <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularTurfs.map((turf, index) => (
              <div 
                key={turf.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fadeIn opacity-0"
                style={{ animationDelay: `${2.4 + index * 0.2}s`, animationFillMode: 'forwards' }}
                onClick={() => router.push(`/turf/${turf.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{turf.name}</h3>
                    <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                      <span className="font-medium">{turf.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-1 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> {turf.location}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-green-600">{turf.price}</span>
                    <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors transform hover:scale-105 duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Referral Section with Animation */}
        <div className="mt-12 animate-fadeIn opacity-0" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-8 text-white text-center relative overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(10)].map((_, i) => {
                const size = Math.random() * 50 + 20;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 15;
                
                return (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `${posX}%`,
                      top: `${posY}%`,
                      animation: `pulse ${duration}s infinite alternate ${delay}s`
                    }}
                  />
                );
              })}
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Gift className="w-8 h-8 text-green-500" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Invite Friends & Get ₹500 Off!</h2>
              <p className="mb-6">Share your referral code with friends and both of you get ₹500 off on your next booking.</p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <input 
                    type="text" 
                    value="TURF500" 
                    readOnly
                    className="px-4 py-3 rounded-lg text-gray-800 font-medium text-center sm:text-left w-full"
                  />
                  {copied && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-90 rounded-lg animate-fadeIn">
                      <p className="text-white font-bold">Copied!</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={copyReferralCode}
                  className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300 flex items-center justify-center"
                >
                  <Share2 className="w-5 h-5 mr-2" /> Share Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global animation styles */}
      <style jsx global>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(45deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(10px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(-10px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(1.2); opacity: 0.5; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}