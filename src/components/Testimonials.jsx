import React, { useState, useEffect } from "react";
import AOS from "aos";
import { BsDot } from "react-icons/bs";
import social_3 from "../data/images/Footer/social_3.png";
import smile_1 from "../data/images/Testimonial/smile_1.png";

import { MdNavigateBefore } from "react-icons/md";

const Testimonial = () => {
  const [active, setActive] = useState("NEXT");
  const [slide, setSlide] = useState(0);
  const TestimonialData = [
    {
      title: "Junior Bona",
      body: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      location: "Okikwe, Nigeria",
      image: smile_1,
    },
    {
      title: "Mike taylor",
      body: "Thank you for the random number site. Our university, in a campaign of privacy protection, has forbidden us faculty to use any part of student social security numbers to post grades",
      location: "Lahore, Pakistan",
      image: smile_1,
    },
    {
      title: "Bona Andrews",
      body: "Using your very friendly site, I was able to generate all the 4-digit numbers I'll ever need to assign to students for grade-posting purposes.",
      location: "Imo, Owerri",
      image: smile_1,
    },
    {
      title: "Izeogu Bona",
      body: "Susan Toby Evans, Department of Anthropology, Penn State University",
      location: "Benue, Makurdi",
      image: smile_1,
    },
  ];
  function slideAnimate(action) {
    if (action === "NEXT") {
      if (slide >= TestimonialData.length - 1) return;
      setActive(action);
      setSlide((prev) => prev + 1);
    }
    if (action === "PREV") {
      if (slide === 0) return;
      setActive(action);
      setSlide((prev) => prev - 1);
    }
  }
  console.log(slide);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="w-full px-3 md:px-20 md:mt-4 mt-60 flex flex-col md:flex-row justify-between items-center"
    >
      <div className=" text-[#5E6282] w-full md:w-6/12  flex flex-col">
        <h6 className="Poppins px-2 md:px-0">Testimonials</h6>
        <h2 className="my-2 px-2 md:px-0 md:my-4 md:w-11/12 md:leading-l14 text-[#14183E] Volkhov font-bold text-3xl md:text-t50 md:text-left text-ceter">
          What people say about Us.
        </h2>
        <div className="flex  flex-row justify-start items-center my-4">
          {TestimonialData.map((_, i) => (
            <BsDot
              key={i}
              className={`text-2xl ${slide === i ? "" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <div className="md:my-0 relative my-4 text-[#5E6282] w-full md:w-6/12  flex flex-row justify-between items-center">
        {TestimonialData.map((item, i) => (
          <div
            key={i}
            className={`${
              slide === i || slide + 1 === i || slide - 1 === i
                ? "flex"
                : "hidden"
            }  bg-white absolute ${
              slide === i
                ? "top-0  z-10  w-full shadow-xl"
                : " top-28 md:top-32 md:-right-10  right-0  z-0 w-10/12 shadow"
            } justify-center items-center py-4 rounded-2xl`}
          >
            <div className="flex flex-row items-start w-full">
              <div className={` ${slide === i ? "flex " : "hidden"}`}>
                <img
                  src={smile_1}
                  alt="smile"
                  className={`rounded-full  ${
                    slide === i ? "flex " : "hidden"
                  }`}
                />
              </div>
              <div
                className={`flex  ${
                  slide === i ? "px-0 " : "px-4"
                } justify-start items-start flex-col mt-6 md:mt-8 ml-2`}
              >
                <h1
                  className={`  ${
                    slide === i ? "flex" : "hidden"
                  } md:text-sm text-xs  w-10/12 `}
                >
                  {item.body}
                </h1>
                <h4 className="pt-4 text-sm font-bold ">{item.title}</h4>
                <h6 className="text-xs mt-2">{item.location}</h6>
              </div>
            </div>
            <div
              className={`w-8  ${
                slide === i ? "flex" : "hidden"
              } flex-col justify-between items-center mx-4  text-gray-300 `}
            >
              <MdNavigateBefore
                onClick={() => slideAnimate("PREV")}
                className={`transform rotate-90 text-2xl border rounded-full ${
                  active === "PREV"
                    ? "text-gray-900 border-gray-400"
                    : "hover:text-gray-900 hover:border-gray-400"
                }  my-2`}
              />
              <MdNavigateBefore
                onClick={() => slideAnimate("NEXT")}
                className={`transform -rotate-90 text-2xl border rounded-full ${
                  active === "NEXT"
                    ? "text-gray-900 border-gray-400"
                    : "hover:text-gray-900 hover:border-gray-400"
                }   my-2`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
