import Header from "@/components/header/Header";
import { format } from "date-fns";
import { getSearchResults } from "../../utils/api";
import { SearchResultData } from "../../types/app";
import ListingCart from "./_components/ListingCart";
// Define types for your search results

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

const SearchPage = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formatStartDate;
  let formatEndDate;
  if (startDate && endDate) {
    formatStartDate = format(new Date(startDate), "dd MMMM yy");
    formatEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatStartDate} - ${formatEndDate}`;
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];
  const searchResultData: SearchResultData = await getSearchResults();

  console.log(searchResultData);

  return (
    <>
      <Header
        placeholder={`
      ${location} | ${range} | ${numOfGuests} guests`}
      />

      {/* Search info section */}
      <main className="container ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          {/* Filters */}
          <div className="hidden lg:inline-flex mb-5 space-x-3">
            {filters.map((filter) => (
              <p key={filter} className="filter-button">
                {filter}
              </p>
            ))}
          </div>

          {/* Search results */}
          <div className="flex flex-col">
            {searchResultData?.map((item) => (
              <ListingCart
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                price={item.price}
                total={item.total}
                star={item.star}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default SearchPage;
