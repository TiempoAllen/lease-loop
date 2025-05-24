import React from "react";
import { PrismaClient } from "../../../src/app/generated/prisma";
import ProductCard from "../cards/ProductCard";

const prisma = new PrismaClient();

const ProductsGrid: React.FC = async () => {
  const products = await prisma.product.findMany();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsGrid;
