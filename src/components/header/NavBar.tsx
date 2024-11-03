import React from "react";
import { GlobeAltIcon, Bars4Icon, UserCircleIcon }from '@heroicons/react/24/solid'

const NavBar = () => {
  return (
    <div className="flex items-center space-x-4 justify-end text-gray-500 mx-4">
      <p className="hidden md:inline cursor-pointer line-clamp-1 ">
        Become a Host
      </p>
      <GlobeAltIcon className="h-6 cursor-pointer" />
      <div className="flex space-x-2 border-2 p-2 rounded-full">
        <UserCircleIcon className="h-6 cursor-pointer" />
        <Bars4Icon className="h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
