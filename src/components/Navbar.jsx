import React, { useState } from "react";
import { NavItems } from "../data/Data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import logo from "../data/images/logo_new.png";

const Navbar = () => {
  const [active, setActive] = useState("Sign up");
  const [toggle, SetToggle] = useState(false);

  return (
    <nav className="nav w-full absolute z-50">
      <div className="  w-full flex flex-row md:pl-32 md:py-3 py-2 px-2 justify-between items-center">
        <div className="flex  logo left_logo_items w-32 md:w-40">
          <img src={logo} alt="logo" className="w-full  h-full z-10" />
        </div>
        <div className="right_logo_items flex ">
          <ul className="nav_desk hidden md:flex  flex-row google_sans text-[#212832]">
            {NavItems.map((item, i) => (
              <li
                onClick={() => setActive(item)}
                key={i}
                className={`mx-6 py-2 px-6 text-base border  hover:border-black rounded ${
                  item === active ? "border-black " : "border-transparent"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          <select className="bg-transparent">
            <option>EN</option>
          </select>
          <div className="mobile__menu__Icon px-2 md:hidden w-full relative flex justify-end z-50">
            <button
              onClick={() => SetToggle(true)}
              className={`flex justify-center border hover:border-gray-500 items-center px-2 h-8 w-8  duration-1000 transition py-2 rounded-full bg-gray-100`}
            >
              <HiMenuAlt4 />
            </button>
            {
              <>
                <div
                  className={`flex z-50 items-center  flex-col p-8 w-6/12 top-0 fixed h-full bg-black ${
                    toggle ? "right-0" : "-right-full"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center   w-full">
                    <button
                      onClick={() => SetToggle(false)}
                      className={`flex justify-center  my-4 items-center text-white rounded-full bg-gray-600 px-1 py-2 h-6 w-6  hover:text-red-500`}
                    >
                      <HiX className="" />
                    </button>
                    <ul>
                      {NavItems.map((item, i) => (
                        <li
                          key={i}
                          className="mx-2 Poppins  text-gray-400 hover:text-gray-100 px-8 py-2 duration-1000 transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`flex  items-center   flex-col p-8 w-full top-0 fixed h-full bg-gray-500 opacity-30 ${
                    toggle ? "right-0" : "-right-full"
                  }`}
                ></div>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
