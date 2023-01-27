import React from "react";
import { CategoryItems } from "../data/Data";
import cat_rectangle from "../data/images/Category/cat_rectangle.png";
import cat_dots from "../data/images/Category/cat_dots.png";
import { useEffect } from "react";
import AOS from "aos";
const Category = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      data-aos="fade-up"
      className="caterogy_section mt-80 w-full md:mt-8 md:py-14 flex flex-col justify-center items-center relative"
    >
      <img
        src={cat_dots}
        className="absolute right-0 top-20 md:top-10 w-40 md:w-auto"
        alt="cat_dots"
      />
      <h1 className="Poppins my-2 text-base md:text-xl text-[#5E6282] font-medium">
        CATEGORY
      </h1>
      <h2 className="my-2 text-[#14183E]  Volkhov font-bold text-3xl md:text-t50 md:text-left text-center">
        We Offer Best Services
      </h2>
      <div className="category_box pt-12 px-2 w-full grid grid-cols-2 gap-4 md:flex flex-col md:flex-row md:my-6 justify-center">
        {CategoryItems.map((item, i) => (
          <div key={i} className="relative">
            <div
              className={`transform scale-100 hover:scale-105 z-10 hover:shadow-xl  bg-white ${
                item.custom_css ? "md:shadow-xl" : ""
              } px-2 py-6 rounded-xl flex my-2 md:my-2 flex-col justify-center items-center  w-full md:w-52  md:mx-8  relative`}
            >
              <img
                className="md:w-32 w-24 my-1"
                src={item.image}
                alt={item.alt}
              />
              <h1 className="my-1 text-[#1E1D4C] text-center uppercase text-xs md:text-base Open_Sans">
                {item.title}
              </h1>
              <p className="my-1 Poppins text-[#5E6282] text-center text-xs md:text-base">
                {item.body}
              </p>
            </div>
            <img
              src={cat_rectangle}
              alt="cat_rectangle"
              className={`absolute ${
                item.custom_css ? "md:flex hidden" : "hidden"
              } md:-bottom-10 -bottom-2`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
