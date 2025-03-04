import React from "react";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <div
      className="flex bg-white h-10 md:h-14
      bg-opacity-30 backdrop-blur-lg border-b border-neutral-200 
       z-10 py-4 px-8shadow-sm shadow-black fixed top-0 w-full
       p-3 text-center items-center justify-between"
    >
      <h1>EasyBank</h1>
      <div className="gap-3 hidden md:flex">
        <button
          className="text-body hover:bg-gradient-to-r text-neutral-grayishBlue
          font-[400] hover:font-[500] px-3 hover:text-white transition-all duration-300 ease-in-out
          rounded-full from-primary-limeGreen to-primary-brightCyan py-2"
        >
          Home
        </button>
        <button
          className="text-body hover:bg-gradient-to-r text-neutral-grayishBlue
          font-[400] hover:font-[500] px-3 hover:text-white transition-all duration-300 ease-in-out
          rounded-full from-primary-limeGreen to-primary-brightCyan py-2"
        >
          About
        </button>
        <button
          className="text-body hover:bg-gradient-to-r text-neutral-grayishBlue
          font-[400] hover:font-[500] px-3 hover:text-white transition-all duration-300 ease-in-out
          rounded-full from-primary-limeGreen to-primary-brightCyan py-2"
        >
          Contact
        </button>
        <button
          className="text-body hover:bg-gradient-to-r text-neutral-grayishBlue
          font-[400] hover:font-[500] px-3 hover:text-white transition-all duration-300 ease-in-out
          rounded-full from-primary-limeGreen to-primary-brightCyan py-2"
        >
          Blog
        </button>
        <button
          className="text-body hover:bg-gradient-to-r text-neutral-grayishBlue
          font-[400] hover:font-[500] px-3 hover:text-white transition-all duration-300 ease-in-out
          rounded-full from-primary-limeGreen to-primary-brightCyan py-2"
        >
          Carrier
        </button>
      </div>
      <button
        className="mr-20 bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan
          hidden md:block w-[200px] py-2 text-neutral-white rounded-full my-4
          hover:opacity-70 "
      >
        Request Invite
      </button>
    </div>
  );
};

export default Navbar;
