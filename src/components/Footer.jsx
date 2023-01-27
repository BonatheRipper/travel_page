import React from "react";
import social_1 from "../data/images/Footer/social_1.png";
import social_2 from "../data/images/Footer/social_2.png";
import social_3 from "../data/images/Footer/social_3.png";
import apple_store from "../data/images/Footer/apple_store.png";
import play_store from "../data/images/Footer/play_store.png";

const Footer = () => {
  return (
    <footer className="footer_section Poppins w-full flex flex-col justify-center items-center">
      <div className="  px-4  w-full my-8 flex flex-col md:flex-row justify-center items-center md:px-20">
        {" "}
        <div className="flex pt-8 flex-col md:justify-start md:items-start justify-center items-start">
          <h1 className="text-[#181E4B] text-3xl md:text-5xl font-medium">
            Jadoo.
          </h1>
          <h6 className="mt-3 text-[#5E6282] text-sm md:w-8/12">
            Book your trip in minute, get full Control for much longer.
          </h6>
        </div>
        <div className="pt-8 flex flex-row items-center justify-between">
          <div className="flex flex-col px-3 md:px-4 ">
            <h1 className="text-black mb-2 font-bold text-sm">Company</h1>
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              About
            </a>{" "}
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Careers
            </a>{" "}
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Mobile
            </a>
          </div>
          <div className="flex flex-col px-3 md:px-4">
            <h1 className="text-black mb-2 font-bold text-sm">Contact</h1>
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Help/FAQ
            </a>{" "}
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Press
            </a>{" "}
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Affiliates
            </a>
          </div>
          <div className="flex flex-col px-3 md:px-4">
            <h1 className="text-black mb-2 font-bold text-sm">More</h1>
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Airlinefees
            </a>
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Airline
            </a>{" "}
            <a
              href="/"
              className="text-xs my-3 text-[#5E6282] hover:text-black"
            >
              Low fare tips
            </a>
          </div>
        </div>
        <div className="flex pt-8 flex-col justify-center items-center px-2 md:mx-4">
          <div className="flex flex-row justify-between items-center">
            <img
              className="w-12 md:w-16 mx-4 transform scale-100 hover:scale-105"
              src={social_1}
              alt={social_1}
            />
            <img
              className="w-12 md:w-16 mx-4 transform scale-100 hover:scale-105"
              src={social_2}
              alt={social_2}
            />
            <img
              className="w-12 md:w-16 mx-4 transform scale-100 hover:scale-105"
              src={social_3}
              alt={social_3}
            />
          </div>
          <div className="flex  justify-center md:justify-start items-start w-full md:px-4">
            <h6 className="py-8 text-[#5E6282] ">Discover our app</h6>
          </div>
          <div className=" flex md:justify-between justify-start items-center">
            <a
              className="md:w-32 mx-4 w-20 transform scale-100 hover:scale-105"
              href="/"
            >
              <img className="" alt="play_store" src={play_store} />
            </a>
            <a
              className="md:w-32 mr-4 w-20 transform scale-100 hover:scale-105"
              href="/"
            >
              <img className="" alt="apple_store" src={apple_store} />
            </a>
          </div>
        </div>
      </div>
      <h1 className="my-8 text-[#5E6282]">All rights reserved@jadoo.co</h1>
    </footer>
  );
};

export default Footer;
