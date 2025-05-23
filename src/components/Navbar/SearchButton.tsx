import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const SearchButton = () => {
  return (
    <Button
      className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 cursor-pointer"
      variant="outline"
    >
      <Search className="xl:mr-2 h-4 w-4" aria-hidden="true" />
      <span className="hidden xl:inline-flex">Search products...</span>
      <kbd className="pointer-events-none absolute right-2 top-2 hidden h-6 select-none items-center gap-1 rounded-full border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
        <abbr title="Control" className="no-underline">
          Ctrl
        </abbr>
        K
      </kbd>
    </Button>
  );
};

export default SearchButton;
