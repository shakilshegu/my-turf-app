"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

// Define booking type
interface Booking {
  id: string;
  customerName: string;
  serviceType: string;
  date: Date;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  price: number;
  location: string;
  image?: string;
}

// Sample data
const sampleBookings: Booking[] = [
  {
    id: 'B001',
    customerName: 'John Smith',
    serviceType: 'Lawn Mowing',
    date: new Date(2025, 2, 5),
    time: '09:00 AM',
    status: 'confirmed',
    price: 50,
    location: '123 Main St',
    image: '/images/lawn.jpg',
  },
  {
    id: 'B002',
    customerName: 'Sarah Johnson',
    serviceType: 'Home Cleaning',
    date: new Date(2025, 2, 7),
    time: '10:30 AM',
    status: 'pending',
    price: 85,
    location: '456 Park Ave',
    image: '/images/cleaning.jpg',
  },
  {
    id: 'B003',
    customerName: 'Mike Williams',
    serviceType: 'Plumbing Repair',
    date: new Date(2025, 2, 3),
    time: '02:00 PM',
    status: 'completed',
    price: 120,
    location: '789 Oak Rd',
    image: '/images/plumbing.jpg',
  },
  {
    id: 'B004',
    customerName: 'Emily Davis',
    serviceType: 'Electrical Work',
    date: new Date(2025, 2, 10),
    time: '11:00 AM',
    status: 'cancelled',
    price: 95,
    location: '321 Elm St',
    image: '/images/electrical.jpg',
  }
];

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookings] = useState<Booking[]>(sampleBookings);

  // Filter bookings based on search term
  const filteredBookings = bookings.filter(booking => 
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-300';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Bookings Dashboard
            </h1>
            <button 
              className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 font-medium"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              New Booking
            </button>
          </div>

          <div className="w-full space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-6">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-gray-800">Partner Bookings</h2>
                <span className="ml-3 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-sm">
                  {bookings.length} Total
                </span>
              </div>
              
              <div className="relative w-full sm:w-72">
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full h-12 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black placeholder-gray-500 shadow-sm"
                />
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="h-14 px-6 text-left align-middle font-semibold text-gray-600 w-[100px] uppercase text-xs tracking-wider">ID</th>
                    <th className="h-14 px-6 text-left align-middle font-semibold text-gray-600 uppercase text-xs tracking-wider">Service</th>
                    <th className="h-14 px-6 text-left align-middle font-semibold text-gray-600 uppercase text-xs tracking-wider">Customer</th>
                    <th className="h-14 px-6 text-left align-middle font-semibold text-gray-600 uppercase text-xs tracking-wider">Date & Time</th>
                    <th className="h-14 px-6 text-left align-middle font-semibold text-gray-600 uppercase text-xs tracking-wider">Status</th>
                    <th className="h-14 px-6 text-left align-middle font-semibold text-gray-600 uppercase text-xs tracking-wider">Price</th>
                    <th className="h-14 px-6 text-right align-middle font-semibold text-gray-600 uppercase text-xs tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => (
                      <tr key={booking.id} className="transition-colors hover:bg-blue-50">
                        <td className="py-4 px-6 align-middle font-medium text-blue-600">{booking.id}</td>
                        <td className="py-4 px-6 align-middle">
                          <div className="flex items-center space-x-3">
                            {booking.image && (
                              <div className="relative h-12 w-12 rounded-lg overflow-hidden shadow-sm">
                                <Image
                                  src={booking.image}
                                  alt={booking.serviceType}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <span className="font-medium text-gray-900">{booking.serviceType}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 align-middle font-medium text-gray-900">{booking.customerName}</td>
                        <td className="py-4 px-6 align-middle">
                          <div className="flex flex-col">
                            <span className="font-medium text-gray-800">{format(booking.date, 'MMM dd, yyyy')}</span>
                            <span className="text-sm text-gray-500">{booking.time}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 align-middle">
                          <span 
                            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getStatusColor(booking.status)}`}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-6 align-middle font-semibold text-gray-900">${booking.price}</td>
                        <td className="py-4 px-6 align-middle text-right">
                          <Link href={`/partner/bookings/${booking.id}`}>
                            <button className="h-10 rounded-lg px-4 border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-all">
                              View Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-8 text-gray-500">
                        <div className="flex flex-col items-center justify-center space-y-3">
                          <svg className="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <p className="font-medium">No bookings found</p>
                          <p className="text-sm text-gray-400">Try adjusting your search or filters</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}