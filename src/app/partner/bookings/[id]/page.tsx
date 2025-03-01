"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { useParams } from "next/navigation";

// This would come from your database or API in a real application
const getBookingById = (id: string) => {
  return {
    id,
    customerName: 'John Smith',
    customerEmail: 'john.smith@example.com',
    customerPhone: '+1 (555) 123-4567',
    serviceType: 'Lawn Mowing',
    serviceDescription: 'Full lawn service including mowing, edging, and cleanup for a medium-sized yard.',
    date: new Date(2025, 2, 5),
    time: '09:00 AM',
    duration: '2 hours',
    status: 'confirmed',
    price: 50,
    location: '123 Main St, Anytown, CA 90210',
    notes: 'Please make sure to close the gate when leaving.',
    image: '/uploads/FAQ1.jpg',
    partnerNotes: 'Customer has a dog, bring treats.',
    customerAvatar: '/uploads/FAQ1.jpg'
  };
};

export default function BookingDetail() {
  const params = useParams();
  const bookingId = params?.id as string; 
  
  // In a real app, you would fetch this data from an API
  const booking = getBookingById(bookingId);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-900 text-emerald-400';
      case 'pending': return 'bg-amber-900 text-amber-400';
      case 'cancelled': return 'bg-rose-900 text-rose-400';
      case 'completed': return 'bg-sky-900 text-sky-400';
      default: return 'bg-gray-800 text-gray-400';
    }
  };

  if (!booking) {
    return (
      <div className="flex items-center justify-center h-96  text-gray-200">
        <div className="animate-pulse flex space-x-4">
          <div className="h-12 w-12 rounded-full bg-gray-700"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-36"></div>
            <div className="h-4 bg-gray-700 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen text-gray-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Link href="/partner/bookings" className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Bookings
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-gray-700 bg-gray-800 shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                  <div>
                    <h1 className="text-2xl font-bold mb-2 text-gray-100">Booking #{booking.id}</h1>
                    <div className="flex items-center">
                      <span 
                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(booking.status)}`}
                      >
                        {booking.status === 'confirmed' || booking.status === 'completed' ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : booking.status === 'cancelled' ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                            <path d="M9 9L15 15M15 9L9 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : null}
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-0 flex space-x-3">
                    <button className="h-10 px-4 py-2 border border-gray-600 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
                      Reschedule
                    </button>
                    <button 
                      className={`h-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        booking.status === 'cancelled' 
                          ? 'border border-gray-600 bg-gray-700 text-gray-400 cursor-not-allowed' 
                          : 'bg-rose-600 text-white hover:bg-rose-700'
                      }`}
                      disabled={booking.status === 'cancelled'}
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>

                <div className="mb-8 bg-gray-750 p-5 rounded-xl">
                  <h2 className="text-lg font-semibold mb-4 text-indigo-300">Service Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-4">
                        <Image
                          src={booking.image}
                          alt={booking.serviceType}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-100">{booking.serviceType}</p>
                        <p className="text-sm text-gray-400">Service ID: SRV-001</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-gray-300">{booking.serviceDescription}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-750 p-5 rounded-xl">
                    <h2 className="text-lg font-semibold mb-4 text-indigo-300">Appointment</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-gray-700 p-2 rounded-lg mr-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
                            <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-100">Date</p>
                          <p className="text-gray-400">{format(booking.date, 'EEEE, MMMM d, yyyy')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-gray-700 p-2 rounded-lg mr-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
                            <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-100">Time</p>
                          <p className="text-gray-400">{booking.time} ({booking.duration})</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-gray-700 p-2 rounded-lg mr-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
                            <path d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 18V22M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-100">Location</p>
                          <p className="text-gray-400">{booking.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-gray-700 p-2 rounded-lg mr-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
                            <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82838M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82838" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-100">Price</p>
                          <p className="text-gray-400">${booking.price}.00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-750 p-5 rounded-xl">
                    <h2 className="text-lg font-semibold mb-4 text-indigo-300">Customer</h2>
                    <div className="flex items-center mb-4">
                      <div className="relative h-16 w-16 mr-4 rounded-full overflow-hidden bg-gray-700 border-2 border-indigo-500">
                        <Image 
                          src={booking.customerAvatar} 
                          alt={booking.customerName}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-100">{booking.customerName}</p>
                        <p className="text-sm text-gray-400">Customer since Jan 2025</p>
                      </div>
                    </div>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-center">
                        <div className="bg-gray-700 p-2 rounded-lg mr-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
                            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-gray-400">{booking.customerPhone}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-gray-700 p-2 rounded-lg mr-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-gray-400">{booking.customerEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4 text-indigo-300">Notes</h2>
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <p className="text-gray-300">{booking.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-xl border border-gray-700 bg-gray-800 shadow-lg overflow-hidden sticky top-4">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-indigo-300">Partner Notes</h2>
                <div className="p-4 bg-amber-900/50 rounded-lg border border-amber-800/50 mb-6">
                  <p className="text-amber-300">{booking.partnerNotes}</p>
                </div>

                <h2 className="text-lg font-semibold mb-4 text-indigo-300">Actions</h2>
                <div className="space-y-3">
                  <button className="w-full h-12 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium transition-colors flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Mark as Completed
                  </button>
                  <button className="w-full h-12 px-4 py-2 border border-gray-600 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Contact Customer
                  </button>
                  <button className="w-full h-12 px-4 py-2 border border-gray-600 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M15 17H20M15 17V12M15 17L8.66667 10.6667M9 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Send Reminder
                  </button>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4 text-indigo-300">Timeline</h2>
                  <div className="relative border-l-2 border-gray-600 pl-6 py-2 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-8 top-0">
                        <div className="h-6 w-6 rounded-full bg-emerald-900 border-2 border-emerald-500 flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-300">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-100">Booking Confirmed</p>
                        <p className="text-xs text-gray-400">Feb 28, 2025 at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 top-0">
                        <div className="h-6 w-6 rounded-full bg-indigo-900 border-2 border-indigo-500 flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-300">
                            <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-100">Booking Created</p>
                        <p className="text-xs text-gray-400">Feb 27, 2025 at 10:15 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}