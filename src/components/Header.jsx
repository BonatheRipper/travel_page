import React from "react";
import Decorevv from "../data/images/Header/Decorevv.png";
import Decore_mob from "../data/images/Header/Decore_mob.png";
import Play_Demo from "../data/images/Header/Play_Demo.png";
import Traveller_big_girl from "../data/images/Header/Traveller_big_girl.png";
import planee from "../data/images/Header/planee.png";
import line_1 from "../data/images/Header/line_1.png";

import Ellipse_8ss from "../data/images/Header/Ellipse_8ss.png";

const Header = () => {
  return (
    <header className="w-full  relative top-0 md:pl-32  px-2 ">
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

      <div className="w-full   my-16 md:my-24 flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-6/12   py-8 flex flex-col justify-center items-center md:items-start">
          <h6 className="text-[#DF6951] text-sm md:text-base uppercase Poppins font-extrabold ">
            Best Destinations around the world
          </h6>
          <div className="Volkhov relative text-[#181E4B] py-4 md:py-6 text-4xl md:text-t86 md:font-w7 leading-l12 md:leading-l11 tightest_1 text-center md:text-left md:w-11/12">
            <h1>
              Travel,
              <span className="relative w-full">
                <span className=" mx-2 z-10">enjoy</span>

                <img
                  src={line_1}
                  alt="line_1 "
                  className="absolute z-0 bottom-0 w-96"
                />
              </span>
              and live a new and full life
            </h1>
          </div>
          <p className="text-[#5E6282] px-2 md:px-0  md:text-left md:w-8/12 my-2">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="h-12 px-2 md:px-0 relative w-full my-3 flex flex-row justify-start items-start ">
            <button className="shadow-xl  py-3 md:py-4 px-6 md:px-8 border bg-[#F1A501] hover:bg-black text-white rounded-lg">
              Find out more
            </button>

            <img
              className="w-28 md:w-44 mb-8 absolute md:left-44 left-44 md:-top-2 -top-0 hover:mx-2"
              alt="Play_Demo"
              src={Play_Demo}
            />
          </div>
        </div>
        <div
          //   style={{
          //     backgroundImage: `url('${Traveller_big_girl}')`,
          //   }}
          className={`z-10 md:w-6/12   height bg-scroll  w-full bg-cover  bg-no-repeat	relative `}
        >
          <img
            className="absolute z-10 md:-left-14"
            src={Traveller_big_girl}
            alt="Traveller_big_girl"
          />
          <img
            className="absolute  md:flex md:left-10 md:top-12 w-32 md:w-auto"
            src={planee}
            alt="planee"
          />
          <img
            className="absolute hidden md:flex  -right-0 top-32 z-0"
            src={planee}
            alt="planee2"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
