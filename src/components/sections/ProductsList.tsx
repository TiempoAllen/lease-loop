import React from "react";
import Header from "./Header";
import ProductCard from "../cards/ProductCard";
import { PrismaClient } from "../../../src/app/generated/prisma";

const prisma = new PrismaClient();

const ProductsList: React.FC<{ isHome: boolean }> = async (props) => {
  const products = await prisma.product.findMany();
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
