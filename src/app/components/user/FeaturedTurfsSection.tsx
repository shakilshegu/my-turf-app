"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import HomeTurfCard from "./HomeTurfCard";

const FeaturedTurfs = () => {
  const turfs = [
    {
      name: "Green Soccer Field",
      location: "Downtown Sports Complex",
      rating: 4.8,
      image: "/uploads/IM1.jpg",
      price: 45
    },
    {
      name: "Victory Football Ground",
      location: "North City Stadium",
      rating: 4.6,
      image: "/uploads/IM2.jpg",
      price: 60
    },
    {
      name: "Central Cricket Pitch",
      location: "Memorial Park",
      rating: 4.9,
      image: "/uploads/IM3.jpg",
      price: 55
    },
    {
      name: "Elite Basketball Court",
      location: "Riverside Arena",
      rating: 4.7,
      image: "/uploads/IM4.jpg",
      price: 40
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-100">Featured Sports Venues</h2>
            <p className="text-gray-400 mt-1">Top-rated courts and fields in your area</p>
          </div>
          <Link 
            href="/turfs" 
            className="flex items-center text-green-500 hover:text-green-400 font-medium transition-colors duration-300"
          >
            View all venues
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {turfs.map((turf, index) => (
            <HomeTurfCard
              key={index}
              name={turf.name}
              location={turf.location}
              rating={turf.rating}
              image={turf.image}
              price={turf.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTurfs;