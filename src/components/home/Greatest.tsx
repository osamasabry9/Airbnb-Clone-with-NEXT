import Image from "next/image";
import Link from "next/link";
import React from "react";
import GreatestImg from "../../../public/greatest-img.png";

type GreatestProps = {
  title: string;
  description: string;
  linkText: string;
};

const Greatest = ({ title, description, linkText }: GreatestProps) => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-8 relative">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={GreatestImg}
          alt="greatest-img"
          fill
          className="rounded-2xl -z10 object-cover"
        />
        s
      </div>
      <div className="absolute top-32 w-full left-12">
        <h3 className="text-4xl mb-3 w-64 text-white ">{title}</h3>
        <p className=" text-white ">{description}</p>
        <Link
          href="/"
          className="text-sm px-4 py-2  block w-fit rounded-lg mt-5 text-gray-600 bg-white hover:bg-gray-200"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Greatest;
