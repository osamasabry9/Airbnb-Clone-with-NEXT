import React from "react";
import LogoImg from "./LogoImg";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="container grid  grid-cols-3  relative ">
        <LogoImg />
        <SearchBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
