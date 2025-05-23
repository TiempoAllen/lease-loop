import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const ShopButton = () => {
  return (
    <Button className="flex gap-x-2" variant="outline">
      <ShoppingCart className="mr-2 h-4 w-4" />
      <span className="">0</span>
    </Button>
  );
};

export default ShopButton;
