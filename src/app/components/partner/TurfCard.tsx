"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Calendar, Star } from 'lucide-react';

interface TurfCardProps {
  id: number;
  name: string;
  location: string;
  bookings: number;
  rating: number;
  image: string;
}

const TurfCard: React.FC<TurfCardProps> = ({
  id,
  name,
  location,
  bookings,
  rating,
  image
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {rating} <Star className="inline h-3 w-3 ml-0.5" />
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center mt-1 text-gray-600">
          <MapPin className="h-4 w-4 mr-1" /> {location}
        </div>
        
        <div className="mt-4 flex justify-between items-center text-gray-700">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{bookings} bookings this month</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Link href={`/partner/turfs/${id}`}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Manage
            </motion.button>
          </Link>
          
          <Link href={`/partner/turfs/${id}/analytics`}>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-200">
              View Analytics
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TurfCard;