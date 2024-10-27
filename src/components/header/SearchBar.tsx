import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
const SearchBar = () => {
  return (
    <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm my-auto">
      <input
        type="text"
        placeholder="Start your search"
        className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      />
      <SearchIcon className="hidden md:inline-flex h-8  p-2  bg-red-400 rounded-full   text-white cursor-pointer md:mx-1" />
    </div>
  );
};

export default SearchBar;
