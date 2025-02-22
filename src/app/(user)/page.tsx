import Link from 'next/link';
import HeroSection from '../components/user/HeroSection';
import FeaturedTurfs from '../components/user/FeaturedTurfsSection';
import Benefits from '../components/user/BenefitsSection';
import Testimonials from '../components/user/Testimonials';

export default function Home() {
  return (
    <div className="">
       <HeroSection/>
       <FeaturedTurfs/>
       <Benefits/>
       <Testimonials/>
    </div>
  );
}