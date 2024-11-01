export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};
export type ExploreData = ExploreItem[];



export type LiveItem = {
  img: string;
  title: string;
};
export type LiveData = LiveItem[];



/*
{
    img: 'https://links.papareact.com/uz7',
    location: 'Private room in center of London',
    title: 'London Studio Apartments',
    description: '4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine',
    star: 3.8,
    price: '£35 / night',
    total: '£207 total',
    long: -0.135638,
    lat: 51.521916
  },
*/

export type SearchResultItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export type SearchResultData = SearchResultItem[]