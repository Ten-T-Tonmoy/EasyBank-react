import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import phones from "../images/phones.png";
import bgdsk from "../images/bgdsk.svg";
import bgphn from "../images/bgphn.svg";

const Home = () => {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 768) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    };
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex overflow-hidden md:flex-row bg-gray-100  min-h-[100vh] mt-10 flex-col">
        <div className="flex-1 h-100vh md:-top-12 relative flex flex-col justify-center  px-10 ">
          <h1
            className="inline-block
         font-[400] text-[2rem] md:text-[2.3rem] "
          >
            Next generation
          </h1>
          <h1
            className="inline-block
         font-[400] text-[2rem] md:text-[2.3rem] "
          >
            digital banking
          </h1>
          <p
            className="font-[400]
          max-w-[450px]
          text-[1.01rem] text-neutral-grayishBlue"
          >
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button
            className=" bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan
          relative w-[200px] py-2 text-neutral-white rounded-full my-4
          hover:opacity-70 "
          >
            Request Invite
          </button>
        </div>
        <div
          className="flex-1  md:min-w-[50vw] flex justify-center items-center "
          style={{
            backgroundImage: `url(${small ? bgdsk : bgphn})`,
            backgroundSize: `${small ? "cover" : "900px"}`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: `${small ? "0" : "-20%"}`,
            backgroundPositionY: `${small ? "0" : "-35%"}`,
          }}
        >
          <img
            src={phones}
            alt=""
            className={` w-[700px] relative
            ${small ? "-top[15%] " : "-top-[15%]"} 
           ${small ? " -right-[0]" : "-right-[15%]"}`}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
