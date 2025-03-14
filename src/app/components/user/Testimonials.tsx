"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The booking process was super easy. Found a great football turf near my place!",
      author: "John D.",
      role: "Football Enthusiast",
      rating: 5,
      image: "/uploads/FAQ1.jpg", // Placeholder for user image
    },
    {
      text: "We use this platform for all our team's practice sessions. Highly recommended!",
      author: "Sarah M.",
      role: "Basketball Team Captain",
      rating: 5,
      image: "/uploads/FAQ2.jpg",
    },
    {
      text: "Excellent service and great facilities. The ratings are very accurate.",
      author: "Raj P.",
      role: "Cricket Player",
      rating: 4,
      image: "/uploads/FAQ3.jpg",
    },
  ];

  // For mobile swipe functionality
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-12  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">
          What Our Users Say
        </h2>
        <p className="text-center text-green-100 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Join thousands of sports enthusiasts who have found their perfect
          venue
        </p>

        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" backdrop-blur-lg p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.author}`}
                    width={64} // Explicit width in pixels
                    height={64} // Explicit height in pixels
                    className="rounded-full object-cover border-2 border-green-400"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-green-200">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-400"
                        } mr-1`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic mb-4 text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-5 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={`${testimonials[activeIndex].author}`}
                    width={48} // Explicit width in pixels
                    height={48} // Explicit height in pixels
                    className="rounded-full object-cover border-2 border-green-400"
                  />
                </div>
                <div>
                  <p className="font-semibold">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-green-200 text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < testimonials[activeIndex].rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-400"
                        } mr-1`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic mb-2 text-base">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>
            </div>
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevTestimonial}
              className="bg-white bg-opacity-20 p-2 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`mx-1 w-2 h-2 rounded-full ${
                    index === activeIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white bg-opacity-20 p-2 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Call to action button - responsive sizing */}
        <div className="mt-8 md:mt-12 text-center">
          <button className="bg-white text-green-800 font-bold py-2 px-5 md:py-3 md:px-6 rounded-full hover:bg-green-100 transition duration-300 shadow-lg text-sm md:text-base">
            See More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
