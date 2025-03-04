import React, { useState } from "react";
import logo from "../images/logo.svg";
import ham from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div
        className="flex bg-white md:h-14
        bg-opacity-30 backdrop-blur-lg border-b border-neutral-200 
        z-10 py-4 px-8shadow-sm shadow-black fixed top-0 w-full
        p-3 text-center items-center justify-between"
      >
        <img src={logo} alt="EasyBank Logo" className="md:ml-20 " />

        {/* Desktop Menu */}
        <div className="gap-3 hidden md:flex">
          {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
            <button
              key={item}
              className="text-body hover:bg-gradient-to-r text-neutral-grayishBlue
              font-[400] hover:font-[500] px-3 hover:text-white transition-all duration-300 ease-in-out
              rounded-full from-primary-limeGreen to-primary-brightCyan py-2"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="mr-20 bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan
          hidden lg:block w-[200px] py-2 text-neutral-white rounded-full my-4
          hover:opacity-70"
        >
          Request Invite
        </button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden h-[40px] w-[40px] scale-50 transition-all duration-200 cursor-pointer"
          onClick={() => setOpen(!open)}
          style={{
            backgroundImage: `url(${open ? close : ham})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-20">
          <img
            src={close}
            className="mx-auto mt-4 bg-gradient-to-r from-primary-limeGreen
             to-primary-brightCyan p-3 rounded-full scale-110 cursor-pointer"
            onClick={() => setOpen(!open)}
            alt="Close Menu"
          />
          <div
            className={`absolute top-20 left-1/2 transform transition-all
              duration-300 ease-in-out ${
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              } -translate-x-1/2 w-3/4 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4`}
          >
            {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
              <button
                key={item}
                className="text-body text-neutral-grayishBlue font-[500] hover:bg-gradient-to-r hover:text-white 
                transition-all duration-300 ease-in-out rounded-full
               from-primary-limeGreen to-primary-brightCyan py-2 w-full text-center"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
