import React from "react";
import Decorevv from "../data/images/Header/Decorevv.png";
import Decore_mob from "../data/images/Header/Decore_mob.png";

import Ellipse_8ss from "../data/images/Header/Ellipse_8ss.png";

const Header = () => {
  return (
    <header className="w-full  absolute top-0 md:px-32  px-2 ">
      <img
        alt="Ellipse_8ss"
        src={Ellipse_8ss}
        className="absolute top-0 left-0"
      />
      <img
        alt="Decorevv"
        src={Decorevv}
        className="absolute right-0  md:w-auto hidden md:flex"
      />
      {/* <img
        alt="Decorevv"
        src={Decore_mob}
        className="absolute right-0  md:w-auto"
      /> */}
      <div className="w-full h-64 bg-green-500 my-16 md:my-24"></div>
    </header>
  );
};

export default Header;
