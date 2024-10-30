import React from "react";
import { LiveItem } from "@/types/app";
import Image from "next/image";

type LiveItemProps = LiveItem;

const LiveCart = ({ img, title }: LiveItemProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-[300px] w-[250px]">
        <Image src={img} alt="live-img" fill />
      </div>
      <h3 className="text-2xl mt-3 ">{title}</h3>
    </div>
  );
};

export default LiveCart;
