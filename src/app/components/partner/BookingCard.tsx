"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, MapPin } from 'lucide-react';
import Link from 'next/link';

interface BookingCardProps {
  id: number;
  customerName: string;
  turfName: string;
  date: string;
  time: string;
  amount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const BookingCard: React.FC<BookingCardProps> = ({
  id,
  customerName,
  turfName,
  date,
  time,
  amount,
  status
}) => {
  // Status colors
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800'
  };
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200"
    >
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              <User className="h-4 w-4 text-gray-500 mr-1" />
              <h3 className="text-lg font-medium text-gray-900">{customerName}</h3>
            </div>
            <div className="flex items-center mt-1">
              <MapPin className="h-4 w-4 text-gray-500 mr-1" />
              <p className="text-gray-600">{turfName}</p>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-600 mr-1" />
            <span className="text-gray-600 text-sm">{formattedDate} • {time}</span>
          </div>
          <p className="font-medium text-gray-900">₹{amount}</p>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Link href={`/partner/bookings/${id}`}>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCard;