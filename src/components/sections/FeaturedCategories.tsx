import React from "react";
import Header from "./Header";
import CategoryCard from "../cards/CategoryCard";
import { FeaturedCategoriesCard } from "../../../model/category";

const FeaturedCategories = () => {
  const headerContents = {
    h1: "Featured Categories",
    h3: "Explore all categories we offer to rent from around the world",
  };
  return (
    <section className="mx-16 space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28">
      <Header h1={headerContents.h1} h3={headerContents.h3} isHome={true} />
      <div className="flex">
        {FeaturedCategoriesCard.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
