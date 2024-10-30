import Banner from "@/components/home/Banner";
import Explore from "@/components/home/Explore";
import Greatest from "@/components/home/Greatest";
import Live from "@/components/home/Live";


export default function Home() {
  return (
    <main>
      <Banner />
      <Explore />
      <Live />
      <Greatest
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        linkText="Get Inspired"
      />
    </main>
  );
}
