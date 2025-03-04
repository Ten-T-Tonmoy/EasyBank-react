import React from "react";
import confet from "../images/confet.jpg";
import currency from "../images/currency.jpg";
import dish from "../images/dish.jpg";
import plane from "../images/plane.jpg";

const Articles = () => {
  return (
    <div className="bg-gray-200">
      <h1 className="text-[3rem] py-3 text-center">Latest Articles</h1>
      <div className="grid gap-4 grid-cols-1 p-5  md:grid-cols-2 lg:grid-cols-4">
        <div
          className="cursor-pointer hover:scale-105 
        transition-all duration-200 ease-in-out rounded-lg overflow-hidden bg-white"
        >
          <img src={currency} className="w-full" alt="" />
          <h1 className=" p-3 text-neutral-grayishBlue">By Claire Robinson</h1>
          <h2 className=" p-3 text-center text-[1.5rem] font-[500]">
            Receive money in any currency with no fees
          </h2>
          <p className=" p-3 text-neutral-grayishBlue">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>

        <div
          className="cursor-pointer hover:scale-105 
        transition-all duration-200 ease-in-out rounded-lg overflow-hidden bg-white"
        >
          <img src={dish} className="w-full" alt="" />
          <h1 className=" p-3 text-neutral-grayishBlue">By Wilson Hutton</h1>
          <h2 className=" p-3 text-center text-[1.5rem] font-[500]">
            Treat yourself without worrying about money
          </h2>
          <p className=" p-3 text-neutral-grayishBlue">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>

        <div
          className="cursor-pointer hover:scale-105 
        transition-all duration-200 ease-in-out rounded-lg overflow-hidden bg-white"
        >
          <img src={plane} className="w-full" alt="" />
          <h1 className=" p-3 text-neutral-grayishBlue">By Wilson Hutton</h1>
          <h2 className=" p-3 text-center text-[1.5rem] font-[500]">
            Take your Easybank card wherever you go
          </h2>
          <p className=" p-3 text-neutral-grayishBlue">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>

        <div
          className="cursor-pointer hover:scale-105 
        transition-all duration-200 ease-in-out rounded-lg overflow-hidden bg-white"
        >
          <img src={confet} className="w-full" alt="" />
          <h1 className=" p-3 text-neutral-grayishBlue">By Claire Robinson</h1>
          <h2 className=" p-3 text-center text-[1.5rem] font-[500]">
            Our invite-only Beta accounts are now live!
          </h2>
          <p className=" p-3 text-neutral-grayishBlue">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
