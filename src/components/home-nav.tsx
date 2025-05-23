import React from "react";
import DesktopNav from "./Navbar/DesktopNav";
import SearchButton from "./Navbar/SearchButton";
import ShopButton from "./Navbar/ShopButton";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const HomeNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background py-3">
      <nav className="mx-12 px-2 sm:px-4 lg:px-6 flex items-center justify-between">
        <DesktopNav />
        <div className="flex items-center gap-x-4">
          <SearchButton />
          <ShopButton />
          <Link href="/sign-in" className={buttonVariants({ size: "sm" })}>
            Sign In
            <span className="sr-only">Sign In</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HomeNav;
