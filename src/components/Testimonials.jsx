import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import social_3 from "../data/images/Footer/social_3.png";
import smile_1 from "../data/images/Testimonial/smile_1.png";

import { MdNavigateBefore } from "react-icons/md";

const Testimonial = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full px-3 md:px-20 md:mt-4 mt-60 flex flex-col md:flex-row justify-between items-center">
      <div className=" text-[#5E6282] w-full md:w-6/12  flex flex-col">
        <h6 className="Poppins px-2 md:px-0">Testimonials</h6>
        <h2 className="my-2 px-2 md:px-0 md:my-4 md:w-11/12 md:leading-l14 text-[#14183E] Volkhov font-bold text-3xl md:text-t50 md:text-left text-ceter">
          What people say about Us.
        </h2>
        <div className="flex  flex-row justify-start items-center my-4">
          <BsDot className="text-2xl " />
          <BsDot className="text-2xl text-gray-300" />
          <BsDot className="text-2xl text-gray-300" />
        </div>
      </div>
      <div className="md:my-0 relative my-4 text-[#5E6282] w-full md:w-6/12  flex flex-row justify-between items-center">
        <div className="flex bg-white relative z-10 w-full justify-center items-center shadow-xl py-4 rounded-2xl">
          <div className="flex flex-row w-full">
            <div className="rounded-full">
              <img src={smile_1} alt="smile" />
            </div>
            <div className="flex justify-start items-start flex-col mt-6 md:mt-8">
              <h1 className="md:text-sm text-xs  w-10/12 ml-1">
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </h1>
              <h4 className="pt-4 text-sm font-bold">Mike taylor</h4>
              <h6 className="text-xs mt-2">Lahore, Pakistan</h6>
            </div>
          </div>
          <div className="w-8 flex flex-col justify-between items-center mx-4 ">
            <MdNavigateBefore
              onMouseEnter={() => setActive(!active)}
              onMouseLeave={() => setActive(!active)}
              className={`transform rotate-90 text-2xl ${
                active ? "text-gray-300" : "text-gray-900 "
              }  my-2`}
            />
            <MdNavigateBefore
              onMouseEnter={() => setActive(!active)}
              onMouseLeave={() => setActive(!active)}
              className={`transform -rotate-90 text-2xl ${
                active ? "text-gray-900" : "text-gray-300 "
              }   my-2`}
            />
          </div>
        </div>
        <div className="w-10/12 flex px-2 justify-start items-start flex-col absolute -bottom-20 shadow right-0 ">
          <h4 className="pt-4 text-sm font-bold mt-4">Mike taylor</h4>
          <h6 className="text-xs mt-2 mb-4">Lahore, Pakistan</h6>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
