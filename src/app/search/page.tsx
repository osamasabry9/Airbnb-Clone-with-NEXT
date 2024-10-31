"use client";
import Header from "@/components/header/Header";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const noOfGuests = searchParams.get("noOfGuests");

  console.log(location, startDate, endDate, noOfGuests);

  let formatStartDate;
  let formatEndDate;
  if (startDate && endDate) {
    formatStartDate = format(new Date(startDate), "dd MMM yy");
    formatEndDate = format(new Date(endDate), "dd MMM yy");
  }
  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <>
      <Header
        placeholder={`
      ${location} | ${range} | ${noOfGuests} guests`}
      />
      <main>Search Page</main>
    </>
  );
};

export default SearchPage;
