import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Header: React.FC<{ h1: string; h3: string; isHome: boolean }> = (
  props
) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl md:text-5xl text-black font-bold">{props.h1}</h1>
      <div className="flex items-center justify-between space-y-2">
        <h3 className="text-base text-muted-foreground">{props.h3}</h3>
        {props.isHome && (
          <Link href="/products">
            <div className="flex items-center justify-between hover:translate-x-2 transition-transform cursor-pointer">
              <h3 className="text-black">Shop</h3>
              <ArrowRight className="text-black" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
