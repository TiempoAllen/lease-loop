import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between h-screen px-8 py-6 mx-16">
      <div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-7xl font-bold">LeaseLoop</h1>
          <h3 className="text-2xl text-start mt-4 text-muted-foreground">
            From tools to tech, fashion to furniture, borrow what you need or
            earn from what you own—securely and hassle-free.
          </h3>
        </div>
        <div className="flex items-center justify-start mt-8 space-x-4">
          <Button>Rent Now</Button>
          <Button variant="outline">Lease Now</Button>
        </div>
      </div>
      <Image
        src="/hero-bg.png"
        alt="hero"
        width={900}
        height={900}
        className="hidden lg:block w-1/2 h-auto object-cover"
      />
    </section>
  );
};

export default HeroSection;
