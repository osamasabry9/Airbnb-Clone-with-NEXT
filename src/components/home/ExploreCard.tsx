import React from "react";
import { ExploreItem } from "@/types/app";
import Image from "next/image";

type ExploreItemProps = ExploreItem;
const ExploreCard = ({ location, img, distance }: ExploreItemProps) => {
  return (
    <div className="flex items-center space-x-4 m-2 mt-5 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt="explore-img"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold">{location}</h4>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
};

export default ExploreCard;
