import React from "react";
import MainHeading from "../MainHeading";
import { getLive } from "@/utils/api";
import { LiveData } from "@/types/app";
import LiveCart from "./LiveCart";

const Live = async () => {
  const liveData: LiveData = await getLive();
  console.log(liveData);
  return (
    <section className="pt-6">
      <div className="container">
      <MainHeading title="Live anywhere" />
        <div className="flex overflow-scroll no-scrollbar space-x-3 p-3 -ml-3 ">
          {liveData?.map((item) => (
            <LiveCart key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
