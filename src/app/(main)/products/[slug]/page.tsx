import Image from "next/image";
import React from "react";
import { PrismaClient } from "../../../generated/prisma";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

const prisma = new PrismaClient();

type ProductDetailsProps = {
  params: {
    slug: string;
  };
};

const ProductDetailsPage = async ({ params }: ProductDetailsProps) => {
  const slug = params.slug;

  const product = await prisma.product.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 p-10">
      <div className="flex justify-end items-center aspect-square relative">
        <Image
          src={product.imgUrl}
          alt={product.name}
          sizes="50"
          fill
          className="aspect-square object-cover rounded-2xl"
        />
      </div>
      <div className="pe-6">
        <div className="py-1 px-6 bg-gray-200 rounded-xl mb-2 w-fit text-sm">
          <p>{product.category}</p>
        </div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>₱ {product.price}</p>
        <Accordion
          type="single"
          collapsible
          className="w-full cursor-pointer border-2 px-4 rounded-lg mt-4"
        >
          <AccordionItem value={product.name}>
            <AccordionTrigger className="text-md font-bold">
              Description
            </AccordionTrigger>
            <AccordionContent>{product.description}</AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex items-center mt-4 w-full gap-2">
          <Button className="flex-1 rounded-full py-6 text-white bg-black hover:bg-gray-800 transition">
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="w-12 h-12 rounded-full p-0 border border-gray-300 flex items-center justify-center"
          >
            <HeartIcon className="text-gray-500 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
