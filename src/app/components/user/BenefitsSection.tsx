"use client";
import { useEffect, useRef, RefCallback, JSX } from "react";
import { Calendar, MapPin, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Benefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Create properly typed ref callbacks
  const setCardRef: RefCallback<HTMLDivElement> = (element: HTMLDivElement | null) => {
    if (element) {
      const index = Number(element.dataset.index);
      cardsRef.current[index] = element;
    }
  };

  const setIconRef: RefCallback<HTMLDivElement> = (element: HTMLDivElement | null) => {
    if (element) {
      const index = Number(element.dataset.index);
      iconsRef.current[index] = element;
    }
  };

  const benefits: Benefit[] = [
    {
      icon: <Calendar className="h-10 w-10 text-green-600" />,
      title: "Easy Booking",
      description: "Book your preferred turf with just a few clicks, anytime and anywhere."
    },
    {
      icon: <Star className="h-10 w-10 text-green-600" />,
      title: "Verified Venues",
      description: "All turfs are verified to ensure quality and safety for all players."
    },
    {
      icon: <MapPin className="h-10 w-10 text-green-600" />,
      title: "Convenient Locations",
      description: "Find sports facilities near you with our advanced location search."
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".benefits-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(cardsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.4")
    .from(iconsRef.current, {
      scale: 0,
      rotation: -180,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=1");

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!cardsRef.current[index] || !iconsRef.current[index]) return;

    gsap.to(cardsRef.current[index], {
      y: -10,
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(iconsRef.current[index], {
      scale: 1.1,
      rotation: "+=180",
      duration: 0.6,
      ease: "power1.out"
    });
  };

  const handleMouseLeave = (index: number) => {
    if (!cardsRef.current[index] || !iconsRef.current[index]) return;

    gsap.to(cardsRef.current[index], {
      y: 0,
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(iconsRef.current[index], {
      scale: 1,
      rotation: "-=180",
      duration: 0.6,
      ease: "power1.out"
    });
  };

  return (
    <section className="py-16 bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="benefits-title text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={setCardRef}
              data-index={index}
              className="text-center p-6 rounded-lg transition-colors"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div 
                ref={setIconRef}
                data-index={index}
                className="flex justify-center mb-4"
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;