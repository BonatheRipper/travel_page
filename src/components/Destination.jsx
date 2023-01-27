import React from "react";
import { BookingItems, DestinationItems } from "../data/Data";
import destinationBg from "../data/images/Destination/destinationBg.png";
import woman_spread_hands from "../data/images/Destination/woman_spread_hands.jpg";
import bar_1 from "../data/images/Destination/bar_1.png";
import trip_2 from "../data/images/Destination/trip_2.png";
import ongoin from "../data/images/Destination/ongoin.png";
import bright from "../data/images/Destination/bright.png";

import { ImLeaf } from "react-icons/im";
import { MdNavigation } from "react-icons/md";
import { BsBuilding, BsDot, BsHeart } from "react-icons/bs";
import { useState, useEffect } from "react";
import Testimonial from "./Testimonials";

const Destination = () => {
  const [percent, setPercent] = useState(false);
  const [num, setNum] = useState(40);

  function runPercent() {
    setPercent(true);
    for (var i = num; i <= 100; i++) {
      setNum(i);
    }
  }

  return (
    <section className=" destination_section mt-2 w-full md:mt-8 md:py-14 flex flex-col justify-center items-center relative">
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="Poppins  my-2 text-base md:text-xl text-[#5E6282] font-medium">
          Top Selling
        </h1>
        <h2 className="my-2  Volkhov text-[#14183E] font-bold text-3xl md:text-t50 md:text-left text-center">
          Top Destinations
        </h2>
        <div className="destination_box relative md:mt-4 flex flex-col md:flex-row justify-center items-center py-4 w-full">
          <img
            src={destinationBg}
            alt={destinationBg}
            className="absolute right-10 top-10"
          />
          {DestinationItems.map((item, i) => (
            <div
              key={i}
              className=" transform scale-100 hover:scale-105 flex relative flex-col md:mx-3  justify-center items-center"
            >
              <img
                className="relative top-0  z-0 "
                alt={item.title}
                src={item.image}
              />
              <div className="w-8/12 text-[#5E6282] Poppins bg-white shadow-sm rounded-b-3xl h-24 absolute bottom-28 z-10  px-2 items-start pt-4 text-sm">
                <div className="flex justify-between md:px-2">
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </div>
                <div className="pt-4 px-1 md:px-3 text-[#5E6282] flex flex-row justify-start items-start">
                  <span className="px-3 transform rotate-90">{item.icon}</span>
                  <span className="text-xs">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full px-2 md:px-20 md:mt-4 flex flex-col md:flex-row justify-between items-center">
          <div className=" text-[#5E6282] w-full md:w-6/12  flex flex-col">
            <h6 className="Poppins px-2 md:px-0">Easy and Fast</h6>
            <h2 className="my-2 px-2 md:px-0 md:my-4 md:w-11/12 md:leading-l14 text-[#14183E] Volkhov font-bold text-3xl md:text-t50 md:text-left text-ceter">
              Book your next trip in 3 easy steps
            </h2>

            <div className="flex  my-4 flex-col justify-center items-center md:justify-start md:items-start">
              {BookingItems.map((item, i) => (
                <div className=" px-4 py-2  hover:shadow rounded-xl flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start">
                  <img
                    className="w-20 md:w-28 py-1"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="flex Poppins flex-col justify-center items-center md:justify-start md:items-start">
                    <h1 className="md:mt-4  font-bold">{item.title}</h1>
                    <h6 className="text-center md:text-left">{item.body}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="increment"
            onMouseEnter={() => setPercent(true)}
            onMouseLeave={() => setPercent(false)}
            className="Poppins relative z-10  md:my-0 my-6 px-2 md:px-0 "
          >
            <img
              src={bright}
              alt="bright"
              className="absolute z-0 md:-top-40 -top-20 right-0"
            />
            <div className="bg-whi  relative">
              <div
                style={{ left: "35%", top: "48%" }}
                className="w-96 bg-white hidden md:flex flex-row justify-start items-start px-4 py-6 absolute  z-10 shadow-xl rounded-2xl"
              >
                <img
                  className="borde w-20 rounded-2xl  md:py-8"
                  src={ongoin}
                  alt={"ongoin"}
                />
                <div className="md:mt-8 w-full mx-4 flex flex-col justify-start items-start">
                  <h1 className="my-2 text-[#84829A] text-sm">Ongoing</h1>
                  <h1 className="mb-2 text-[#080809] text-sm">Trip to rome</h1>
                  <div className="mb-2 text-[#080809] flex flex-row">
                    <span className="text-[#8A79DF] mr-2">{num}%</span>
                    <span className="text-[#080809] text-sm">completed</span>
                  </div>
                  {/* <img src={bar_1} alt={bar_1} /> */}
                  <div className="w-full py-2 relative">
                    <div className="w-full bg-gray-200 absolute z-0 rounded-full border h-2" />
                    <div
                      className={` hover:w-full ${
                        percent ? "w-full" : "w-6/12"
                      }  bg-[#8A79DF] absolute rounded-full border h-2`}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="relative  z-0 w-full md:w-w400">
                <div className="px-2 bg-white  md:py-8 w-full md:w-8/12  rounded-2xl flex flex-col justify-start items-start  py-4 shadow-xl ">
                  <img
                    className=" rounded-2xl w-full md:py-8"
                    src={woman_spread_hands}
                    alt={"woman_spread_hands"}
                  />
                  <div className="w-full md:px-2 my-4 text-[#080809]   flex flex-col  justify-start items-start">
                    <h1 className="text-base md:text-lg"> Trip To Greece</h1>
                    <h6 className="text-[#84829A] text-xs md:text-base my-2">
                      14-29 June| by Robbin joseph
                    </h6>
                    <div className="my-3 flex flex-row justify-start items-center">
                      <div className="transform hover:rotate-45   text-[#84829A] border border-[#F5F5F5] hover:border-gray-200 px-4 py-4 mx-2 bg-[#F5F5F5] rounded-full">
                        <ImLeaf />
                      </div>
                      <div className="transform hover:rotate-45 text-[#84829A] border border-[#F5F5F5] hover:border-gray-200 px-4 py-4 mx-2 bg-[#F5F5F5] rounded-full">
                        <img alt="trip_img" src={trip_2} />
                      </div>
                      <div className="transform hover:rotate-90 rotate-45 text-[#84829A] border border-[#F5F5F5] hover:border-gray-200 px-4 py-4 mx-2 bg-[#F5F5F5] rounded-full">
                        <MdNavigation />
                      </div>
                    </div>
                    <div className="my-4 flex text-[#84829A] flex-row justify-between items-center  w-full">
                      <div className=" mx-4   flex justify-between items-end">
                        <BsBuilding className="text-xl" />
                        <p className="text-xs mx-4">24 people going</p>
                      </div>
                      <BsHeart className="text-2xl text-[#4152CA] hover:text-red-500 hover:animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white flex md:hidden flex-row justify-start items-start px-2 py-6 absolute -bottom-44  z-10 shadow-xl left-0 rounded-2xl">
                <img
                  className="borde w-20 rounded-2xl  md:py-8"
                  src={ongoin}
                  alt={"ongoin"}
                />
                <div className="md:mt-8 w-full mx-4 flex flex-col justify-start items-start">
                  <h1 className="my-2 text-[#84829A] text-sm">Ongoing</h1>
                  <h1 className="mb-2 text-[#080809] text-sm">Trip to rome</h1>
                  <div className="mb-2 text-[#080809] flex flex-row">
                    <span className="text-[#8A79DF] mr-2">{num}%</span>
                    <span className="text-[#080809] text-sm">completed</span>
                  </div>
                  {/* <img src={bar_1} alt={bar_1} /> */}
                  <div className="w-full py-2 relative">
                    <div className="w-full bg-gray-200 absolute z-0 rounded-full border h-2" />
                    <div
                      className={` hover:w-full ${
                        percent ? "w-full" : "w-6/12"
                      }  bg-[#8A79DF] absolute rounded-full border h-2`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </section>
  );
};

export default Destination;
