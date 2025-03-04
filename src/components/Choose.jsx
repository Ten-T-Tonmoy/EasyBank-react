import React from "react";
import api from "../images/icon-api.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import online from "../images/icon-online.svg";

const Choose = () => {
  return (
    <div>
      <h1 className="text-[3rem] md:ml-8 py-3 text-center md:text-left">
        Why choose Easybank?
      </h1>

      <p className="text-[1.1rem] md:ml-7 md:text-left md:w-[600px] text-center p-3 text-neutral-grayishBlue">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div
        className="grid gap-4 grid-cols-1 p-10 
        md:grid-cols-2 lg:grid-cols-4"
      >
        <div className="cursor-pointer text-center ">
          <img src={online} className="mx-auto" alt="" />
          <h2 className=" p-3 text-center text-[1.8rem]  font-[500]">
            Online Banking
          </h2>
          <p className="text-[1.1rem] p-3 text-neutral-grayishBlue">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="cursor-pointer text-center ">
          <img src={online} className="mx-auto" alt="" />
          <h2 className=" p-3 text-center text-[1.8rem]  font-[500]">
            Open API
          </h2>
          <p className="text-[1.1rem] p-3 text-neutral-grayishBlue">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
        <div className="cursor-pointer text-center ">
          <img src={online} className="mx-auto" alt="" />
          <h2 className=" p-3 text-center text-[1.8rem]  font-[500]">
            Fast Onboarding
          </h2>
          <p className="text-[1.1rem] p-3 text-neutral-grayishBlue">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="cursor-pointer text-center ">
          <img src={online} className="mx-auto" alt="" />
          <h2 className=" p-3 text-center text-[1.8rem]  font-[500]">
            Simple Budgeting
          </h2>
          <p className="text-[1.1rem] p-3 text-neutral-grayishBlue">
            {" "}
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
