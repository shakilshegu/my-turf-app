"use client";
import { MapPin, Star, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface HomeTurfCardProps {
  name: string;
  location: string;
  rating: number;
  image: string;
  price: number;
  index: number;
}

const HomeTurfCard: React.FC<HomeTurfCardProps> = ({
  name,
  location,
  rating,
  image,
  price,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fadeInUp 0.5s ease-out forwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300`}
        />
        {/* Price Tag */}
        <div className="absolute top-3 right-3 bg-green-600 px-3 py-1 rounded-md font-semibold text-white shadow-md">
          <span className="text-sm">${price}</span>
          <span className="text-xs">/hr</span>
        </div>
        
        {/* Location on image */}
        <div className="absolute bottom-3 left-3 flex items-center text-white">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm font-medium">{location}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-gray-100">{name}</h3>
          <div className="flex items-center text-amber-400">
            <Star size={16} className="mr-1" fill="currentColor" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-400">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">Available today</span>
          </div>
          <div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${(rating / 5) * 100}%` }}
            />
          </div>
        </div>
        
        <Link
          href={`/turfs/${name.toLowerCase().replace(/ /g, "-")}`}
          className={`block w-full text-center py-2.5 rounded-md font-medium transition-all duration-300 
            ${isHovered 
              ? "bg-green-500 text-white" 
              : "bg-gray-700 text-green-400 border border-green-500"}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HomeTurfCard;