"use client"

import Image from "next/image";
import { useState } from "react";

interface TurfGalleryProps {
    images: string[];
  }

  const TurfGallery: React.FC<TurfGalleryProps> = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);
    
    return (
      <div className="mb-8">
        <div className="relative h-80 sm:h-96 md:h-[28rem] overflow-hidden rounded-xl shadow-lg mb-2">
          <Image
            src={images[activeImage]} 
            alt="Turf view" 
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden transition-all duration-200 ${
                activeImage === index ? 'ring-2 ring-green-500 scale-105' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`Turf view ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    );
  };
  export default TurfGallery