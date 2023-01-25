import React, { useState } from "react";
import { Navitems } from "../data/Data";
import logo from "../data/images/logo_new.png";

const Navbar = () => {
  const [active, setActive] = useState("Sign up");
  return (
    <nav className="nav w-full absolute z-10">
      <div className="  w-full flex flex-row md:px-32 md:py-3 py-2 px-2 justify-between items-center">
        <div className="flex  logo left_logo_items w-32 md:w-40">
          <img src={logo} alt="logo" className="w-full  h-full z-10" />
        </div>
        <div className="right_logo_items flex ">
          <ul className="nav_desk hidden md:flex  flex-row google_sans text-[#212832]">
            {Navitems.map((item, i) => (
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
