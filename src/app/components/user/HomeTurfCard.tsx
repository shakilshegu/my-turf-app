"use client"
import { MapPin, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HomeTurfCardProps {
  name: string;
  location: string;
  rating: number;
  image: string;
  price: number;
  index: number;
}

const HomeTurfCard: React.FC<HomeTurfCardProps> = ({ name, location, rating, image, price, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ 
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden group">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 blur-[1px]' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Animated Price Tag */}
        <div className={`absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full 
          font-semibold text-green-800 shadow-lg transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 scale-110' : 'translate-y-0'
        }`}>
          <span className="text-sm">${price}</span>
          <span className="text-xs text-green-600">/hr</span>
        </div>
      </div>

      <div className="p-4 relative">
        {/* Card Content with Hover Effects */}
        <h3 className="font-bold text-lg mb-2 transform transition-all duration-300 hover:text-green-600">
          {name}
        </h3>
        
        <div className={`flex items-center text-gray-600 mb-2 transition-all duration-300 ${
          isHovered ? 'text-green-600' : ''
        }`}>
          <MapPin size={16} className={`mr-1 transition-transform duration-300 ${
            isHovered ? 'scale-110' : ''
          }`} />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center text-amber-500 mb-4">
          <Star size={16} className={`mr-1 transition-transform duration-300 ${
            isHovered ? 'scale-110 rotate-12' : ''
          }`} fill="currentColor" />
          <span className="font-medium">{rating}</span>
          <div className="ml-1 w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${(rating / 5) * 100}%` }}
            />
          </div>
        </div>

        <Link
          href={`/turfs/${name.toLowerCase().replace(/ /g, "-")}`}
          className={`block w-full text-center py-2.5 rounded-lg font-medium transition-all duration-300 
            ${isHovered 
              ? 'bg-green-600 text-white shadow-lg shadow-green-600/20 transform scale-105' 
              : 'bg-green-100 text-green-700'
            }`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HomeTurfCard