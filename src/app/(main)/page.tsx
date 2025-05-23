import FeaturedCategories from "@/components/sections/FeaturedCategories";
import HeroSection from "@/components/sections/HeroSection";
import ProductsList from "@/components/sections/ProductsList";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <ProductsList isHome={true} />
    </>
  );
};

export default Home;
