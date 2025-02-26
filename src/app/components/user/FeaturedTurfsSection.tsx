"use client"
import { ChevronRight} from "lucide-react";
import Link from "next/link";
import HomeTurfCard from "./HomeTurfCard";
import Image from "next/image";
import footballIcon from "@/app/assets/footballIcon.svg"

const FeaturedTurfs = () => {

  const turfs = [
    {
      name: "Green Valley Soccer Field",
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Featured Turfs
              <span className="ml-2 inline-block animate-bounce"><Image src={footballIcon} alt="Football Icon" width={30} height={30} /></span>
            </h2>
            <p className="text-gray-600">Discover the best sports venues near you</p>
          </div>
          <Link 
            href="/turfs" 
            className="group flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-300"
          >
            <span className="mr-1">View all turfs</span>
            <ChevronRight 
              className="transform transition-transform duration-300 group-hover:translate-x-1" 
              size={18} 
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {turfs.map((turf, index) => (
            <HomeTurfCard 
              key={index} 
              {...turf} 
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
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
    </section>
  );
};

export default FeaturedTurfs;