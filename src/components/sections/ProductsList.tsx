import React, { Suspense } from "react";
import Header from "./Header";
import ProductCard from "../cards/ProductCard";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
import ProductsGrid from "./ProductsGrid";

const ProductsList: React.FC<{ isHome: boolean }> = async (props) => {
  const headerContents = {
    h1: "Products List",
    h3: "Explore all products we offer to rent from around the world",
  };
  return (
    <section
      className={`space-y-8 px-4 sm:px-6 lg:px-8 py-8 ${
        props.isHome ? "md:pt-10 lg:pt-24" : "md:pt-2 lg:pt-12"
      } sm:pb-28 mx-16`}
    >
      <Header
        h1={headerContents.h1}
        h3={headerContents.h3}
        isHome={props.isHome}
      />
      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <ProductsGrid />
      </Suspense>
    </section>
  );
};

export default ProductsList;
