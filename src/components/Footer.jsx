import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import youtube from "../images/icon-youtube.svg";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="text-center text-[1.05rem] py-5 md:p-10 md:h-[300px]
     items-center justify-between md:flex  bg-primary-darkBlue text-white"
    >
      <div className="md:grid-cols-3 grid gap-6">
        <div className="">
          <div className=" justify-center flex">
            <img src={logo} alt="" className="scale-125 invert" />
          </div>
          <div className="flex gap-4 justify-center mt-10">
            {/**
             * Logos
             */}
            <img
              src={facebook}
              className="rounded-full hover:scale-[170%] cursor-pointer hover:bg-primary-limeGreen scale-150"
              alt=""
            />
            <img
              src={instagram}
              className="rounded-full hover:scale-[170%] cursor-pointer hover:bg-primary-limeGreen scale-150"
              alt=""
            />
            <img
              src={pinterest}
              className="rounded-full hover:scale-[170%] cursor-pointer hover:bg-primary-limeGreen scale-150"
              alt=""
            />
            <img
              src={youtube}
              className="rounded-full hover:scale-[170%] cursor-pointer hover:bg-primary-limeGreen scale-150"
              alt=""
            />
            <img
              src={twitter}
              className="rounded-full hover:scale-[170%] cursor-pointer hover:bg-primary-limeGreen scale-150"
              alt=""
            />
          </div>
        </div>
        {/**
         * 2nd part of 2 divs
         */}
        <div className="md:flex mt-2 md:mt-0 md:flex-row">
          <div className="md:text-left mx-8">
            <div
              className="hover:text-primary-limeGreen 
            ease-in-out whitespace-nowrap duration-150 py-1 cursor-pointer transition-colors"
            >
              About Us
            </div>
            <div
              className="hover:text-primary-limeGreen 
            ease-in-out duration-150 py-1 cursor-pointer transition-colors"
            >
              {" "}
              Contact
            </div>
            <div
              className="hover:text-primary-limeGreen 
            ease-in-out duration-150 py-1 cursor-pointer transition-colors"
            >
              {" "}
              Blog
            </div>
          </div>
          <div className="md:text-left mx-8">
            <div
              className="hover:text-primary-limeGreen 
            ease-in-out duration-150 py-1 cursor-pointer transition-colors"
            >
              Careers
            </div>
            <div
              className="hover:text-primary-limeGreen 
            ease-in-out duration-150 py-1 cursor-pointer transition-colors"
            >
              Support{" "}
            </div>
            <div
              className="hover:text-primary-limeGreen 
            ease-in-out duration-150 py-1 cursor-pointer transition-colors"
            >
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
      <div className="md:-mt-16">
        <button
          className=" bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan
          w-[200px] py-2 text-neutral-white rounded-full my-10 text-body
          hover:opacity-70"
        >
          Request Invite
        </button>
        <p className="text-neutral-grayishBlue whitespace-nowrap">
          ©Easybank. All Rights Reserved . <br /> Coded by{" "}
          <p className="inline text-primary-limeGreen"> Fh Tonmoy</p>{" "}
          <FaHeart className="inline mb-1 text-primary-brightCyan " />
        </p>
      </div>
    </div>
  );
};

export default Footer;
