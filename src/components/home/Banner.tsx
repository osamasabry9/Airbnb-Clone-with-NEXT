import Image from "next/image";
import React from "react";
import BannerImg from "../../../public/banner.png";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px]">
      <Image
        src={BannerImg}
        alt="banner-img"
        className="object-cove object-left  "
        fill
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white px-10 py-2">
          We always try to make our customer Happy. We provide all kind of
          facilities.
          <br /> Your Satisfaction is our main priority
        </p>
        <button className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
