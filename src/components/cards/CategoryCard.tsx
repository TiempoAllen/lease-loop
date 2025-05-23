import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Category from "../../../model/category";

const CategoryCard: React.FC<{ category: Category }> = (props) => {
  return (
    <Card className="w-full h-full m-4 hover:bg-neutral-600 group cursor-pointer">
      <CardHeader>
        <Image
          src={`/svg/${props.category.icon}.svg`}
          alt="test"
          width={32}
          height={32}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="group-hover:text-white">
          {props.category.title}
        </CardTitle>
        <CardDescription className="group-hover:text-white">
          {props.category.products} products
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
