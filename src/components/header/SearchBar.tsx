"use client";
import React, { useState } from "react";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Link from "next/link";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm my-auto">
        <input
          type="text"
          placeholder="Start your search"
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8  p-2  bg-red-400 rounded-full   text-white cursor-pointer md:mx-1" />
      </div>
      {searchInput && (
        <div className="absolute left-[50%] translate-x-[-50%] top-[100%] bg-white flex flex-col p-4">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b py-4 ">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(parseInt(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-stretch pt-5">
            <button
              className="flex-grow items-center text-gray-500"
              type="button"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <Link
              href="/search"
              className="flex-grow items-center text-red-400 "
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
