import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const ProductCardSkeleton: React.FC = () => {
  return (
    <Card className="w-full h-full p-2 flex flex-col gap-1">
      <CardHeader className="p-0">
        <div className="aspect-square relative rounded-2xl overflow-hidden">
          <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-transparent to-zinc-950/50" />
          <Skeleton className="w-full h-full absolute inset-0 object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-2 flex flex-col gap-2 flex-1">
        <CardDescription>
          <Skeleton className="h-4 w-24" />
        </CardDescription>
        <CardTitle>
          <Skeleton className="h-6 w-36" />
        </CardTitle>
        <div className="flex justify-between items-center mt-auto">
          <CardDescription>
            <Skeleton className="h-4 w-16" />
          </CardDescription>
          <Button
            size="sm"
            variant="outline"
            disabled
            className="rounded-full border-2 cursor-not-allowed"
          >
            <ShoppingCart className="opacity-50" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
