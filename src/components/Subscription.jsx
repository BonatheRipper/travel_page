import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiNavigationFill } from "react-icons/ri";
import rounded from "../data/images/Subscription/rounded.png";
import cat_dots from "../data/images/Category/cat_dots.png";

const Subscription = () => {
  return (
    <section className="px-2 relative z-10  bg-white Subscription_section  mt-2 w-full md:mt-8 md:py-4 flex flex-col justify-center items-center md:px-20">
      <div
        style={{ borderTopLeftRadius: "70px" }}
        className=" w-full md:w-10/12 py-10 rounded-lg bg-opacity-80 hover:bg-opacity-50 relative z-10	flex flex-col justify-center items-center bg-[#DFD7F9]"
      >
        <div className="absolute left-8 md:-bottom-6 -bottom-4 w-full opacity-10">
          <img
            alt="rounded"
            src={rounded}
            className="md:w-36 w-24  transform rotate-90 "
          />
        </div>
        <div className="absolute right-0 md:-bottom-6 -top-4  opacity-10">
          <img
            alt="rounded"
            src={rounded}
            className="md:w-36 w-20  transform "
          />
        </div>
        <div className="sub_nav transform rotate-90 text-white py-4 px-4  md:px-6 md:py-6 -top-4 rounded-full  absolute right-0">
          <RiNavigationFill className="text-xl md:text-2xl" />
        </div>

        <div className="w-full px-8 md:px-4  flex justify-center items-center">
          <h1 className=" text-[#5E6282] md:text-lg text-xs  text-center w-full md:w-8/12">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h1>
        </div>
        <form className="w-full Poppins relative md:w-8/12 mt-8 px-8 md:px-4  flex flex-row justify-center items-center">
          <div className="w-10/12 text-[#39425D] h-8 relative flex justify-start items-center">
            <HiOutlineMail className="mx-4 absolute  z-10  " />
            <input
              type="email"
              className="w-full text-xs md:text-base md:px-8 md:py-4 px-6 py-3 rounded-xl relative z-0"
              placeholder="     Your email"
            />
          </div>
          <button className="md:px-8 md:py-4 px-4 hover:bg-black  py-2 ml-2 md:ml-4 subscribe_btn text-white">
            Subscribe
          </button>
        </form>
      </div>
      <img
        src={cat_dots}
        className="absolute -right-0 top-20 z-0 hidden md:flex"
        alt="dots"
      />
    </section>
  );
};

export default Subscription;
