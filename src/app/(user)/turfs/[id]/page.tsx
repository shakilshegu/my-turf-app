"use client";
import Amenities from "@/app/components/user/Amenities";
import BookingModal from "@/app/components/user/BookingModal";
import Contact from "@/app/components/user/Contact";
import Location from "@/app/components/user/Location";
import Reviews from "@/app/components/user/Reviews";
import TurfGallery from "@/app/components/user/TurfGallery";
import TurfInfo from "@/app/components/user/TurfInfo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import {useState } from "react";

export default function TurfDetailPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  // Sample data - in a real app, you'd fetch this based on the [id] param
  const turf = {
    id: "1",
    name: "Green Valley Turf",
    location: "Andheri West, Mumbai",
    description:
      "Premier sporting facility featuring state-of-the-art synthetic grass, floodlights for evening play, and professional maintenance. Perfect for casual games and serious tournaments alike.",
    price: 1200,
    rating: 4.7,
    reviewCount: 128,
    capacity: "5v5 - 7v7",
    hours: "6:00 AM - 11:00 PM",
    sports: ["Football", "Cricket"],
    images: [
      "/uploads/IM1.jpg",
      "/uploads/IM2.jpg",
      "/uploads/IM3.jpg",
      "/uploads/IM4.jpg",
    ],
    amenities: [
      { name: "Changing Rooms", available: true },
      { name: "Showers", available: true },
      { name: "Drinking Water", available: true },
      { name: "Floodlights", available: true },
      { name: "Parking", available: true },
      { name: "Equipment Rental", available: false },
      { name: "Cafeteria", available: false },
      { name: "First Aid Kit", available: true },
    ],
    reviews: [
      {
        userName: "Rahul Sharma",
        userAvatar: "/uploads/IM1.jpg",
        rating: 5,
        date: "July 15, 2024",
        comment:
          "Amazing turf! Well maintained and the staff was very helpful. Will definitely come back.",
      },
      {
        userName: "Priya Patel",
        userAvatar: "/api/placeholder/40/40",
        rating: 4,
        date: "July 10, 2024",
        comment:
          "Good facility. Lighting could be improved for evening games, but otherwise great experience.",
      },
      {
        userName: "Aditya Singh",
        userAvatar: "/api/placeholder/40/40",
        rating: 5,
        date: "July 5, 2024",
        comment:
          "Best turf in the area. We had a corporate tournament here and everything was perfect.",
      },
    ],
    address:
      "123 Sports Complex, Near Metro Station, Andheri West, Mumbai 400053, Maharashtra, India",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.13916296276!2d72.82178836240766!3d19.129863739264462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca8ccd!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708091359839!5m2!1sen!2sin",
    phone: "+91 98765 43210",
    email: "info@greenvalleyturf.com",
    socialMedia: {
      facebook: "https://facebook.com/greenvalleyturf",
      instagram: "https://instagram.com/greenvalleyturf",
      twitter: "https://twitter.com/greenvalleyturf",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            href="/turfs"
            className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Turfs
          </Link>

          <h1 className="text-xl font-bold text-gray-800">{turf.name}</h1>

          {/* Mobile book now button */}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="lg:hidden bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition-all transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Turf Images Gallery */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <TurfGallery images={turf.images} />
            </div>

            {/* Turf Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <TurfInfo turf={turf} />
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Amenities amenities={turf.amenities} />
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Reviews reviews={turf.reviews} />
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Location address={turf.address} mapUrl={turf.mapUrl} />
            </div>
          </div>

          {/* Sidebar */}
          <div className=" space-y-6">
            {/* Sticky booking card - the key improvement */}
            <div className="sticky top-6 bg-white rounded-xl shadow-sm p-6 border border-green-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Book this turf
              </h2>
              <p className="text-gray-600 mb-2">From ${turf.price}/hour</p>

              {/* Prominent, attractive book now button */}
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium shadow-md transition-all transform hover:scale-105 mb-4 flex items-center justify-center"
              >
                <span className="mr-2">Book Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Contact information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Contact
                phone={turf.phone}
                email={turf.email}
                socialMedia={turf.socialMedia}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        turf={turf}
      />
    </div>
  );
}
