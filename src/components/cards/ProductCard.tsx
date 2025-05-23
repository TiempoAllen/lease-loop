import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Product from "../../../model/product";
import Link from "next/link";

const ProductCard: React.FC<{ product: Product }> = (props) => {
  return (
    <Link href={`/products/${props.product.slug}`} className="w-full h-full">
      <Card className="w-full h-full cursor-pointer p-2 flex flex-col gap-1">
        <CardHeader className="p-0">
          <div className="aspect-square relative rounded-2xl">
            <Image
              src={`${props.product.imgUrl}`}
              alt="test"
              sizes="50"
              fill
              className="aspect-square object-cover rounded-2xl"
            />
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <CardDescription className="group-hover:text-white mb-3">
            {props.product.category}
          </CardDescription>
          <CardTitle className="group-hover:text-white mb-2">
            {props.product.name}
          </CardTitle>
          <div className="flex justify-between items-center">
            <CardDescription className="group-hover:text-white">
              ₱ {props.product.price}
            </CardDescription>
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer group hover:bg-gray-600 rounded-full border-2"
            >
              <ShoppingCart className="group-hover:text-white" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
