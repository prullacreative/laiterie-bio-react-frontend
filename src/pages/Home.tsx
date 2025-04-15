import React from 'react';
import HeroSection from '../components/HeroSection';
import Benefits from '../components/Benefits';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import ChooseUs from '../components/ChooseUs';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import BlueberryImage from '../images/fruit_yogourt.png';
import TeamSection from '../components/TeamSection';

export  function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ChooseUs />
      <Categories />
      <FeaturedProducts />
      <TeamSection/>
      <Testimonials />
      <Newsletter />
    </div>
  );
}