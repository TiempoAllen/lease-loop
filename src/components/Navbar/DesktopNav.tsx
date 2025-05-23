import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex gap-x-8 items-center">
      <Link href="/" className="flex space-x-2">
        <span className="hidden font-bold lg:inline-block">LeaseLoop</span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        LeaseLoop
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        LeaseLoop connects people who need items with those
                        willing to rent them out. From tools to tech, fashion to
                        furniture, borrow what you need or earn from what you
                        own—securely and hassle-free.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <Link href="/products" title="Products">
                  All the products we have to offer
                </Link>
                <Link href="/#categories" title="Categories">
                  See all categories we have
                </Link>
                <Link href="/dashboard/stores" title="Create store">
                  Create store and start selling products
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2">
                <Link href="/products?category=skateboards" title="Skateboards">
                  Explore the skateboards category
                </Link>
                <Link href="/products?category=clothing" title="Clothing">
                  Explore the clothing category
                </Link>
                <Link href="/products?category=shoes" title="Shoes">
                  Explore the shoes category
                </Link>
                <Link href="/products?category=accessories" title="Accessories">
                  Explore the accessories category
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
